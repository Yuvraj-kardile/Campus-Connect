<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<% response.sendRedirect(request.getContextPath() + (session.getAttribute("adminEmail") == null ? "/login" : "/admin")); %>
