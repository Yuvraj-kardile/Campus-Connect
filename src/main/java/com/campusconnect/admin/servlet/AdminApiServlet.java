package com.campusconnect.admin.servlet;

import com.campusconnect.admin.dao.AdminDAO;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.sql.SQLException;
import java.util.Map;

@WebServlet("/api/admin/*")
public class AdminApiServlet extends HttpServlet {
    private final AdminDAO dao = new AdminDAO();
    private final ObjectMapper mapper = new ObjectMapper();

    @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String path = req.getPathInfo() == null ? "/" : req.getPathInfo();
        try {
            Object result = switch (path) {
                case "/institutes" -> dao.listInstitutes();
                case "/users" -> dao.listUsers();
                case "/posts" -> dao.listPosts();
                case "/reports" -> dao.listReports();
                case "/audit" -> dao.listAudit();
                case "/stats" -> dao.getStats();
                default -> null;
            };
            if (result == null) { sendError(resp, 404, "Unknown API resource."); return; }
            sendJson(resp, 200, result);
        } catch (SQLException ex) {
            getServletContext().log("Admin API database error", ex);
            sendError(resp, 500, "Database query failed. Check the database schema and connection settings.");
        }
    }

    @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        if (!validCsrf(req)) { sendError(resp, 403, "Invalid CSRF token. Refresh the page and try again."); return; }
        String path = req.getPathInfo() == null ? "/" : req.getPathInfo();
        try {
            @SuppressWarnings("unchecked") 
            Map<String, Object> body = mapper.readValue(req.getInputStream(), Map.class);
            if ("/action".equals(path)) {
                String entity = string(body.get("entity")); String action = string(body.get("action"));
                long id = Long.parseLong(String.valueOf(body.get("id")));
                String details = string(body.get("details"));
                dao.recordAction(entity, id, action, details, (String) req.getSession().getAttribute("adminEmail"), (String) req.getSession().getAttribute("adminName"));
                sendJson(resp, 200, Map.of("success", true));
                return;
            }
            if ("/users".equals(path)) {
                Map<String, Object> user = dao.createUser(string(body.get("name")), string(body.get("email")), string(body.get("role")), (String) req.getSession().getAttribute("adminEmail"), (String) req.getSession().getAttribute("adminName"));
                sendJson(resp, 201, user);
                return;
            }
            sendError(resp, 404, "Unknown API resource.");
        } catch (IllegalArgumentException ex) {
            sendError(resp, 400, ex.getMessage() == null ? "Invalid request." : ex.getMessage());
        } catch (SQLException ex) {
            getServletContext().log("Admin API update failed", ex);
            if ("23505".equals(ex.getSQLState())) { sendError(resp, 409, "A user with that email address already exists."); return; }
            sendError(resp, 500, "Database update failed. No change was saved.");
        } catch (Exception ex) {
            sendError(resp, 400, "Invalid JSON request body.");
        }
    }

    private boolean validCsrf(HttpServletRequest req) {
        Object token = req.getSession().getAttribute("csrfToken");
        String expected = token == null ? null : token.toString();
        String given = req.getHeader("X-CSRF-Token");
        return expected != null && given != null && MessageDigest.isEqual(expected.getBytes(StandardCharsets.UTF_8), given.getBytes(StandardCharsets.UTF_8));
    }
    private String string(Object value) { return value == null ? "" : String.valueOf(value).trim(); }
    private void sendJson(HttpServletResponse resp, int status, Object value) throws IOException { resp.setStatus(status); resp.setCharacterEncoding("UTF-8"); resp.setContentType("application/json"); mapper.writeValue(resp.getOutputStream(), value); }
    private void sendError(HttpServletResponse resp, int status, String message) throws IOException { sendJson(resp, status, Map.of("error", message == null ? "Request failed." : message)); }
}
