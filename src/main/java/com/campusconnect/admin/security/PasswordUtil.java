package com.campusconnect.admin.security;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.MessageDigest;
import java.util.HexFormat;

public final class PasswordUtil {
    private PasswordUtil() {}

    public static boolean verify(String password, String encoded) {
        if (password == null || encoded == null) return false;
        String[] parts = encoded.split("\\$");
        if (parts.length != 4 || !"pbkdf2".equals(parts[0])) return false;
        char[] chars = password.toCharArray();
        PBEKeySpec spec = null;
        try {
            int iterations = Integer.parseInt(parts[1]);
            byte[] salt = HexFormat.of().parseHex(parts[2]);
            byte[] expected = HexFormat.of().parseHex(parts[3]);
            spec = new PBEKeySpec(chars, salt, iterations, expected.length * 8);
            byte[] actual = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256").generateSecret(spec).getEncoded();
            return MessageDigest.isEqual(expected, actual);
        } catch (Exception ex) {
            return false;
        } finally {
            if (spec != null) spec.clearPassword();
            java.util.Arrays.fill(chars, '\0');
        }
    }
}
