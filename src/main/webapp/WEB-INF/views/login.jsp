<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="true" %>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin Login · CampusConnect</title>
  <link rel="stylesheet" href="<%= request.getContextPath() %>/assets/css/login.css">
</head>
<body>
  <main class="login-shell">
    <section class="login-card">
      <div class="brand-mark" aria-hidden="true">CC</div>
      <p class="eyebrow">CAMPUSCONNECT</p>
      <h1>Admin sign in</h1>
      <p class="subtitle">Sign in to manage institutes, users, posts, and reported content.</p>
      <% if (request.getAttribute("errorMessage") != null) { %>
        <div class="error-message" role="alert"><%= request.getAttribute("errorMessage") %></div>
      <% } %>
      <form action="<%= request.getContextPath() %>/login" method="post">
        <label for="email">Admin email</label>
        <input id="email" name="email" type="email" placeholder="admin@campusconnect.local" required autocomplete="username">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Enter password" required autocomplete="current-password">
        <button type="submit">Sign in</button>
      </form>
      <p class="login-foot">Development demo only. Change the seeded credentials before deployment.</p>
    </section>
  </main>
</body>
</html>
