package com.campusconnect.admin.servlet;

import com.campusconnect.admin.dao.AdminDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.security.SecureRandom;
import java.sql.SQLException;
import java.util.HexFormat;
import java.util.Map;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private final AdminDAO dao = new AdminDAO();
    private final SecureRandom random = new SecureRandom();

    @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession(true);
        if (session.getAttribute("csrfToken") == null) session.setAttribute("csrfToken", token());
        req.getRequestDispatcher("/WEB-INF/views/login.jsp").forward(req, resp);
    }

    @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        String email = req.getParameter("email");
        String password = req.getParameter("password");
        if (email == null || password == null || email.isBlank() || password.isBlank()) {
            req.setAttribute("errorMessage", "Enter your email address and password.");
            req.getRequestDispatcher("/WEB-INF/views/login.jsp").forward(req, resp); return;
        }
        try {
            Map<String, String> admin = dao.authenticate(email, password);
            if (admin == null) {
                req.setAttribute("errorMessage", "Invalid credentials or inactive administrator account.");
                req.getRequestDispatcher("/WEB-INF/views/login.jsp").forward(req, resp); return;
            }
            HttpSession old = req.getSession(false); if (old != null) old.invalidate();
            HttpSession session = req.getSession(true);
            session.setAttribute("adminEmail", admin.get("email"));
            session.setAttribute("adminName", admin.get("displayName"));
            session.setAttribute("csrfToken", token());
            session.setMaxInactiveInterval(30 * 60);
            resp.sendRedirect(req.getContextPath() + "/admin");
        } catch (SQLException ex) {
            getServletContext().log("Admin login database error", ex);
            String databaseError = ex.getMessage() == null ? "" : ex.getMessage();
            if (databaseError.contains("DB_PASSWORD is not configured")) {
                req.setAttribute("errorMessage", "Database password is not configured. Set DB_PASSWORD for Tomcat or create a local .env file from .env.example.");
            } else {
                req.setAttribute("errorMessage", "Unable to reach the database. Confirm PostgreSQL is running and DB_URL, DB_USER, and DB_PASSWORD are correct.");
            }
            req.getRequestDispatcher("/WEB-INF/views/login.jsp").forward(req, resp);
        }
    }

    private String token() { byte[] bytes = new byte[32]; random.nextBytes(bytes); return HexFormat.of().formatHex(bytes); }
}
