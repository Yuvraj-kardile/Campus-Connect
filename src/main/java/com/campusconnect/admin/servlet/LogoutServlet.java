package com.campusconnect.admin.servlet;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {
    @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        HttpSession session = req.getSession(false);
        String provided = req.getParameter("csrfToken");
        String expected = session == null ? null : (String) session.getAttribute("csrfToken");
        if (provided == null || expected == null || !MessageDigest.isEqual(provided.getBytes(StandardCharsets.UTF_8), expected.getBytes(StandardCharsets.UTF_8))) {
            resp.sendError(HttpServletResponse.SC_FORBIDDEN, "Invalid CSRF token."); return;
        }
        if (session != null) session.invalidate();
        resp.sendRedirect(req.getContextPath() + "/login");
    }

    @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException { resp.sendRedirect(req.getContextPath() + "/admin"); }
}
