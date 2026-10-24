package com.campusconnect.admin.dao;

import com.campusconnect.admin.config.Database;
import com.campusconnect.admin.security.PasswordUtil;

import java.sql.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class AdminDAO {
    private static final String[] COLORS = {"#e5efff", "#f5eaff", "#e5f8ec", "#ffebed", "#fff0dc", "#e7efff", "#fce7f3", "#ece8ff"};
    private static final String[] INKS = {"#2868e8", "#8a56d8", "#149362", "#dd5360", "#c47a0a", "#2466db", "#be4384", "#6e55d8"};
    private static final DateTimeFormatter PRETTY_DATE = DateTimeFormatter.ofPattern("MMM dd, yyyy", Locale.ENGLISH);

    public Map<String, String> authenticate(String email, String password) throws SQLException {
        String sql = "SELECT email, display_name, password_hash FROM public.admin_users WHERE email = ? AND is_active = TRUE";
        try (Connection c = Database.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setString(1, email.trim().toLowerCase(Locale.ROOT));
            try (ResultSet rs = ps.executeQuery()) {
                if (!rs.next() || !PasswordUtil.verify(password, rs.getString("password_hash"))) return null;
                Map<String, String> result = new HashMap<>();
                result.put("email", rs.getString("email"));
                result.put("displayName", rs.getString("display_name"));
                return result;
            }
        }
    }

    public List<Map<String, Object>> listInstitutes() throws SQLException {
        String sql = "SELECT id, name, city, email, applied_on, status FROM public.institutes ORDER BY applied_on DESC, id DESC";
        List<Map<String, Object>> rows = new ArrayList<>();
        try (Connection c = Database.getConnection(); PreparedStatement ps = c.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                String name = rs.getString("name"); long id = rs.getLong("id");
                Map<String, Object> row = new LinkedHashMap<>();
                row.put("id", id); row.put("name", name); row.put("city", rs.getString("city"));
                row.put("date", rs.getDate("applied_on").toLocalDate().toString()); row.put("email", rs.getString("email"));
                row.put("status", rs.getString("status")); row.put("initial", initials(name)); row.put("color", color(id)); row.put("ink", ink(id));
                rows.add(row);
            }
        }
        return rows;
    }

    public List<Map<String, Object>> listUsers() throws SQLException {
        String sql = "SELECT id, name, email, joined_on, role, status, last_active_label FROM public.user_accounts ORDER BY joined_on DESC, id DESC";
        List<Map<String, Object>> rows = new ArrayList<>();
        try (Connection c = Database.getConnection(); PreparedStatement ps = c.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                String name = rs.getString("name"); long id = rs.getLong("id");
                Map<String, Object> row = new LinkedHashMap<>();
                row.put("id", id); row.put("name", name); row.put("email", rs.getString("email"));
                row.put("joined", pretty(rs.getDate("joined_on"))); row.put("role", rs.getString("role"));
                row.put("status", rs.getString("status")); row.put("last", rs.getString("last_active_label"));
                row.put("initial", initials(name)); row.put("color", color(id)); row.put("ink", ink(id)); rows.add(row);
            }
        }
        return rows;
    }

    public List<Map<String, Object>> listPosts() throws SQLException {
        String sql = "SELECT p.id, p.title, i.name AS institute, p.post_type, p.status, p.published_on, p.likes_count, p.comments_count FROM public.posts p JOIN public.institutes i ON i.id = p.institute_id ORDER BY p.published_on DESC, p.id DESC";
        List<Map<String, Object>> rows = new ArrayList<>();
        try (Connection c = Database.getConnection(); PreparedStatement ps = c.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                String institute = rs.getString("institute"); long id = rs.getLong("id");
                Map<String, Object> row = new LinkedHashMap<>();
                row.put("id", id); row.put("title", rs.getString("title")); row.put("institute", institute);
                row.put("type", rs.getString("post_type")); row.put("status", rs.getString("status"));
                row.put("date", pretty(rs.getDate("published_on"))); row.put("likes", rs.getInt("likes_count"));
                row.put("comments", rs.getInt("comments_count")); row.put("initial", initials(institute));
                row.put("color", color(id)); row.put("ink", ink(id)); rows.add(row);
            }
        }
        return rows;
    }

    public List<Map<String, Object>> listReports() throws SQLException {
        String sql = "SELECT id, title, snippet, reporter_name, reported_type, status, created_on, reason FROM public.reports ORDER BY created_on DESC, id DESC";
        List<Map<String, Object>> rows = new ArrayList<>();
        try (Connection c = Database.getConnection(); PreparedStatement ps = c.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                Map<String, Object> row = new LinkedHashMap<>();
                row.put("id", rs.getLong("id")); row.put("title", rs.getString("title")); row.put("snippet", rs.getString("snippet"));
                row.put("reporter", rs.getString("reporter_name")); row.put("type", rs.getString("reported_type"));
                row.put("status", rs.getString("status")); row.put("date", pretty(rs.getDate("created_on")));
                row.put("reason", rs.getString("reason")); rows.add(row);
            }
        }
        return rows;
    }

    public List<Map<String, Object>> listAudit() throws SQLException {
        String sql = "SELECT admin_name, action, target, details, created_at FROM public.audit_logs ORDER BY id DESC LIMIT 300";
        List<Map<String, Object>> rows = new ArrayList<>();
        try (Connection c = Database.getConnection(); PreparedStatement ps = c.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                Map<String, Object> row = new LinkedHashMap<>(); row.put("by", rs.getString("admin_name"));
                row.put("action", rs.getString("action")); row.put("target", rs.getString("target"));
                row.put("details", rs.getString("details")); row.put("time", rs.getTimestamp("created_at").toLocalDateTime().format(DateTimeFormatter.ofPattern("dd MMM yyyy, HH:mm")));
                rows.add(row);
            }
        }
        return rows;
    }

    public Map<String, Object> getStats() throws SQLException {
        Map<String, Object> s = new LinkedHashMap<>();
        try (Connection c = Database.getConnection()) {
            s.put("students", count(c, "SELECT COUNT(*) FROM public.user_accounts WHERE role='Student'"));
            s.put("activeUsers", count(c, "SELECT COUNT(*) FROM public.user_accounts WHERE status='Active'"));
            s.put("suspendedUsers", count(c, "SELECT COUNT(*) FROM public.user_accounts WHERE status='Suspended'"));
            s.put("institutes", count(c, "SELECT COUNT(*) FROM public.institutes WHERE status='Approved'"));
            s.put("pendingInstitutes", count(c, "SELECT COUNT(*) FROM public.institutes WHERE status='Pending'"));
            s.put("rejectedInstitutes", count(c, "SELECT COUNT(*) FROM public.institutes WHERE status='Rejected'"));
            s.put("allInstitutes", count(c, "SELECT COUNT(*) FROM public.institutes"));
            s.put("posts", count(c, "SELECT COUNT(*) FROM public.posts WHERE status='Published'"));
            s.put("totalPosts", count(c, "SELECT COUNT(*) FROM public.posts"));
            s.put("reports", count(c, "SELECT COUNT(*) FROM public.reports"));
            s.put("openReports", count(c, "SELECT COUNT(*) FROM public.reports WHERE status='Open'"));
            s.put("reviewingReports", count(c, "SELECT COUNT(*) FROM public.reports WHERE status='Reviewing'"));
            s.put("resolvedReports", count(c, "SELECT COUNT(*) FROM public.reports WHERE status='Resolved'"));
        }
        return s;
    }

    public void recordAction(String entity, long id, String action, String details, String adminEmail, String adminName) throws SQLException {
        String table; String status; String idColumn = "id"; String label;
        switch (entity) {
            case "institute" -> { table = "institutes"; if ("approve".equals(action)) { status = "Approved"; label = "Institute approved"; } else if ("reject".equals(action)) { status = "Rejected"; label = "Institute rejected"; } else throw new IllegalArgumentException("Unsupported institute action."); }
            case "user" -> { table = "user_accounts"; if ("suspend".equals(action)) { status = "Suspended"; label = "User suspended"; } else if ("activate".equals(action)) { status = "Active"; label = "User reactivated"; } else throw new IllegalArgumentException("Unsupported user action."); }
            case "post" -> { table = "posts"; if ("hide".equals(action)) { status = "Hidden"; label = "Post hidden"; } else if ("restore".equals(action)) { status = "Published"; label = "Post restored"; } else if ("archive".equals(action)) { status = "Archived"; label = "Post archived"; } else throw new IllegalArgumentException("Unsupported post action."); }
            case "report" -> { table = "reports"; if ("reviewing".equals(action)) { status = "Reviewing"; label = "Report moved to review"; } else if ("resolve".equals(action)) { status = "Resolved"; label = "Report resolved"; } else if ("dismiss".equals(action)) { status = "Dismissed"; label = "Report dismissed"; } else throw new IllegalArgumentException("Unsupported report action."); }
            default -> throw new IllegalArgumentException("Unsupported entity.");
        }
        try (Connection c = Database.getConnection()) {
            c.setAutoCommit(false);
            try {
                String target = targetName(c, table, id);
                if (target == null) throw new IllegalArgumentException("Record not found.");
                try (PreparedStatement ps = c.prepareStatement("UPDATE public." + table + " SET status=? WHERE " + idColumn + "=?")) {
                    ps.setString(1, status); ps.setLong(2, id);
                    if (ps.executeUpdate() != 1) throw new IllegalArgumentException("Record could not be updated.");
                }
                insertAudit(c, adminEmail, adminName, label, target, safeDetails(details, "Status changed to " + status));
                c.commit();
            } catch (Exception ex) {
                c.rollback();
                if (ex instanceof SQLException sqlEx) throw sqlEx;
                if (ex instanceof IllegalArgumentException argEx) throw argEx;
                throw new SQLException("Could not save administrator action.", ex);
            } finally { c.setAutoCommit(true); }
        }
    }

    public Map<String, Object> createUser(String name, String email, String role, String adminEmail, String adminName) throws SQLException {
        if (name == null || name.isBlank() || name.length() > 160) throw new IllegalArgumentException("Enter a valid name (1 to 160 characters).");
        if (email == null || !email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$") || email.length() > 190) throw new IllegalArgumentException("Enter a valid email address.");
        if (!Set.of("Student", "Institute staff", "Platform admin").contains(role)) throw new IllegalArgumentException("Choose a valid role.");
        long id;
        try (Connection c = Database.getConnection()) {
            c.setAutoCommit(false);
            try {
                String sql = "INSERT INTO public.user_accounts (name,email,joined_on,role,status,last_active_label) VALUES (?,?,CURRENT_DATE,?,'Active','Never')";
                try (PreparedStatement ps = c.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
                    ps.setString(1, name.trim()); ps.setString(2, email.trim().toLowerCase(Locale.ROOT)); ps.setString(3, role);
                    ps.executeUpdate(); try (ResultSet keys = ps.getGeneratedKeys()) { if (!keys.next()) throw new SQLException("New user ID was not returned."); id = keys.getLong(1); }
                }
                insertAudit(c, adminEmail, adminName, "User created", name.trim(), "Account invited/created with role " + role + "; no login password is created by this admin action.");
                c.commit();
            } catch (Exception ex) {
                c.rollback();
                if (ex instanceof SQLException sqlEx) throw sqlEx;
                if (ex instanceof IllegalArgumentException argEx) throw argEx;
                throw new SQLException("Could not create user.", ex);
            } finally { c.setAutoCommit(true); }
        }
        for (Map<String, Object> user : listUsers()) if (((Number) user.get("id")).longValue() == id) return user;
        throw new SQLException("New user was inserted but could not be loaded.");
    }

    private String targetName(Connection c, String table, long id) throws SQLException {
        String sql = switch (table) {
            case "institutes" -> "SELECT name FROM public.institutes WHERE id=?";
            case "user_accounts" -> "SELECT name FROM public.user_accounts WHERE id=?";
            case "posts" -> "SELECT title FROM public.posts WHERE id=?";
            case "reports" -> "SELECT title FROM public.reports WHERE id=?";
            default -> throw new IllegalArgumentException("Invalid table.");
        };
        try (PreparedStatement ps = c.prepareStatement(sql)) { ps.setLong(1, id); try (ResultSet rs = ps.executeQuery()) { return rs.next() ? rs.getString(1) : null; } }
    }

    private void insertAudit(Connection c, String adminEmail, String adminName, String action, String target, String details) throws SQLException {
        String sql = "INSERT INTO public.audit_logs (admin_email,admin_name,action,target,details) VALUES (?,?,?,?,?)";
        try (PreparedStatement ps = c.prepareStatement(sql)) { ps.setString(1, adminEmail); ps.setString(2, adminName); ps.setString(3, action); ps.setString(4, target); ps.setString(5, details); ps.executeUpdate(); }
    }

    private static String safeDetails(String value, String fallback) { if (value == null || value.isBlank()) return fallback; return value.length() > 1000 ? value.substring(0,1000) : value; }
    private static long count(Connection c, String sql) throws SQLException { try (Statement st = c.createStatement(); ResultSet rs = st.executeQuery(sql)) { rs.next(); return rs.getLong(1); } }
    private static String initials(String name) { return Arrays.stream(name.trim().split("\\s+")).filter(s -> !s.isBlank()).limit(2).map(s -> s.substring(0,1)).reduce("", String::concat).toUpperCase(Locale.ROOT); }
    private static String color(long id) { return COLORS[(int) Math.floorMod(id - 1, COLORS.length)]; }
    private static String ink(long id) { return INKS[(int) Math.floorMod(id - 1, INKS.length)]; }
    private static String pretty(java.sql.Date date) { if (date == null) return ""; return date.toLocalDate().format(PRETTY_DATE); }
}
