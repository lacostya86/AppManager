/*
 * Copyright (C) 2020 Muntashir Al-Islam
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

package io.github.muntashirakon.AppManager.utils;

import android.annotation.TargetApi;
import android.util.Pair;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.security.DigestInputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.zip.CRC32;

import androidx.annotation.NonNull;
import androidx.annotation.StringDef;

public class DigestUtils {
    @StringDef({CRC32, MD2, MD5, SHA_1, SHA_224, SHA_256, SHA_384, SHA_512})
    @Retention(RetentionPolicy.SOURCE)
    public @interface Algorithm {
    }

    public static final String CRC32 = "CRC32";
    public static final String MD2 = "MD2";
    public static final String MD5 = "MD5";
    public static final String SHA_1 = "SHA-1";
    @TargetApi(22)
    public static final String SHA_224 = "SHA-224";
    public static final String SHA_256 = "SHA-256";
    public static final String SHA_384 = "SHA-384";
    public static final String SHA_512 = "SHA-512";

    @NonNull
    public static String getHexDigest(@Algorithm String algo, @NonNull byte[] bytes) {
        return Utils.bytesToHex(getDigest(algo, bytes));
    }

    @NonNull
    public static String getHexDigest(@Algorithm String algo, @NonNull File file) {
        try (FileInputStream fileInputStream = new FileInputStream(file)) {
            return DigestUtils.getHexDigest(algo, fileInputStream);
        } catch (IOException e) {
            e.printStackTrace();
            return Utils.bytesToHex(new byte[0]);
        }
    }

    @NonNull
    public static String getHexDigest(@Algorithm String algo, @NonNull InputStream stream) {
        return Utils.bytesToHex(getDigest(algo, stream));
    }

    @NonNull
    public static byte[] getDigest(@Algorithm String algo, @NonNull byte[] bytes) {
        if (CRC32.equals(algo)) {
            java.util.zip.CRC32 crc32 = new CRC32();
            crc32.update(bytes);
            return Utils.longToBytes(crc32.getValue());
        }
        try {
            return MessageDigest.getInstance(algo).digest(bytes);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return new byte[0];
        }
    }

    @NonNull
    public static byte[] getDigest(@Algorithm String algo, @NonNull InputStream stream) {
        if (CRC32.equals(algo)) {
            java.util.zip.CRC32 crc32 = new CRC32();
            byte[] buffer = new byte[1024 * 1024];
            int read;
            try {
                while ((read = stream.read(buffer)) > 0) {
                    crc32.update(buffer, 0, read);
                }
            } catch (IOException ignore) {
            }
            return Utils.longToBytes(crc32.getValue());
        }
        try {
            MessageDigest messageDigest = MessageDigest.getInstance(algo);
            try (DigestInputStream digestInputStream = new DigestInputStream(stream, messageDigest)) {
                byte[] buffer = new byte[1024 * 8];
                //noinspection StatementWithEmptyBody
                while (digestInputStream.read(buffer) != -1) {
                }
                digestInputStream.close();
                return messageDigest.digest();
            }
        } catch (NoSuchAlgorithmException | IOException e) {
            e.printStackTrace();
            return new byte[0];
        }
    }

    @NonNull
    public static Pair<String, String>[] getDigests(File file) {
        @Algorithm String[] algorithms = new String[]{DigestUtils.MD5, DigestUtils.SHA_1, DigestUtils.SHA_256,
                DigestUtils.SHA_384, DigestUtils.SHA_512};
        @SuppressWarnings("unchecked")
        Pair<String, String>[] digests = new Pair[algorithms.length];
        for (int i = 0; i < algorithms.length; ++i) {
            digests[i] = new Pair<>(algorithms[i], getHexDigest(algorithms[i], file));
        }
        return digests;
    }

    @NonNull
    public static Pair<String, String>[] getDigests(byte[] bytes) {
        @Algorithm String[] algorithms = new String[]{DigestUtils.MD5, DigestUtils.SHA_1, DigestUtils.SHA_256,
                DigestUtils.SHA_384, DigestUtils.SHA_512};
        @SuppressWarnings("unchecked")
        Pair<String, String>[] digests = new Pair[algorithms.length];
        for (int i = 0; i < algorithms.length; ++i) {
            digests[i] = new Pair<>(algorithms[i], getHexDigest(algorithms[i], bytes));
        }
        return digests;
    }
}
