# CampusConnect Admin Panel (JSP + Servlet + PostgreSQL)

This project splits the supplied CampusConnect admin HTML into JSP views, external CSS/JavaScript, Java Servlets, DAO/database access, and a PostgreSQL schema. The configured database name is `campusvoice`, matching the working pgAdmin instance used during setup.

## Features

- Responsive admin dashboard based on the supplied HTML.
- Institute verification: approve/reject applications.
- User management: add a user record, suspend/reactivate accounts.
- Post moderation: hide, restore, or archive posts.
- Content moderation: move reports to review, resolve, or dismiss them.
- CSV exports, admin login/logout, session handling, CSRF protection, and audit logs.
- PostgreSQL persistence for data lists and moderation actions.

## Requirements

- JDK 17 or newer
- Apache Tomcat 10.1+
- PostgreSQL 14+ recommended
- Maven 3.9+

The PostgreSQL JDBC driver is declared as a Maven dependency (`org.postgresql:postgresql:42.7.14`). Maven automatically downloads it during the build and packages it in the web application's `WEB-INF/lib`. The project uses a `.war` file because JSP/Servlet applications run inside a servlet container such as Tomcat; the JDBC driver itself is a separate `.jar` file.

## 1. Create the PostgreSQL database

Open a terminal with PostgreSQL tools installed and run:

```bash
createdb -U postgres campusvoice
psql -U postgres -d campusvoice -f database/campusconnect.sql
```

If `createdb` is not available, create a database named `campusvoice` in pgAdmin, then run `database/campusconnect.sql` in the Query Tool connected to that database. Do not run the schema against the default `postgres` database.

Default development login:

- Email: `admin@campusconnect.local`
- Password: `Admin@123`

These credentials are for local development only. Change them before deployment. The schema seeds this administrator only; it does not insert sample institutes, users, posts, or reports.

Optional local UI fixture data is in `database/demo-data.sql`. Apply it only to a development database after `database/campusconnect.sql`; it creates fictional institutes, users, posts, and reports and is safe to rerun.

## 2. Configure the database connection

Defaults in `Database.java`:

- JDBC URL: `jdbc:postgresql://localhost:5432/campusvoice`
- User: `postgres`
- Password: configure `DB_PASSWORD` in the Tomcat environment or local `.env`

For local development, copy `.env.example` to `.env` and set the PostgreSQL password. `.env` is ignored by Git. The app reads a project `.env` for development, a `.env` beside Tomcat's `CATALINA_BASE`, or a file named by `DB_CONFIG_FILE`; process environment variables take precedence. For deployments, set these variables on the Tomcat process instead of relying on a local file:

```bash
export DB_URL='jdbc:postgresql://localhost:5432/campusvoice'
export DB_USER='postgres'
export DB_PASSWORD='your_postgres_password'
```

On Windows PowerShell, use `$env:DB_URL`, `$env:DB_USER`, and `$env:DB_PASSWORD`. Do not commit real database credentials. Ensure PostgreSQL is running and listening at `DB_URL` before signing in.

## 3. Build the application

From this project directory, run:

```bash
mvn clean package
```

Generated deployable file:

```text
target/campusconnect-admin.war
```

The PostgreSQL JDBC JAR is resolved by Maven and copied into the WAR under `WEB-INF/lib`. You normally do not need to add it manually.

## 4. Deploy to Tomcat

Copy `target/campusconnect-admin.war` to Tomcat's `webapps` directory, start Tomcat, and open:

`http://localhost:8080/campusconnect-admin/`

## 5. PostgreSQL JDBC driver JAR

Official pgJDBC driver download, version 42.7.14:

https://jdbc.postgresql.org/download/postgresql-42.7.14.jar

The same version is declared in `pom.xml`; Maven is the recommended way to include it in this web app. The driver JAR alone is not the complete admin application.

## Project structure

```text
CampusConnectAdmin/
├── database/campusconnect.sql
├── pom.xml
├── README.md
├── .env.example
└── src/main/
    ├── java/com/campusconnect/admin/
    │   ├── config/Database.java
    │   ├── dao/AdminDAO.java
    │   ├── filter/AdminAuthFilter.java
    │   ├── security/PasswordUtil.java
    │   └── servlet/
    │       ├── AdminApiServlet.java
    │       ├── AdminServlet.java
    │       ├── LoginServlet.java
    │       └── LogoutServlet.java
    └── webapp/
        ├── index.jsp
        ├── assets/css/{admin.css,login.css}
        ├── assets/js/admin.js
        └── WEB-INF/
            ├── web.xml
            └── views/{admin.jsp,login.jsp}
```

## API endpoints

Requires an authenticated administrator session:

- `GET /api/admin/institutes`
- `GET /api/admin/users`
- `GET /api/admin/posts`
- `GET /api/admin/reports`
- `GET /api/admin/audit`
- `GET /api/admin/stats`
- `POST /api/admin/action`
- `POST /api/admin/users`

## Notes

- This is an educational starter, not a production-ready SaaS admin console. Add rate limiting, role-based permissions, account recovery, secure invitation/password setup, document verification uploads, pagination, migrations, and centralized exception handling before production use.
- Creating a user creates a user-account record only; it does not set a login password or send an invitation.
- Dashboard summaries and charts are calculated from database records. Historical growth before the records stored in this schema is not available.
- The API uses prepared statements for data and checks CSRF tokens on state-changing requests. PostgreSQL unique constraint violations are handled via SQLState `23505`.
