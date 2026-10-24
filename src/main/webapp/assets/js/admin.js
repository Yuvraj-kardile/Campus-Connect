const icons = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  building:
    '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M8 9h1m6 0h1M8 12h1m6 0h1"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  shield:
    '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  chart: '<path d="M3 3v18h18M8 16V9m5 7V5m5 11v-4"/>',
  history:
    '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.9l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.8Z"/>',
  life: '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3m.1 4h.01"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3m.1 4h.01"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  download:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  flag: '<path d="M4 22V4m0 1c5-4 10 4 16 0v11c-6 4-11-4-16 0"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  x: '<path d="m18 6-12 12M6 6l12 12"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  "eye-off":
    '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a14 14 0 0 1-3.1 3.8M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7a10 10 0 0 0 3-.4"/>',
  message:
    '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
  heart:
    '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  "user-check":
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 2 2 2 4-4"/>',
  "user-x":
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-1 5 5m0-5-5 5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
};
function icon(name, size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.file}</svg>`;
}
document.querySelectorAll("[data-icon]").forEach((el) => {
  const n = el.dataset.icon;
  el.innerHTML = icon(n, el.classList.contains("nav-icon") ? 19 : 18);
});
let institutes = [];
let users = [];
let posts = [];
let reports = [];
let audit = [];
let analytics = {};
const pageSize = 10;
const tablePages = Object.create(null);
let modalResolve = null;
const sections = {
  dashboard: "Dashboard",
  institutes: "Institute verification",
  users: "User management",
  posts: "Post management",
  moderation: "Content moderation",
  analytics: "Reports & analytics",
  audit: "Audit log",
};
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function initials(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
function dateText(s) {
  if (!s) return "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  return new Date(s + "T12:00:00").toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
function dateValue(value) {
  if (!value) return "";
  const text = String(value).trim();
  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const months = { jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06", jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12" };
  const pretty = text.match(/^(?:(\w{3})\s+(\d{1,2}),?\s+(\d{4})|(\d{1,2})\s+(\w{3})\s+(\d{4}))/i);
  if (pretty) {
    const month = months[(pretty[1] || pretty[5]).toLowerCase()];
    const day = String(pretty[2] || pretty[4]).padStart(2, "0");
    const year = pretty[3] || pretty[6];
    if (month) return `${year}-${month}-${day}`;
  }
  const parsed = new Date(text);
  if (Number.isNaN(parsed.getTime())) return "";
  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}-${String(parsed.getDate()).padStart(2, "0")}`;
}
function dateObject(value) {
  const normalized = dateValue(value);
  if (!normalized) return null;
  const [year, month, day] = normalized.split("-").map(Number);
  return new Date(year, month - 1, day, 12);
}
function isInDateRange(value) {
  const date = dateValue(value);
  return Boolean(date && (!$("#dateFrom").value || date >= $("#dateFrom").value) && (!$("#dateTo").value || date <= $("#dateTo").value));
}
function statusPill(status) {
  const map = {
    Active: "green",
    Approved: "green",
    Published: "green",
    Resolved: "green",
    Pending: "amber",
    Reviewing: "amber",
    Hidden: "red",
    Suspended: "red",
    Rejected: "red",
    Open: "red",
    Archived: "gray",
    Dismissed: "gray",
  };
  return `<span class="pill ${map[status] || "gray"}">${esc(status)}</span>`;
}
function avatarHtml(name, initial, color, ink) {
  return `<div class="avatar" style="background:${color || "#e7efff"};color:${ink || "#2768e8"}">${esc(initial || initials(name))}</div>`;
}
function showToast(msg) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  $("#toastZone").appendChild(el);
  setTimeout(() => el.remove(), 3100);
}
function showModal(title, body, confirmText = "Confirm", danger = false) {
  $("#modalTitle").textContent = title;
  $("#modalBody").textContent = body;
  $("#confirmModal").textContent = confirmText;
  $("#confirmModal").className =
    "btn " + (danger ? "btn-danger" : "btn-primary");
  $("#modalBackdrop").classList.add("show");
  return new Promise((resolve) => {
    modalResolve = resolve;
  });
}
function closeModal(result) {
  $("#modalBackdrop").classList.remove("show");
  if (modalResolve) {
    modalResolve(result);
    modalResolve = null;
  }
}
$("#closeModal").onclick = () => closeModal(false);
$("#cancelModal").onclick = () => closeModal(false);
$("#confirmModal").onclick = () => {
  const form = $("#addUserForm");
  if (!form) return closeModal(true);
  if (!form.reportValidity()) return;
  closeModal({
    name: $("#newUserName").value.trim(),
    email: $("#newUserEmail").value.trim(),
    role: $("#newUserRole").value,
  });
};
$("#modalBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "modalBackdrop") closeModal(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal(false);
});
function showAddUserModal() {
  $("#modalTitle").textContent = "Add user";
  $("#modalBody").innerHTML =
    '<form id="addUserForm" class="modal-form"><label for="newUserName">Full name</label><input class="field" id="newUserName" name="name" maxlength="160" required><label for="newUserEmail">Email address</label><input class="field" id="newUserEmail" name="email" type="email" maxlength="190" required><label for="newUserRole">Role</label><select class="field" id="newUserRole" name="role"><option>Student</option><option>Institute staff</option><option>Platform admin</option></select></form>';
  $("#confirmModal").textContent = "Create user";
  $("#confirmModal").className = "btn btn-primary";
  $("#modalBackdrop").classList.add("show");
  return new Promise((resolve) => {
    modalResolve = resolve;
  });
}
async function refreshAudit() {
  const response = await fetch(window.APP_CONTEXT + "/api/admin/audit", {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error("Audit history request failed");
  audit = await response.json();
  renderAudit();
}
async function logAction() {
  try {
    await refreshAudit();
  } catch (error) {
    showToast("Action saved, but audit history could not be refreshed.");
  }
}
async function saveAction(entity, id, action, details) {
  try {
    const response = await fetch(window.APP_CONTEXT + "/api/admin/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": window.CSRF_TOKEN || "",
      },
      body: JSON.stringify({ entity, id, action, details }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      showToast(payload.error || "The server could not save this action.");
      return false;
    }
    return true;
  } catch (error) {
    showToast("Backend unavailable. No database change was saved.");
    return false;
  }
}
function navigate(section) {
  if (!sections[section]) return;
  $$(".section-page").forEach((s) =>
    s.classList.toggle("active", s.id === "section-" + section),
  );
  $$(".nav-btn[data-section]").forEach((b) =>
    b.classList.toggle("active", b.dataset.section === section),
  );
  const title = sections[section];
  document.title = title + " · CampusConnect Admin";
  $("#globalSearch").value = "";
  $$(".local-search").forEach((x) => (x.value = ""));
  filterAllTables();
  $("#sidebar").classList.remove("open");
  $("#mobileOverlay").classList.remove("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.addEventListener("click", (e) => {
  const sectionButton = e.target.closest(".nav-btn[data-section]");
  const goButton = e.target.closest("[data-go]");
  if (sectionButton) navigate(sectionButton.dataset.section);
  else if (goButton) navigate(goButton.dataset.go);
});
$("#settingsButton").onclick = () =>
  showToast("No settings are configured for this application.");
$("#helpButton").onclick = $("#topHelp").onclick = () =>
  showModal(
    "Admin guide",
    "Use institute verification, user management, post management, and content moderation to update records in the database.",
    "Close",
  );
$("#notificationButton").onclick = () =>
  showModal(
    "Current queue",
    `${institutes.filter((i) => i.status === "Pending").length} institute applications pending and ${reports.filter((r) => r.status === "Open").length} open reports.`,
    "Close",
  );
$("#menuToggle").onclick = () => {
  $("#sidebar").classList.toggle("open");
  $("#mobileOverlay").classList.toggle("show");
};
$("#mobileOverlay").onclick = () => {
  $("#sidebar").classList.remove("open");
  $("#mobileOverlay").classList.remove("show");
};
function renderPendingPreview() {
  const arr = institutes.filter((i) => i.status === "Pending" && isInDateRange(i.date)).slice(0, 4);
  $("#pendingPreview").innerHTML = arr.length
    ? arr
        .map(
          (i) =>
            `<div class="list-row"><div class="org-mark" style="background:${i.color};color:${i.ink}">${esc(i.initial)}</div><div class="row-main"><strong>${esc(i.name)}</strong><small>${esc(i.city)} · ${dateText(i.date)}</small></div><div class="row-actions"><button class="mini-action" data-inst-view="${i.id}">Review</button></div></div>`,
        )
        .join("")
    : `<div class="settings-note">${$("#dateFrom").value || $("#dateTo").value ? "No pending applications in this date range." : "All institute applications have been reviewed."}</div>`;
}
function renderPostsPreview() {
  const arr = posts.filter((p) => isInDateRange(p.date)).slice(0, 4);
  const html = arr
    .map(
      (p) =>
        `<div class="list-row"><div class="org-mark" style="background:${p.color};color:${p.ink}">${esc(p.initial)}</div><div class="row-main"><strong>${esc(p.title)}</strong><small>${esc(p.institute)} · ${dateText(p.date)}</small></div>${statusPill(p.status)}</div>`,
    )
    .join("");
  $("#recentPostsPreview").innerHTML = html;
  $("#analyticsPostsPreview").innerHTML = html;
}
function renderReportsPreview() {
  const arr = reports
    .filter((r) => (r.status === "Open" || r.status === "Reviewing") && isInDateRange(r.date))
    .slice(0, 4);
  $("#recentReportsPreview").innerHTML =
    arr
      .map(
        (r) =>
          `<div class="list-row"><div class="org-mark" style="background:${r.type === "Comment" ? "#fff1dc" : "#ffeaed"};color:${r.type === "Comment" ? "#ce830d" : "#df4d5a"}">${icon(r.type === "Comment" ? "message" : "flag", 17)}</div><div class="row-main"><strong>${esc(r.title)}</strong><small>${esc(r.reporter)} · ${esc(r.date)}</small></div>${statusPill(r.status)}</div>`,
      )
      .join("") ||
    `<div class="settings-note">${$("#dateFrom").value || $("#dateTo").value ? "No open reports in this date range." : "No open reports. Queue is clear."}</div>`;
}
function renderInstituteTable() {
  const tbody = $("#institutesBody");
  tbody.innerHTML = institutes
    .map(
      (i) =>
        `<tr data-search="${esc((i.name + " " + i.city + " " + i.email).toLowerCase())}"><td><div class="table-person">${avatarHtml(i.name, i.initial, i.color, i.ink)}<div><strong>${esc(i.name)}</strong><small>ID: INST-${String(i.id).padStart(4, "0")}</small></div></div></td><td>${esc(i.city)}</td><td>${dateText(i.date)}</td><td>${esc(i.email)}</td><td>${statusPill(i.status)}</td><td><div class="table-actions"><button class="mini-action" data-inst-view="${i.id}">View</button>${i.status === "Pending" ? `<button class="mini-action primary" data-inst-approve="${i.id}">Approve</button><button class="mini-action" data-inst-reject="${i.id}">Reject</button>` : ""}</div></td></tr>`,
    )
    .join("");
  filterAllTables();
  updateCounts();
}
function renderUsersTable() {
  const tbody = $("#usersBody");
  tbody.innerHTML = users
    .map(
      (u) =>
        `<tr data-search="${esc((u.name + " " + u.email).toLowerCase())}"><td><div class="table-person">${avatarHtml(u.name, u.initial, u.color, u.ink)}<div><strong>${esc(u.name)}</strong><small>${esc(u.email)}</small></div></div></td><td>${esc(u.joined)}</td><td>${esc(u.role)}</td><td>${statusPill(u.status)}</td><td>${esc(u.last)}</td><td><div class="table-actions"><button class="mini-action" data-user-view="${u.id}">View</button>${u.role !== "Platform admin" ? `<button class="mini-action ${u.status === "Active" ? "" : "primary"}" data-user-toggle="${u.id}">${u.status === "Active" ? "Suspend" : "Reactivate"}</button>` : ""}</div></td></tr>`,
    )
    .join("");
  filterAllTables();
  updateCounts();
}
function renderPostsTable() {
  const tbody = $("#postsBody");
  tbody.innerHTML = posts
    .map(
      (p) =>
        `<tr data-search="${esc((p.title + " " + p.institute).toLowerCase())}"><td><div class="table-person">${avatarHtml(p.institute, p.initial, p.color, p.ink)}<div><strong>${esc(p.title)}</strong><small>POST-${String(p.id).padStart(4, "0")}</small></div></div></td><td>${esc(p.institute)}</td><td>${esc(p.type)}</td><td>${statusPill(p.status)}</td><td>${esc(p.date)}</td><td>${p.likes} likes · ${p.comments} comments</td><td><div class="table-actions"><button class="mini-action" data-post-view="${p.id}">View</button>${p.status === "Published" ? `<button class="mini-action" data-post-toggle="${p.id}">Hide</button>` : `<button class="mini-action primary" data-post-toggle="${p.id}">Restore</button>`}<button class="mini-action" data-post-archive="${p.id}">Archive</button></div></td></tr>`,
    )
    .join("");
  filterAllTables();
  updateCounts();
}
function renderReportsTable() {
  const tbody = $("#reportsBody");
  tbody.innerHTML = reports
    .map(
      (r) =>
        `<tr data-search="${esc((r.title + " " + r.snippet + " " + r.reason + " " + r.reporter).toLowerCase())}"><td><div class="row-main"><strong>${esc(r.title)}</strong><small>${esc(r.snippet)}</small></div></td><td>${esc(r.reporter)}</td><td>${esc(r.type)}</td><td>${statusPill(r.status)}</td><td>${esc(r.date)}</td><td><div class="table-actions"><button class="mini-action" data-report-view="${r.id}">Investigate</button>${r.status !== "Resolved" && r.status !== "Dismissed" ? `<button class="mini-action primary" data-report-resolve="${r.id}">Resolve</button><button class="mini-action" data-report-dismiss="${r.id}">Dismiss</button>` : ""}</div></td></tr>`,
    )
    .join("");
  filterAllTables();
  updateCounts();
}
function renderAudit() {
  const tbody = $("#auditBody");
  if (!tbody) return;
  tbody.innerHTML = audit
    .map(
      (a) =>
        `<tr><td><strong>${esc(a.action)}</strong></td><td>${esc(a.target)}</td><td>${esc(a.by)}</td><td>${esc(a.time)}</td><td>${esc(a.details)}</td></tr>`,
    )
    .join("");
  $("#auditEmpty").style.display = audit.length ? "none" : "block";
  filterTable("auditTable");
}
function filterTable(tableId) {
  const table = $("#" + tableId);
  if (!table) return;
  const body = table.querySelector("tbody");
  if (!body) return;
  const localSearch =
    $$(".local-search").find((x) => x.dataset.table === tableId)?.value || "";
  const globalSearch =
    $("#globalSearch").value && $(".section-page.active table#" + tableId)
      ? $("#globalSearch").value
      : "";
  const search = (localSearch || globalSearch).toLowerCase().trim();
  const filters = $$(".table-filter").filter(
    (x) => x.dataset.table === tableId,
  );
  const dateColumns = { institutesTable: 2, usersTable: 1, postsTable: 4, reportsTable: 4, auditTable: 3 };
  const from = $("#dateFrom").value;
  const to = $("#dateTo").value;
  const signature = JSON.stringify([search, filters.map((f) => f.value), from, to]);
  const state =
    tablePages[tableId] || (tablePages[tableId] = { page: 1, signature: "" });
  if (state.signature !== signature) {
    state.page = 1;
    state.signature = signature;
  }
  const matches = Array.from(body.rows).filter((row) => {
    const rowSearch = (row.dataset.search || row.innerText).toLowerCase();
    if (search && !rowSearch.includes(search)) return false;
    if (from || to) {
      const dateTextValue = row.dataset.date || row.cells[dateColumns[tableId]]?.innerText || "";
      const rowDate = dateValue(dateTextValue);
      if (!rowDate || (from && rowDate < from) || (to && rowDate > to)) return false;
    }
    return filters.every((f) => {
      if (!f.value) return true;
      const cell = row.cells[Number(f.dataset.col)];
      return Boolean(
        cell && cell.innerText.toLowerCase().includes(f.value.toLowerCase()),
      );
    });
  });
  const pageCount = Math.max(1, Math.ceil(matches.length / pageSize));
  state.page = Math.min(state.page, pageCount);
  const first = (state.page - 1) * pageSize,
    last = first + pageSize;
  Array.from(body.rows).forEach((row) => {
    row.style.display = matches.slice(first, last).includes(row) ? "" : "none";
  });
  const empty = $("#" + tableId.replace("Table", "Empty"));
  if (empty) empty.style.display = matches.length ? "none" : "block";
  const count = $("#" + tableId.replace("Table", "Count"));
  if (count)
    count.textContent = matches.length
      ? `Showing ${first + 1}–${Math.min(last, matches.length)} of ${matches.length} records`
      : "Showing 0 of 0 records";
  const pagination = $$(".pagination").find(
    (el) => el.dataset.table === tableId,
  );
  const buttons = pagination?.querySelector(".page-buttons");
  if (buttons) {
    buttons.hidden = pageCount <= 1;
    const start = Math.max(1, Math.min(state.page - 2, pageCount - 4));
    const end = Math.min(pageCount, start + 4);
    let html = `<button type="button" data-page="${state.page - 1}" aria-label="Previous page" ${state.page === 1 ? "disabled" : ""}>‹</button>`;
    for (let page = start; page <= end; page++)
      html += `<button type="button" data-page="${page}" class="${page === state.page ? "active" : ""}" aria-current="${page === state.page ? "page" : "false"}">${page}</button>`;
    html += `<button type="button" data-page="${state.page + 1}" aria-label="Next page" ${state.page === pageCount ? "disabled" : ""}>›</button>`;
    buttons.innerHTML = html;
  }
}
document.addEventListener("click", (e) => {
  const button = e.target.closest(".page-buttons [data-page]");
  if (!button || button.disabled) return;
  const tableId = button.closest(".pagination")?.dataset.table;
  if (!tableId) return;
  tablePages[tableId].page = Number(button.dataset.page);
  filterTable(tableId);
});
function filterAllTables() {
  ["institutesTable", "usersTable", "postsTable", "reportsTable", "auditTable"].forEach(
    filterTable,
  );
}
function updateCounts() {
  const rangedInstitutes = institutes.filter((item) => isInDateRange(item.date));
  const rangedUsers = users.filter((item) => isInDateRange(item.joined));
  const rangedPosts = posts.filter((item) => isInDateRange(item.date));
  const rangedReports = reports.filter((item) => isInDateRange(item.date));
  const pending = rangedInstitutes.filter((i) => i.status === "Pending").length;
  const approved = rangedInstitutes.filter((i) => i.status === "Approved").length;
  const rejected = rangedInstitutes.filter((i) => i.status === "Rejected").length;
  const open = rangedReports.filter((r) => r.status === "Open").length;
  const review = rangedReports.filter((r) => r.status === "Reviewing").length;
  const resolved = rangedReports.filter((r) => r.status === "Resolved").length;
  const activeUsers = rangedUsers.filter((u) => u.status === "Active").length;
  const suspendedUsers = rangedUsers.filter((u) => u.status === "Suspended").length;
  const publishedPosts = rangedPosts.filter((p) => p.status === "Published").length;
  const hiddenPosts = rangedPosts.filter(
    (p) => p.status === "Hidden" || p.status === "Archived",
  ).length;
  $("#pendingCount").textContent = institutes.filter((i) => i.status === "Pending").length;
  $("#pendingStat").textContent = pending;
  $("#allInstituteStat").textContent = rangedInstitutes.length;
  $("#rejectedStat").textContent = rejected;
  $("#reportCount").textContent = reports.filter((r) => r.status === "Open" || r.status === "Reviewing").length;
  $("#openReportsStat").textContent = open + " open";
  $("#openReportsCard").textContent = open;
  $("#reviewingReportsCard").textContent = review;
  $("#resolvedReportsCard").textContent = resolved;
  $("#suspendedUsersStat").textContent = suspendedUsers;
  $("#activeUsersStat").textContent = activeUsers.toLocaleString("en-US");
  $("#totalPostsStat").textContent = rangedPosts.length.toLocaleString("en-US");
  $("#publishedPostsStat").textContent = publishedPosts.toLocaleString("en-US");
  $("#hiddenPostsStat").textContent = hiddenPosts;
  const students = rangedUsers.filter((u) => u.role === "Student").length;
  const instituteStaff = rangedUsers.filter(
    (u) => u.role === "Institute staff",
  ).length;
  const commentsTotal = rangedPosts.reduce(
    (sum, p) => sum + Number(p.comments || 0),
    0,
  );
  const likesTotal = rangedPosts.reduce((sum, p) => sum + Number(p.likes || 0), 0);
  const resolutionRate = rangedReports.length
    ? Math.round((resolved / rangedReports.length) * 100)
    : 0;
  $("#statStudents").textContent = students.toLocaleString("en-US");
  $("#statInstitutes").textContent = approved.toLocaleString("en-US");
  $("#statPosts").textContent = publishedPosts.toLocaleString("en-US");
  $("#statReports").textContent = rangedReports.length.toLocaleString("en-US");
  $("#approvedInstituteStat").textContent = approved;
  $("#totalStudentsUserStat").textContent = students;
  $("#instituteStaffStat").textContent = instituteStaff;
  $("#analyticsStudentStat").textContent = students;
  $("#totalCommentsStat").textContent = commentsTotal.toLocaleString("en-US");
  $("#analyticsCommentsStat").textContent =
    commentsTotal.toLocaleString("en-US");
  $("#postLikesStat").textContent = likesTotal.toLocaleString("en-US");
  $("#reportResolutionStat").textContent = resolutionRate + "%";
  $("#reportResolutionFoot").textContent =
    resolved + " of " + rangedReports.length + " reports resolved";
  $("#dashboardResolvedReports").textContent = resolved + " resolved";
  $("#donutTotal").textContent = rangedReports.length;
  $("#reportTotalLabel").textContent = rangedReports.length + " reports";
  $("#resolvedDonutLabel").textContent = resolved;
  $("#outstandingDonutLabel").textContent = open + review;
  $("#dismissedDonutLabel").textContent = rangedReports.filter(
    (r) => r.status === "Dismissed",
  ).length;
  $("#analyticsResolvedCount").textContent = resolved;
  $("#analyticsOutstandingCount").textContent = open + review;
  $("#analyticsDismissedCount").textContent = rangedReports.filter(
    (r) => r.status === "Dismissed",
  ).length;
  $("#analyticsResolvedPct").textContent = resolutionRate + "%";
  const resolvedPct = rangedReports.length ? (resolved * 100) / rangedReports.length : 0;
  const outstandingPct = rangedReports.length
    ? ((open + review) * 100) / rangedReports.length
    : 0;
  $("#moderationDonut").style.background =
    `conic-gradient(#16a879 0 ${resolvedPct}%,#ffb13c ${resolvedPct}% ${resolvedPct + outstandingPct}%,#9aa8bf ${resolvedPct + outstandingPct}% 100%)`;
  const postTypes = rangedPosts.reduce((counts, post) => {
    counts[post.type] = (counts[post.type] || 0) + 1;
    return counts;
  }, {});
  const topType = Object.entries(postTypes).sort((a, b) => b[1] - a[1])[0];
  $("#topPostTypeLabel").textContent = topType ? topType[0] : "—";
  $("#engagementRateLabel").textContent =
    (rangedPosts.length ? (likesTotal / rangedPosts.length).toFixed(1) : "0") +
    " likes/post";
  renderPendingPreview();
  renderReportsPreview();
}
function svgLineChart(containerId, { labels, series, max }) {
  if (!series.some((line) => line.values.some((value) => value > 0))) {
    $(containerId).innerHTML =
      '<div class="settings-note">No records for the selected period.</div>';
    return;
  }
  const w = 500,
    h = 190,
    left = 38,
    right = 12,
    top = 12,
    bottom = 27,
    iw = w - left - right,
    ih = h - top - bottom;
  const y = (v) => top + ih - (v / max) * ih;
  const x = (i) => left + (labels.length === 1 ? iw / 2 : (i / (labels.length - 1)) * iw);
  let s = "";
  for (let n = 0; n <= 4; n++) {
    const val = (max * n) / 4,
      yy = y(val);
    s += `<line class="grid-line" x1="${left}" y1="${yy}" x2="${w - right}" y2="${yy}"/><text class="axis-label" x="${left - 8}" y="${yy + 3}" text-anchor="end">${val >= 1000 ? val / 1000 + "k" : Math.round(val)}</text>`;
  }
  labels.forEach(
    (l, i) =>
      (s += `<text class="axis-label" x="${x(i)}" y="${h - 7}" text-anchor="middle">${l}</text>`),
  );
  series.forEach((line, idx) => {
    const points = line.values.map((v, i) => `${x(i)},${y(v)}`).join(" ");
    if (idx === 0)
      s += `<polygon points="${x(0)},${y(0)} ${points} ${x(labels.length - 1)},${top + ih}" fill="${line.color}" opacity=".09"/>`;
    s += `<polyline points="${points}" fill="none" stroke="${line.color}" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>`;
    line.values.forEach(
      (v, i) =>
        (s += `<circle cx="${x(i)}" cy="${y(v)}" r="3.3" fill="${line.color}" stroke="#fff" stroke-width="1.3"/>`),
    );
  });
  $(containerId).innerHTML =
    `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Chart">${s}</svg>`;
}
function svgBarChart(containerId, labels, a, b) {
  if (![...a, ...b].some((value) => value > 0)) {
    $(containerId).innerHTML =
      '<div class="settings-note">No records for the selected period.</div>';
    return;
  }
  const w = 520,
    h = 225,
    left = 36,
    right = 10,
    top = 10,
    bottom = 27,
    ih = h - top - bottom,
    iw = w - left - right,
    max = Math.max(1, ...a, ...b) * 1.14;
  const y = (v) => top + ih - (v / max) * ih;
  let s = "";
  for (let n = 0; n <= 4; n++) {
    const yy = top + ih - (n * ih) / 4;
    s += `<line class="grid-line" x1="${left}" y1="${yy}" x2="${w - right}" y2="${yy}"/><text class="axis-label" x="${left - 7}" y="${yy + 3}" text-anchor="end">${Math.round((max * n) / 4)}</text>`;
  }
  const step = iw / labels.length,
    bw = Math.min(17, step * 0.28);
  labels.forEach((l, i) => {
    const xx = left + i * step + step * 0.19;
    s += `<rect x="${xx}" y="${y(a[i])}" width="${bw}" height="${top + ih - y(a[i])}" rx="3" fill="#3278f6"/><rect x="${xx + bw + 3}" y="${y(b[i])}" width="${bw}" height="${top + ih - y(b[i])}" rx="3" fill="#8c68ef"/><text class="axis-label" x="${left + i * step + step / 2}" y="${h - 7}" text-anchor="middle">${l}</text>`;
  });
  $(containerId).innerHTML =
    `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Bar chart">${s}</svg>`;
}
function renderCharts() {
  const today = $("#dateTo").value ? new Date($("#dateTo").value + "T12:00:00") : new Date();
  const rangeStart = $("#dateFrom").value
    ? new Date($("#dateFrom").value + "T12:00:00")
    : new Date(today.getTime() - (Number($("#dashboardPeriod").value || 30) - 1) * 86400000);
  const spanDays = Math.max(1, Math.round((today - rangeStart) / 86400000) + 1);
  const points = Math.min(7, spanDays);
  const buckets = Array.from({ length: points }, (_, i) => {
    const date = new Date(today);
    date.setDate(
      today.getDate() -
          Math.round(((points - 1 - i) * (spanDays - 1)) / (points - 1)),
    );
    return {
      date,
      label: date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
      }),
      users: 0,
      institutes: 0,
      likes: 0,
      comments: 0,
    };
  });
  const addCount = (rows, key, field) =>
    rows.forEach((row) => {
      const date = dateObject(row[key]);
      if (!date) return;
      const index = buckets.findIndex(
        (bucket, i) =>
          date >= bucket.date &&
          (i === buckets.length - 1 || date < buckets[i + 1].date),
      );
      if (index >= 0) buckets[index][field]++;
    });
  addCount(
    users.filter((user) => user.role === "Student"),
    "joined",
    "users",
  );
  addCount(institutes, "date", "institutes");
  posts.forEach((post) => {
    const date = dateObject(post.date);
    if (!date) return;
    const index = buckets.findIndex(
      (bucket, i) =>
        date >= bucket.date &&
        (i === buckets.length - 1 || date < buckets[i + 1].date),
    );
    if (index >= 0) {
      buckets[index].likes += Number(post.likes || 0);
      buckets[index].comments += Number(post.comments || 0);
    }
  });
  const labels = buckets.map((bucket) => bucket.label),
    maxGrowth = Math.max(
      1,
      ...buckets.flatMap((bucket) => [bucket.users, bucket.institutes]),
    );
  svgLineChart("#growthChart", {
    labels,
    series: [
      { color: "#3278f6", values: buckets.map((bucket) => bucket.users) },
      { color: "#8c68ef", values: buckets.map((bucket) => bucket.institutes) },
    ],
    max: maxGrowth * 1.15,
  });
  const metric = $("#engagementMetric").value,
    series =
      metric === "likes"
        ? [{ color: "#16a879", values: buckets.map((bucket) => bucket.likes) }]
        : metric === "comments"
          ? [
              {
                color: "#ffab36",
                values: buckets.map((bucket) => bucket.comments),
              },
            ]
          : [
              {
                color: "#3278f6",
                values: buckets.map((bucket) => bucket.likes + bucket.comments),
              },
              {
                color: "#16a879",
                values: buckets.map((bucket) => bucket.likes),
              },
              {
                color: "#ffab36",
                values: buckets.map((bucket) => bucket.comments),
              },
            ];
  svgLineChart("#engagementChart", {
    labels,
    series,
    max: Math.max(1, ...series.flatMap((line) => line.values)) * 1.15,
  });
  svgBarChart(
    "#analyticsGrowthChart",
    labels,
    buckets.map((bucket) => bucket.users),
    buckets.map((bucket) => bucket.institutes),
  );
}
$("#engagementMetric").addEventListener("change", renderCharts);
$("#dashboardPeriod").addEventListener("change", renderCharts);
function applyDateRange() {
  const from = $("#dateFrom").value;
  const to = $("#dateTo").value;
  $("#dateTo").min = from;
  $("#dateFrom").max = to;
  filterAllTables();
  renderCharts();
  updateCounts();
  renderPostsPreview();
}
const rangeButton = $("#rangeButton");
const datePopover = $("#datePopover");
const rangeLabel = $("#rangeLabel");
const monthLabel = $("#monthLabel");
const daysGrid = $("#daysGrid");
const datePresets = $$(".date-preset");
const today = new Date();
today.setHours(12, 0, 0, 0);
let calendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let rangeStart = new Date(today);
rangeStart.setDate(rangeStart.getDate() - 14);
let rangeEnd = new Date(today);
let selectedDatePreset = "Last 15 days";
let selectingRangeEnd = false;
const toDateInput = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const dateOnly = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
const sameDate = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const prettyDate = (date) => date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
function syncPresetState() {
  datePresets.forEach((preset) => {
    const active = preset.dataset.preset === selectedDatePreset;
    preset.classList.toggle("active", active);
    const oldCheck = preset.querySelector(".preset-check");
    if (oldCheck) oldCheck.remove();
    if (active) preset.insertAdjacentHTML("beforeend", '<span class="preset-check" aria-hidden="true">✓</span>');
  });
}
function updateRangeLabel() {
  rangeLabel.textContent = selectedDatePreset === "Custom range"
    ? `${prettyDate(rangeStart)} – ${prettyDate(rangeEnd)}`
    : selectedDatePreset;
}
function renderDateCalendar() {
  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();
  monthLabel.textContent = calendarMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  daysGrid.innerHTML = "";
  const offset = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  for (let index = 0; index < offset; index++) {
    const blank = document.createElement("span");
    blank.className = "calendar-day empty";
    daysGrid.appendChild(blank);
  }
  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day, 12);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.textContent = day;
    const isInRange = dateOnly(date) >= dateOnly(rangeStart) && dateOnly(date) <= dateOnly(rangeEnd);
    if (isInRange) button.classList.add("in-range");
    if (sameDate(date, rangeStart)) button.classList.add("start");
    if (sameDate(date, rangeEnd)) button.classList.add("end");
    if (sameDate(date, today)) button.classList.add("today");
    button.setAttribute("aria-label", date.toLocaleDateString("en-US", { dateStyle: "full" }));
    button.setAttribute("aria-pressed", String(isInRange));
    button.addEventListener("click", () => {
      if (!selectingRangeEnd) {
        rangeStart = dateOnly(date);
        rangeEnd = dateOnly(date);
        selectingRangeEnd = true;
        selectedDatePreset = "Custom range";
        updateRangeLabel();
        syncPresetState();
      } else {
        if (date < rangeStart) {
          rangeEnd = rangeStart;
          rangeStart = dateOnly(date);
        } else {
          rangeEnd = dateOnly(date);
        }
        selectingRangeEnd = false;
        $("#dateFrom").value = toDateInput(rangeStart);
        $("#dateTo").value = toDateInput(rangeEnd);
        updateRangeLabel();
        syncPresetState();
        applyDateRange();
      }
      $("#calendarHint").textContent = selectingRangeEnd ? "Choose an end date" : "Choose a start date, then an end date";
      renderDateCalendar();
    });
    daysGrid.appendChild(button);
  }
}
function chooseDatePreset(name) {
  const end = dateOnly(today);
  let start = new Date(end);
  if (name === "Yesterday") {
    start.setDate(start.getDate() - 1);
    rangeEnd = new Date(start);
  } else if (name === "This month") {
    start = new Date(end.getFullYear(), end.getMonth(), 1, 12);
    rangeEnd = end;
  } else if (name === "Last month") {
    start = new Date(end.getFullYear(), end.getMonth() - 1, 1, 12);
    rangeEnd = new Date(end.getFullYear(), end.getMonth(), 0, 12);
  } else if (name === "Custom range") {
    selectedDatePreset = name;
    selectingRangeEnd = false;
    $("#calendarHint").textContent = "Choose a start date, then an end date";
    syncPresetState();
    renderDateCalendar();
    return;
  } else if (name.startsWith("Last ")) {
    const days = Number(name.match(/\d+/)?.[0] || 15);
    start.setDate(start.getDate() - (days - 1));
    rangeEnd = end;
  } else {
    rangeEnd = end;
  }
  rangeStart = start;
  selectedDatePreset = name;
  selectingRangeEnd = false;
  calendarMonth = new Date(rangeEnd.getFullYear(), rangeEnd.getMonth(), 1);
  $("#dateFrom").value = toDateInput(rangeStart);
  $("#dateTo").value = toDateInput(rangeEnd);
  if (name.startsWith("Last ")) {
    const days = Number(name.match(/\d+/)?.[0]);
    if ([7, 30, 90].includes(days)) {
      $("#dashboardPeriod").value = String(days);
      $("#analyticsPeriod").value = $("#dashboardPeriod").value;
    }
  }
  $("#calendarHint").textContent = "Choose a start date, then an end date";
  updateRangeLabel();
  syncPresetState();
  renderDateCalendar();
  applyDateRange();
}
function setDatePopover(open) {
  datePopover.classList.toggle("open", open);
  rangeButton.setAttribute("aria-expanded", String(open));
}
rangeButton.addEventListener("click", () => setDatePopover(!datePopover.classList.contains("open")));
datePresets.forEach((preset) => preset.addEventListener("click", () => chooseDatePreset(preset.dataset.preset)));
$("#prevMonth").addEventListener("click", () => {
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1);
  renderDateCalendar();
});
$("#nextMonth").addEventListener("click", () => {
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1);
  renderDateCalendar();
});
document.addEventListener("click", (event) => {
  const clickedInsidePicker = event.composedPath().some(
    (element) => element instanceof Element && element.closest(".date-picker"),
  );
  if (!clickedInsidePicker) setDatePopover(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setDatePopover(false);
});
$("#dashboardPeriod").addEventListener("change", (event) => chooseDatePreset(`Last ${event.target.value} days`));
$("#analyticsPeriod").addEventListener("change", (event) => {
  $("#dashboardPeriod").value = event.target.value;
  chooseDatePreset(`Last ${event.target.value} days`);
});
$("#dateFrom").value = toDateInput(rangeStart);
$("#dateTo").value = toDateInput(rangeEnd);
renderDateCalendar();
// Table interactions and actions
$("#institutesBody").addEventListener("click", async (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const id = Number(
    b.dataset.instView || b.dataset.instApprove || b.dataset.instReject,
  );
  const item = institutes.find((i) => i.id === id);
  if (!item) return;
  if (b.dataset.instView) {
    showModal(
      item.name,
      `Location: ${item.city}\nContact: ${item.email}\nApplication date: ${dateText(item.date)}\nVerification status: ${item.status}`,
      "Close",
    );
    return;
  }
  if (b.dataset.instApprove) {
    const yes = await showModal(
      "Approve institute?",
      `Approve ${item.name}?`,
      "Approve institute",
    );
    if (!yes) return;
    if (
      !(await saveAction(
        "institute",
        id,
        "approve",
        "Verification status changed to Approved",
      ))
    )
      return;
    item.status = "Approved";
    logAction();
    renderInstituteTable();
    updateCounts();
    showToast(`${item.name} approved`);
  }
  if (b.dataset.instReject) {
    const yes = await showModal(
      "Reject institute?",
      `Reject ${item.name}?`,
      "Reject application",
      true,
    );
    if (!yes) return;
    if (
      !(await saveAction(
        "institute",
        id,
        "reject",
        "Verification status changed to Rejected",
      ))
    )
      return;
    item.status = "Rejected";
    logAction();
    renderInstituteTable();
    updateCounts();
    showToast(`${item.name} rejected`);
  }
  renderPendingPreview();
});
$("#usersBody").addEventListener("click", async (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const id = Number(b.dataset.userView || b.dataset.userToggle);
  const u = users.find((x) => x.id === id);
  if (!u) return;
  if (b.dataset.userView) {
    showModal(
      u.name,
      `Email: ${u.email}\nRole: ${u.role}\nAccount status: ${u.status}\nJoined: ${u.joined}\nLast active: ${u.last}`,
      "Close",
    );
    return;
  }
  const next = u.status === "Active" ? "Suspended" : "Active";
  const yes = await showModal(
    next === "Suspended" ? "Suspend user?" : "Reactivate user?",
    `${next === "Suspended" ? "Suspend" : "Reactivate"} ${u.name}? This updates the account status in the database and records the action.`,
    next === "Suspended" ? "Suspend account" : "Reactivate",
    next === "Suspended",
  );
  if (!yes) return;
  if (
    !(await saveAction(
      "user",
      id,
      next === "Suspended" ? "suspend" : "activate",
      `Account status changed to ${next}`,
    ))
  )
    return;
  u.status = next;
  logAction(
    next === "Suspended" ? "User suspended" : "User reactivated",
    u.name,
    `Account status changed to ${next}`,
  );
  renderUsersTable();
  updateCounts();
  showToast(`${u.name}: ${next}`);
});
$("#postsBody").addEventListener("click", async (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const id = Number(
    b.dataset.postView || b.dataset.postToggle || b.dataset.postArchive,
  );
  const p = posts.find((x) => x.id === id);
  if (!p) return;
  if (b.dataset.postView) {
    showModal(
      p.title,
      `Institute: ${p.institute}\nType: ${p.type}\nStatus: ${p.status}\nPublished: ${p.date}\nEngagement: ${p.likes} likes, ${p.comments} comments`,
      "Close",
    );
    return;
  }
  if (b.dataset.postToggle) {
    const next = p.status === "Published" ? "Hidden" : "Published";
    const yes = await showModal(
      next === "Hidden" ? "Hide post?" : "Restore post?",
      `${next === "Hidden" ? "Hide" : "Restore"} “${p.title}”? This updates the post status in the database and records the action.`,
      next === "Hidden" ? "Hide post" : "Restore post",
      next === "Hidden",
    );
    if (!yes) return;
    if (
      !(await saveAction(
        "post",
        id,
        next === "Hidden" ? "hide" : "restore",
        `Post status changed to ${next}`,
      ))
    )
      return;
    p.status = next;
    logAction(
      next === "Hidden" ? "Post hidden" : "Post restored",
      p.title,
      `Post status changed to ${next}`,
    );
    renderPostsTable();
    renderPostsPreview();
    updateCounts();
    showToast(`Post ${next.toLowerCase()}`);
  }
  if (b.dataset.postArchive) {
    const yes = await showModal(
      "Archive post?",
      `Archive “${p.title}”?`,
      "Archive post",
      true,
    );
    if (!yes) return;
    if (
      !(await saveAction(
        "post",
        id,
        "archive",
        "Post status changed to Archived",
      ))
    )
      return;
    p.status = "Archived";
    logAction("Post archived", p.title, "Post status changed to Archived");
    renderPostsTable();
    renderPostsPreview();
    updateCounts();
    showToast("Post archived");
  }
});
$("#reportsBody").addEventListener("click", async (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const id = Number(
    b.dataset.reportView || b.dataset.reportResolve || b.dataset.reportDismiss,
  );
  const r = reports.find((x) => x.id === id);
  if (!r) return;
  if (b.dataset.reportView) {
    const choice = await showModal(
      "Investigate report",
      `Reported content: ${r.title}\nDetails: ${r.snippet}\nReporter: ${r.reporter}\nReason: ${r.reason}\nStatus: ${r.status}\n\nMark as Reviewing to indicate an administrator has taken ownership.`,
      "Mark reviewing",
    );
    if (choice && r.status === "Open") {
      if (
        !(await saveAction(
          "report",
          id,
          "reviewing",
          "Status changed from Open to Reviewing",
        ))
      )
        return;
      r.status = "Reviewing";
      logAction(
        "Report moved to review",
        r.title,
        "Status changed from Open to Reviewing",
      );
      renderReportsTable();
      updateCounts();
      showToast("Report moved to review");
    }
    return;
  }
  if (b.dataset.reportResolve) {
    const yes = await showModal(
      "Resolve report?",
      `Mark “${r.title}” as resolved after reviewing the reported content.`,
      "Resolve report",
    );
    if (!yes) return;
    if (!(await saveAction("report", id, "resolve", `Reason: ${r.reason}`)))
      return;
    r.status = "Resolved";
    logAction("Report resolved", r.title, `Reason: ${r.reason}`);
    renderReportsTable();
    updateCounts();
    renderReportsPreview();
    showToast("Report resolved");
  }
  if (b.dataset.reportDismiss) {
    const yes = await showModal(
      "Dismiss report?",
      `Dismiss “${r.title}” because it does not require action?`,
      "Dismiss report",
      true,
    );
    if (!yes) return;
    if (
      !(await saveAction(
        "report",
        id,
        "dismiss",
        `Reason reviewed: ${r.reason}`,
      ))
    )
      return;
    r.status = "Dismissed";
    logAction("Report dismissed", r.title, `Reason reviewed: ${r.reason}`);
    renderReportsTable();
    updateCounts();
    renderReportsPreview();
    showToast("Report dismissed");
  }
});
$$(".local-search").forEach((inp) =>
  inp.addEventListener("input", () => filterTable(inp.dataset.table)),
);
$$(".table-filter").forEach((inp) =>
  inp.addEventListener("change", () => filterTable(inp.dataset.table)),
);
$("#globalSearch").addEventListener("input", () => {
  const active = $(".section-page.active");
  const table = active?.querySelector("table");
  if (table) filterTable(table.id);
  else if (active?.id === "section-dashboard") {
    const q = $("#globalSearch").value.toLowerCase();
    $$(
      "#pendingPreview .list-row, #recentPostsPreview .list-row, #recentReportsPreview .list-row",
    ).forEach(
      (row) =>
        (row.style.display = row.innerText.toLowerCase().includes(q)
          ? ""
          : "none"),
    );
  }
});
$("#instituteSort").addEventListener("change", (e) => {
  const mode = e.target.value;
  institutes.sort((a, b) =>
    mode === "name"
      ? a.name.localeCompare(b.name)
      : mode === "oldest"
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date),
  );
  renderInstituteTable();
});
function csvEscape(v) {
  return '"' + String(v ?? "").replace(/"/g, '""') + '"';
}
function downloadCSV(filename, rows) {
  const text = rows.map((row) => row.map(csvEscape).join(",")).join("\r\n");
  const blob = new Blob(["\ufeff" + text], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("CSV export downloaded");
}
function exportData(type) {
  if (type === "institutes")
    downloadCSV("campusconnect-institutes.csv", [
      ["ID", "Institute", "City", "Applied", "Email", "Status"],
      ...institutes.map((i) => [
        i.id,
        i.name,
        i.city,
        i.date,
        i.email,
        i.status,
      ]),
    ]);
  if (type === "users")
    downloadCSV("campusconnect-users.csv", [
      ["ID", "Name", "Email", "Joined", "Role", "Status", "Last active"],
      ...users.map((u) => [
        u.id,
        u.name,
        u.email,
        u.joined,
        u.role,
        u.status,
        u.last,
      ]),
    ]);
  if (type === "posts")
    downloadCSV("campusconnect-posts.csv", [
      [
        "ID",
        "Title",
        "Institute",
        "Type",
        "Status",
        "Published",
        "Likes",
        "Comments",
      ],
      ...posts.map((p) => [
        p.id,
        p.title,
        p.institute,
        p.type,
        p.status,
        p.date,
        p.likes,
        p.comments,
      ]),
    ]);
  if (type === "reports")
    downloadCSV("campusconnect-reports.csv", [
      [
        "ID",
        "Title",
        "Snippet",
        "Reporter",
        "Type",
        "Status",
        "Date",
        "Reason",
      ],
      ...reports.map((r) => [
        r.id,
        r.title,
        r.snippet,
        r.reporter,
        r.type,
        r.status,
        r.date,
        r.reason,
      ]),
    ]);
  if (type === "overview")
    downloadCSV("campusconnect-overview.csv", [
      ["Metric", "Value"],
      ["Registered students", $("#statStudents").textContent],
      ["Verified institutes", $("#statInstitutes").textContent],
      ["Published posts", $("#statPosts").textContent],
      ["Reports received", $("#statReports").textContent],
      ["Open reports", $("#openReportsCard").textContent],
      ["Pending institutes", $("#pendingStat").textContent],
    ]);
  if (type === "analytics")
    downloadCSV("campusconnect-analytics.csv", [
      ["Metric", "Value"],
      ["Students", users.filter((u) => u.role === "Student").length],
      ["Post likes", posts.reduce((sum, p) => sum + Number(p.likes || 0), 0)],
      ["Comments", posts.reduce((sum, p) => sum + Number(p.comments || 0), 0)],
      [
        "Report resolution rate",
        (reports.length
          ? Math.round(
              (reports.filter((r) => r.status === "Resolved").length /
                reports.length) *
                100,
            )
          : 0) + "%",
      ],
    ]);
  if (type === "audit")
    downloadCSV("campusconnect-audit.csv", [
      ["Action", "Target", "Performed by", "Timestamp", "Details"],
      ...audit.map((a) => [a.action, a.target, a.by, a.time, a.details]),
    ]);
}
[
  ["exportOverview", "overview"],
  ["exportInstitutes", "institutes"],
  ["exportUsers", "users"],
  ["exportPosts", "posts"],
  ["exportReports", "reports"],
  ["exportAnalytics", "analytics"],
  ["exportAudit", "audit"],
].forEach(([id, type]) =>
  $("#" + id).addEventListener("click", () => exportData(type)),
);
$("#addUserButton").onclick = async () => {
  const user = await showAddUserModal();
  if (!user) return;
  try {
    const response = await fetch(window.APP_CONTEXT + "/api/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": window.CSRF_TOKEN || "",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      showToast(result.error || "Could not create user.");
      return;
    }
    users.unshift(result);
    renderUsersTable();
    updateCounts();
    await refreshAudit();
    showToast("User added successfully.");
  } catch (error) {
    showToast("Backend unavailable. User was not created.");
  }
};
// Dashboard charts and first render
async function bootstrapAdminPanel() {
  try {
    const endpoints = ["institutes", "users", "posts", "reports", "audit"];
    const responses = await Promise.all(
      endpoints.map((name) =>
        fetch(window.APP_CONTEXT + "/api/admin/" + name, {
          headers: { Accept: "application/json" },
        }),
      ),
    );
    const failed = responses.find((response) => !response.ok);
    if (failed) {
      if (failed.status === 401) {
        window.location.assign(window.APP_CONTEXT + "/login");
        return;
      }
      const body = await failed.json().catch(() => ({}));
      throw new Error(
        body.error || `Database request failed (${failed.status}).`,
      );
    }
    [institutes, users, posts, reports, audit] = await Promise.all(
      responses.map((response) => response.json()),
    );
    renderInstituteTable();
    renderUsersTable();
    renderPostsTable();
    renderReportsTable();
    renderPostsPreview();
    renderPendingPreview();
    renderReportsPreview();
    renderCharts();
    renderAudit();
    updateCounts();
  } catch (error) {
    institutes = [];
    users = [];
    posts = [];
    reports = [];
    audit = [];
    renderInstituteTable();
    renderUsersTable();
    renderPostsTable();
    renderReportsTable();
    renderPostsPreview();
    renderPendingPreview();
    renderReportsPreview();
    renderCharts();
    renderAudit();
    updateCounts();
    showToast(error.message || "Could not load records from the database.");
  }
}
bootstrapAdminPanel();
