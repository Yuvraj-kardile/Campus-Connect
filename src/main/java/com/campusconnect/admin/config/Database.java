package com.campusconnect.admin.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.net.URI;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

/** Central PostgreSQL connection configuration. */
public final class Database {

    private static final String DEFAULT_URL = "jdbc:postgresql://localhost:5432/campusvoice";
    private static final String DEFAULT_USER = "postgres";

    private Database() {
    }

    public static Connection getConnection() throws SQLException {
        Map<String, String> localConfig = readLocalConfig();
        String url = env("DB_URL", localConfig.getOrDefault("DB_URL", DEFAULT_URL));
        String user = env("DB_USER", localConfig.getOrDefault("DB_USER", DEFAULT_USER));
        String password = env("DB_PASSWORD", localConfig.get("DB_PASSWORD"));

        if (password == null || password.isBlank()) {
            throw new SQLException(
                    "DB_PASSWORD is not configured. Set it on the Tomcat process or in a local .env file.");
        }

        // Load pgJDBC explicitly so missing-driver errors are easier to diagnose.
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            throw new SQLException(
                    "PostgreSQL JDBC driver is missing from the application runtime.", e);
        }

        return DriverManager.getConnection(url, user, password);
    }

    private static String env(String key, String fallback) {
        String value = System.getenv(key);
        return value == null || value.isBlank() ? fallback : value;
    }

    /**
     * Loads ignored, local-only configuration for development; process env always
     * wins.
     */
    private static Map<String, String> readLocalConfig() {
        Map<String, String> config = new HashMap<>();
        Set<Path> candidates = new LinkedHashSet<>();
        candidates.add(Path.of(".env"));
        candidates.add(Path.of(System.getProperty("user.dir", "."), ".env"));
        String configFile = System.getenv("DB_CONFIG_FILE");
        if (configFile != null && !configFile.isBlank())
            candidates.add(Path.of(configFile));
        String catalinaBase = System.getProperty("catalina.base");
        if (catalinaBase != null && !catalinaBase.isBlank())
            candidates.add(Path.of(catalinaBase, ".env"));
        try {
            URI location = Database.class.getProtectionDomain().getCodeSource().getLocation().toURI();
            Path directory = Path.of(location);
            if (Files.isRegularFile(directory))
                directory = directory.getParent();
            for (int depth = 0; directory != null && depth < 5; depth++, directory = directory.getParent()) {
                if (Files.isRegularFile(directory.resolve("pom.xml"))) {
                    candidates.add(directory.resolve(".env"));
                    break;
                }
            }
        } catch (Exception ignored) {
            // A missing code location should not prevent environment based configuration.
        }
        for (Path path : candidates) {
            if (!Files.isRegularFile(path))
                continue;
            try {
                for (String line : Files.readAllLines(path)) {
                    String entry = line.trim();
                    if (entry.isEmpty() || entry.startsWith("#"))
                        continue;
                    int separator = entry.indexOf('=');
                    if (separator <= 0)
                        continue;
                    String key = entry.substring(0, separator).trim();
                    String value = entry.substring(separator + 1).trim();
                    if (value.length() >= 2 && ((value.startsWith("'") && value.endsWith("'"))
                            || (value.startsWith("\"") && value.endsWith("\"")))) {
                        value = value.substring(1, value.length() - 1);
                    }
                    if (key.equals("DB_URL") || key.equals("DB_USER") || key.equals("DB_PASSWORD"))
                        config.putIfAbsent(key, value);
                }
            } catch (Exception ignored) {
                // Keep startup diagnostics focused on the required database setting below.
            }
        }
        return config;
    }
}
