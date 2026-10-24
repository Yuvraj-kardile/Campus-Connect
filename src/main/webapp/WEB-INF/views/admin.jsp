<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="true" %>
<% if (session.getAttribute("adminEmail") == null) { response.sendRedirect(request.getContextPath() + "/login"); return; } %>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="csrf-token" content="<%= session.getAttribute("csrfToken") %>">
  <title>CampusConnect · Admin Panel</title>
  <link rel="stylesheet" href="<%= request.getContextPath() %>/assets/css/admin.css?v=6" />
  <style>.logout-form{display:inline-flex;align-items:center;margin-left:2px}.logout-form .btn{min-height:34px}</style>
  <script>window.APP_CONTEXT = '<%= request.getContextPath() %>'; window.CSRF_TOKEN = '<%= session.getAttribute("csrfToken") %>';</script>
</head>
<body>
<div class="app">
    <aside class="sidebar" id="sidebar">
      <div class="brand">
        <div class="brand-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-5 9 5-9 5-9-5Z" />
            <path d="M7 11v5c3 3 7 3 10 0v-5M21 9v6" />
          </svg></div>
        <div>
          <div class="brand-name">CampusConnect</div>
          <div class="brand-sub">Platform administration</div>
        </div>
      </div>
      <div class="nav-label">WORKSPACE</div>
      <nav class="nav" id="navigation">
        <button class="nav-btn active" data-section="dashboard"><span class="nav-icon"
            data-icon="grid"></span>Dashboard</button>
        <button class="nav-btn" data-section="institutes"><span class="nav-icon" data-icon="building"></span>Institute
          verification <span class="nav-count" id="pendingCount">—</span></button>
        <button class="nav-btn" data-section="users"><span class="nav-icon" data-icon="users"></span>User
          management</button>
        <button class="nav-btn" data-section="posts"><span class="nav-icon" data-icon="file"></span>Post
          management</button>
        <button class="nav-btn" data-section="moderation"><span class="nav-icon" data-icon="shield"></span>Content
          moderation <span class="nav-count" id="reportCount">—</span></button>
        <button class="nav-btn" data-section="analytics"><span class="nav-icon" data-icon="chart"></span>Reports &
          analytics</button>
      </nav>
      <div class="sidebar-bottom">
        <div class="nav-label">SYSTEM</div>
        <nav class="nav"><button class="nav-btn" data-section="audit"><span class="nav-icon"
              data-icon="history"></span>Audit log</button><button class="nav-btn" id="settingsButton"><span
              class="nav-icon" data-icon="settings"></span>Settings</button></nav>
        <div class="help-card">
          <div class="help-icon" data-icon="life"></div><strong>Need a hand?</strong>
          <p>Review the admin guide and moderation workflow.</p><button id="helpButton">Open admin guide ↗</button>
        </div>
        <div class="profile-mini">
          <div class="avatar">AU</div>
          <div><strong><%= session.getAttribute("adminName") %></strong><small>Platform Administrator</small></div><span
            style="margin-left:auto;color:#9aa5b8" data-icon="chevron"></span>
        </div>
      </div>
    </aside>
    <div class="mobile-overlay" id="mobileOverlay"></div>
    <main class="main">
      <header class="topbar"><button class="menu-toggle" id="menuToggle" aria-label="Open navigation"
          data-icon="menu"></button>
        <div class="search-wrap"><span data-icon="search"></span><input id="globalSearch" type="search"
            placeholder="Search users, institutes, posts..." aria-label="Search current section" /></div>
        <div class="top-actions"><button class="icon-btn help-top" id="topHelp" title="Help"
            data-icon="help"></button><button class="icon-btn" id="notificationButton" title="Notifications"><span
              data-icon="bell"></span><i class="notif-dot"></i></button>
          <div class="user-menu">
            <div class="avatar">A</div>
            <div><strong><%= session.getAttribute("adminName") %></strong><small>Platform Administrator</small></div><span style="color:#8b98af"
              data-icon="chevron"></span>
          </div>
          <form method="post" action="<%= request.getContextPath() %>/logout" class="logout-form">
            <input type="hidden" name="csrfToken" value="<%= session.getAttribute("csrfToken") %>">
            <button class="btn btn-sm" type="submit">Logout</button>
          </form>
        </div>
      </header>
      <div class="content">
        <div class="date-filter-bar" role="group" aria-label="Filter records by date">
          <div class="date-filter-copy"><strong>Date range</strong><span>Filter records across every section</span></div>
          <input id="dateFrom" type="date" hidden><input id="dateTo" type="date" hidden>
          <div class="date-picker">
            <button class="date-trigger" id="rangeButton" type="button" aria-expanded="false" aria-haspopup="dialog">
              <span id="rangeLabel">Last 15 days</span><span class="date-chevron" aria-hidden="true"></span>
            </button>
            <section class="date-popover" id="datePopover" role="dialog" aria-label="Choose date range">
              <div class="date-presets" id="datePresets">
                <button class="date-preset" type="button" data-preset="Today">Today</button>
                <button class="date-preset" type="button" data-preset="Yesterday">Yesterday</button>
                <button class="date-preset" type="button" data-preset="Last 3 days">Last 3 days</button>
                <button class="date-preset" type="button" data-preset="Last 7 days">Last 7 days</button>
                <button class="date-preset active" type="button" data-preset="Last 15 days">Last 15 days<span class="preset-check">✓</span></button>
                <button class="date-preset" type="button" data-preset="Last 30 days">Last 30 days</button>
                <button class="date-preset" type="button" data-preset="Last 90 days">Last 90 days</button>
                <button class="date-preset" type="button" data-preset="This month">This month</button>
                <button class="date-preset" type="button" data-preset="Last month">Last month</button>
                <button class="date-preset" type="button" data-preset="Custom range">Custom range</button>
              </div>
              <div class="date-calendar">
                <div class="calendar-head">
                  <button class="month-nav" id="prevMonth" type="button" aria-label="Previous month">‹</button>
                  <strong id="monthLabel"></strong>
                  <button class="month-nav" id="nextMonth" type="button" aria-label="Next month">›</button>
                </div>
                <div class="calendar-weekdays" aria-hidden="true"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>
                <div class="calendar-days" id="daysGrid"></div>
                <div class="calendar-hint" id="calendarHint">Choose a start date, then an end date</div>
              </div>
            </section>
          </div>
        </div>
        <section class="section-page active" id="section-dashboard">
          <div class="page-head">
            <div>
              <div class="eyebrow">Platform overview</div>
              <h1>Dashboard</h1>
              <p>Monitor activity across your student and institute community.</p>
            </div>
            <div class="head-actions"><select class="field" id="dashboardPeriod" aria-label="Dashboard date range">
                <option value="30">Last 30 days</option>
                <option value="7">Last 7 days</option>
                <option value="90">Last 90 days</option>
              </select><button class="btn btn-primary" id="exportOverview" data-icon="download">Export report</button>
            </div>
          </div>
          <div class="grid stats-grid">
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-blue" data-icon="users"></div><span class="stat-change">Current</span>
              </div>
              <div class="stat-value" id="statStudents">—</div>
              <div class="stat-label">Registered students</div>
              <div class="stat-foot">Accounts in the database</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-purple" data-icon="building"></div><span class="stat-change">Current</span>
              </div>
              <div class="stat-value" id="statInstitutes">—</div>
              <div class="stat-label">Verified institutes</div>
              <div class="stat-foot">Approved institute records</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-green" data-icon="file"></div><span class="stat-change">Current</span>
              </div>
              <div class="stat-value" id="statPosts">—</div>
              <div class="stat-label">Published posts</div>
              <div class="stat-foot">Published post records</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-orange" data-icon="flag"></div><span class="pill amber" id="openReportsStat">—
                  open</span>
              </div>
              <div class="stat-value" id="statReports">—</div>
              <div class="stat-label">Reports received</div>
              <div class="stat-foot"><strong id="dashboardResolvedReports">— resolved</strong> in the selected period</div>
            </article>
          </div>
          <div class="grid overview-grid">
            <article class="panel">
              <div class="panel-head">
                <div>
                  <h2 class="panel-title">Community growth</h2>
                  <div class="panel-subtitle">Student and institute registrations</div>
                </div><span class="pill blue">Database records</span>
              </div>
              <div class="chart-area" id="growthChart"></div>
              <div class="legend chart-legend"><span><i style="background:#3278f6"></i>Students</span><span><i
                    style="background:#8c68ef"></i>Institutes</span></div>
            </article>
            <article class="panel">
              <div class="panel-head">
                <div>
                  <h2 class="panel-title">Post engagement</h2>
                  <div class="panel-subtitle">Activity over the selected date range</div>
                </div><select class="select-mini" id="engagementMetric">
                  <option value="all">All activity</option>
                  <option value="likes">Likes</option>
                  <option value="comments">Comments</option>
                </select>
              </div>
              <div class="chart-area" id="engagementChart"></div>
              <div class="legend chart-legend"><span><i style="background:#3278f6"></i>Posts</span><span><i
                    style="background:#16a879"></i>Likes</span><span><i style="background:#ffab36"></i>Comments</span>
              </div>
            </article>
            <article class="panel">
              <div class="panel-head">
                <div>
                  <h2 class="panel-title">Reports by status</h2>
                  <div class="panel-subtitle">Current database records</div>
                </div><button class="text-link" data-go="moderation">View queue</button>
              </div>
              <div class="chart-donut-wrap">
                <div class="donut">
                  <div class="donut-center"><strong id="donutTotal">—</strong><small>Total reports</small></div>
                </div>
                <div class="donut-legend">
                  <div><i style="background:#16a879"></i>Resolved <strong id="resolvedDonutLabel">—</strong></div>
                  <div><i style="background:#ffb13c"></i>Open or reviewing <strong id="outstandingDonutLabel">—</strong></div>
                  <div><i style="background:#9aa8bf"></i>Dismissed <strong id="dismissedDonutLabel">—</strong></div>
                </div>
              </div>
            </article>
          </div>
          <div class="grid bottom-grid">
            <article class="panel list-panel">
              <div class="panel-head">
                <div>
                  <h2 class="panel-title">Pending institute verification</h2>
                  <div class="panel-subtitle">Applications that need review</div>
                </div><button class="text-link" data-go="institutes">View all</button>
              </div>
              <div class="list-rows" id="pendingPreview"></div>
            </article>
            <article class="panel list-panel">
              <div class="panel-head">
                <div>
                  <h2 class="panel-title">Recent posts</h2>
                  <div class="panel-subtitle">Latest institute updates</div>
                </div><button class="text-link" data-go="posts">View all</button>
              </div>
              <div class="list-rows" id="recentPostsPreview"></div>
            </article>
            <article class="panel list-panel">
              <div class="panel-head">
                <div>
                  <h2 class="panel-title">Recent reports</h2>
                  <div class="panel-subtitle">Items requiring attention</div>
                </div><button class="text-link" data-go="moderation">View all</button>
              </div>
              <div class="list-rows" id="recentReportsPreview"></div>
            </article>
          </div>
        </section>

        <section class="section-page" id="section-institutes">
          <div class="page-head">
            <div>
              <div class="eyebrow">Trust & verification</div>
              <h1>Institute verification</h1>
              <p>Review applications and control which institutes can publish on the platform.</p>
            </div>
            <div class="head-actions"><button class="btn" id="exportInstitutes" data-icon="download">Export
                list</button></div>
          </div>
          <div class="grid stats-grid">
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-orange" data-icon="clock"></div><span class="pill amber">Action needed</span>
              </div>
              <div class="stat-value" id="pendingStat">—</div>
              <div class="stat-label">Pending applications</div>
              <div class="stat-foot">Awaiting admin review</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-green" data-icon="check"></div><span class="pill green">Verified</span>
              </div>
              <div class="stat-value" id="approvedInstituteStat">—</div>
              <div class="stat-label">Approved institutes</div>
              <div class="stat-foot">Active on the platform</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-red" data-icon="x"></div><span class="pill red">Rejected</span>
              </div>
              <div class="stat-value" id="rejectedStat">—</div>
              <div class="stat-label">Rejected applications</div>
              <div class="stat-foot">Historical total</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-blue" data-icon="building"></div><span class="pill blue">All applications</span>
              </div>
              <div class="stat-value" id="allInstituteStat">—</div>
              <div class="stat-label">Total applications</div>
              <div class="stat-foot">Across all statuses</div>
            </article>
          </div>
          <div class="section-toolbar"><input class="field search-field local-search" data-table="institutesTable"
              placeholder="Search institute name, city..." /><select class="field table-filter"
              data-table="institutesTable" data-col="4">
              <option value="">All statuses</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select><select class="field" id="instituteSort">
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="name">Name A-Z</option>
            </select></div>
          <div class="panel table-panel">
            <div class="table-wrap">
              <table id="institutesTable">
                <thead>
                  <tr>
                    <th>Institute</th>
                    <th>Location</th>
                    <th>Applied on</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="institutesBody"></tbody>
              </table>
            </div>
            <div class="empty-state" id="institutesEmpty"><strong>No institutes found</strong>Change the search or
              filter and try again.</div>
            <div class="pagination" data-table="institutesTable"><span id="institutesCount">Showing applications</span>
              <div class="page-buttons"><button class="active">1</button><button>2</button><button>›</button></div>
            </div>
          </div>
        </section>

        <section class="section-page" id="section-users">
          <div class="page-head">
            <div>
              <div class="eyebrow">Community accounts</div>
              <h1>User management</h1>
              <p>Search accounts, review account status, and take moderation actions.</p>
            </div>
            <div class="head-actions"><button class="btn" id="exportUsers" data-icon="download">Export
                users</button><button class="btn btn-primary" id="addUserButton" data-icon="plus">Add user</button>
            </div>
          </div>
          <div class="grid stats-grid">
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-blue" data-icon="users"></div><span class="stat-change">Current</span>
              </div>
              <div class="stat-value" id="totalStudentsUserStat">—</div>
              <div class="stat-label">Total students</div>
              <div class="stat-foot">Student accounts</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-purple" data-icon="building"></div>
              </div>
              <div class="stat-value" id="instituteStaffStat">—</div>
              <div class="stat-label">Institute staff</div>
              <div class="stat-foot">Across verified institutes</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-green" data-icon="user-check"></div>
              </div>
              <div class="stat-value" id="activeUsersStat">—</div>
              <div class="stat-label">Active accounts</div>
              <div class="stat-foot">Currently enabled</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-red" data-icon="user-x"></div>
              </div>
              <div class="stat-value" id="suspendedUsersStat">—</div>
              <div class="stat-label">Suspended accounts</div>
              <div class="stat-foot">Access restricted</div>
            </article>
          </div>
          <div class="section-toolbar"><input class="field search-field local-search" data-table="usersTable"
              placeholder="Search name or email..." /><select class="field table-filter" data-table="usersTable"
              data-col="2">
              <option value="">All roles</option>
              <option>Student</option>
              <option>Institute staff</option>
              <option>Platform admin</option>
            </select><select class="field table-filter" data-table="usersTable" data-col="3">
              <option value="">All statuses</option>
              <option>Active</option>
              <option>Suspended</option>
            </select></div>
          <div class="panel table-panel">
            <div class="table-wrap">
              <table id="usersTable">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Joined</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Last active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="usersBody"></tbody>
              </table>
            </div>
            <div class="empty-state" id="usersEmpty"><strong>No users found</strong>Try another search or filter.</div>
            <div class="pagination" data-table="usersTable"><span id="usersCount">Showing users</span>
              <div class="page-buttons"><button
                  class="active">1</button><button>2</button><button>3</button><button>›</button></div>
            </div>
          </div>
        </section>

        <section class="section-page" id="section-posts">
          <div class="page-head">
            <div>
              <div class="eyebrow">Published content</div>
              <h1>Post management</h1>
              <p>Review institute updates and manage content visibility across the platform.</p>
            </div>
            <div class="head-actions"><button class="btn" id="exportPosts" data-icon="download">Export posts</button>
            </div>
          </div>
          <div class="grid stats-grid">
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-blue" data-icon="file"></div>
              </div>
              <div class="stat-value" id="totalPostsStat">—</div>
              <div class="stat-label">Total posts</div>
              <div class="stat-foot">All time</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-green" data-icon="check"></div>
              </div>
              <div class="stat-value" id="publishedPostsStat">—</div>
              <div class="stat-label">Published</div>
              <div class="stat-foot">Visible to students</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-orange" data-icon="eye-off"></div>
              </div>
              <div class="stat-value" id="hiddenPostsStat">—</div>
              <div class="stat-label">Hidden or archived</div>
              <div class="stat-foot">Not on the public feed</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-purple" data-icon="message"></div>
              </div>
              <div class="stat-value" id="totalCommentsStat">—</div>
              <div class="stat-label">Total comments</div>
              <div class="stat-foot">Across published posts</div>
            </article>
          </div>
          <div class="section-toolbar"><input class="field search-field local-search" data-table="postsTable"
              placeholder="Search post or institute..." /><select class="field table-filter" data-table="postsTable"
              data-col="3">
              <option value="">All statuses</option>
              <option>Published</option>
              <option>Hidden</option>
              <option>Archived</option>
            </select><select class="field table-filter" data-table="postsTable" data-col="2">
              <option value="">All types</option>
              <option>Announcement</option>
              <option>Event</option>
              <option>Placement</option>
              <option>News</option>
            </select></div>
          <div class="panel table-panel">
            <div class="table-wrap">
              <table id="postsTable">
                <thead>
                  <tr>
                    <th>Post</th>
                    <th>Institute</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Published</th>
                    <th>Engagement</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="postsBody"></tbody>
              </table>
            </div>
            <div class="empty-state" id="postsEmpty"><strong>No posts found</strong>Change your search or filters.</div>
            <div class="pagination" data-table="postsTable"><span id="postsCount">Showing posts</span>
              <div class="page-buttons"><button
                  class="active">1</button><button>2</button><button>3</button><button>›</button></div>
            </div>
          </div>
        </section>

        <section class="section-page" id="section-moderation">
          <div class="page-head">
            <div>
              <div class="eyebrow">Safety center</div>
              <h1>Content moderation</h1>
              <p>Investigate reports and remove content that breaks community rules.</p>
            </div>
            <div class="head-actions"><button class="btn" id="exportReports" data-icon="download">Export
                reports</button></div>
          </div>
          <div class="grid stats-grid">
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-red" data-icon="flag"></div><span class="pill red">Needs attention</span>
              </div>
              <div class="stat-value" id="openReportsCard">—</div>
              <div class="stat-label">Open reports</div>
              <div class="stat-foot">Awaiting review</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-orange" data-icon="clock"></div>
              </div>
              <div class="stat-value" id="reviewingReportsCard">—</div>
              <div class="stat-label">Under review</div>
              <div class="stat-foot">Already assigned</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-green" data-icon="check"></div>
              </div>
              <div class="stat-value" id="resolvedReportsCard">—</div>
              <div class="stat-label">Resolved reports</div>
              <div class="stat-foot">In the selected period</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-purple" data-icon="shield"></div>
              </div>
              <div class="stat-value">—</div>
              <div class="stat-label">Average review time</div>
              <div class="stat-foot">Review timestamps are not stored</div>
            </article>
          </div>
          <div class="section-toolbar"><input class="field search-field local-search" data-table="reportsTable"
              placeholder="Search report, reason, or content..." /><select class="field table-filter"
              data-table="reportsTable" data-col="3">
              <option value="">All statuses</option>
              <option>Open</option>
              <option>Reviewing</option>
              <option>Resolved</option>
              <option>Dismissed</option>
            </select><select class="field table-filter" data-table="reportsTable" data-col="2">
              <option value="">All content types</option>
              <option>Post</option>
              <option>Comment</option>
              <option>User</option>
              <option>Institute</option>
            </select></div>
          <div class="panel table-panel">
            <div class="table-wrap">
              <table id="reportsTable">
                <thead>
                  <tr>
                    <th>Reported content</th>
                    <th>Reported by</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Reported on</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="reportsBody"></tbody>
              </table>
            </div>
            <div class="empty-state" id="reportsEmpty"><strong>No reports found</strong>There are no items matching
              these filters.</div>
            <div class="pagination" data-table="reportsTable"><span id="reportsCount">Showing reports</span>
              <div class="page-buttons"><button class="active">1</button><button>2</button><button>›</button></div>
            </div>
          </div>
        </section>

        <section class="section-page" id="section-analytics">
          <div class="page-head">
            <div>
              <div class="eyebrow">Platform insights</div>
              <h1>Reports & analytics</h1>
              <p>Understand registrations, publishing activity, and community engagement.</p>
            </div>
            <div class="head-actions"><select class="field" id="analyticsPeriod">
                <option value="30">Last 30 days</option>
                <option value="7">Last 7 days</option>
                <option value="90">Last 90 days</option>
              </select><button class="btn btn-primary" id="exportAnalytics" data-icon="download">Export
                analytics</button></div>
          </div>
          <div class="grid stats-grid">
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-blue" data-icon="users"></div><span class="stat-change">Current</span>
              </div>
              <div class="stat-value" id="analyticsStudentStat">—</div>
              <div class="stat-label">Student accounts</div>
              <div class="stat-foot">Registration trend</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-green" data-icon="heart"></div><span class="stat-change">Current</span>
              </div>
              <div class="stat-value" id="postLikesStat">—</div>
              <div class="stat-label">Post likes</div>
              <div class="stat-foot">Engagement total</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-purple" data-icon="message"></div><span class="stat-change">Current</span>
              </div>
              <div class="stat-value" id="analyticsCommentsStat">—</div>
              <div class="stat-label">Comments</div>
              <div class="stat-foot">Community interactions</div>
            </article>
            <article class="stat-card">
              <div class="stat-top">
                <div class="stat-icon c-orange" data-icon="eye"></div>
              </div>
              <div class="stat-value" id="reportResolutionStat">—</div>
              <div class="stat-label">Report resolution rate</div>
              <div class="stat-foot" id="reportResolutionFoot">— of — reports resolved</div>
            </article>
          </div>
          <div class="grid analytics-grid">
            <article class="panel analytics-card">
              <div class="panel-head">
                <div>
                  <h2 class="panel-title">Registration trend</h2>
                  <div class="panel-subtitle">New student and institute registrations by month</div>
                </div>
                <div class="legend"><span><i style="background:#3278f6"></i>Students</span><span><i
                      style="background:#8c68ef"></i>Institutes</span></div>
              </div>
              <div class="bar-chart" id="analyticsGrowthChart"></div>
              <div class="metric-row">
                <div class="metric-mini"><small>Top post type</small><strong id="topPostTypeLabel">—</strong><em>By current record count</em></div>
                <div class="metric-mini"><small>Engagement</small><strong id="engagementRateLabel">—</strong><em>Average per post</em>
                </div>
                <div class="metric-mini"><small>Most active period</small><strong>Selected range</strong><em>Based on available dates</em></div>
              </div>
            </article>
            <article class="panel analytics-card">
              <div class="panel-head">
                <div>
                  <h2 class="panel-title">Moderation outcomes</h2>
                  <div class="panel-subtitle">Disposition of reported items</div>
                </div><span class="pill blue" id="reportTotalLabel">— reports</span>
              </div>
              <div class="chart-donut-wrap">
                <div class="donut" id="moderationDonut">
                  <div class="donut-center"><strong id="analyticsResolvedPct">—</strong><small>Resolved</small></div>
                </div>
                <div class="donut-legend">
                  <div><i style="background:#16a879"></i>Resolved <strong id="analyticsResolvedCount">—</strong></div>
                  <div><i style="background:#ffb13c"></i>Open / review <strong id="analyticsOutstandingCount">—</strong></div>
                  <div><i style="background:#9aa8bf"></i>Dismissed <strong id="analyticsDismissedCount">—</strong></div>
                </div>
              </div>
              <div class="settings-note">Outcomes reflect the current report records.</div>
            </article>
          </div>
          <article class="panel list-panel">
            <div class="panel-head">
              <div>
                <h2 class="panel-title">Institute activity snapshot</h2>
                <div class="panel-subtitle">Recent institute posts from the database</div>
              </div><button class="text-link" data-go="posts">Manage posts</button>
            </div>
            <div class="list-rows" id="analyticsPostsPreview"></div>
          </article>
        </section>

        <section class="section-page" id="section-audit">
          <div class="page-head">
            <div>
              <div class="eyebrow">Accountability</div>
              <h1>Audit log</h1>
              <p>Review administrative actions recorded in the database.</p>
            </div>
            <div class="head-actions"><button class="btn" id="exportAudit" data-icon="download">Export log</button>
            </div>
          </div>
          <div class="panel table-panel">
            <div class="table-wrap">
              <table id="auditTable">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Target</th>
                    <th>Performed by</th>
                    <th>Timestamp</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody id="auditBody"></tbody>
              </table>
            </div>
            <div class="empty-state" id="auditEmpty"><strong>No actions recorded yet</strong>Database audit entries will appear here.</div>
          </div>
        </section>
      </div>
    </main>
    <div class="toast-zone" id="toastZone" aria-live="polite"></div>
    <div class="modal-backdrop" id="modalBackdrop" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal">
        <div class="modal-head">
          <h3 id="modalTitle">Confirm action</h3><button class="close-modal" id="closeModal"
            aria-label="Close">×</button>
        </div>
        <div class="modal-body" id="modalBody"></div>
        <div class="modal-foot"><button class="btn" id="cancelModal">Cancel</button><button class="btn btn-primary"
            id="confirmModal">Confirm</button></div>
      </div>
    </div>
<script src="<%= request.getContextPath() %>/assets/js/admin.js?v=4"></script>
</body>
</html>
