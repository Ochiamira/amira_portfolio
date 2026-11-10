import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { isPortfolioStoreConfigured } from "@/lib/portfolio-store";

export const ADMIN_COOKIE_NAME = "portfolio_admin_session";
export const ADMIN_SESSION_SECONDS = 8 * 60 * 60;

export function isAdminConfigured() {
  return (
    isPortfolioStoreConfigured() &&
    (process.env.ADMIN_PASSWORD?.length ?? 0) >= 16 &&
    (process.env.ADMIN_SESSION_SECRET?.length ?? 0) >= 32
  );
}

function equalDigest(a: string, b: string) {
  const left = createHash("sha256").update(a).digest();
  const right = createHash("sha256").update(b).digest();
  return timingSafeEqual(left, right);
}

export function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  return isAdminConfigured() && !!expected && equalDigest(password, expected);
}

function signature(expires: string) {
  return createHmac("sha256", process.env.ADMIN_SESSION_SECRET ?? "")
    .update(`portfolio-admin:${expires}`)
    .digest("base64url");
}

export function createAdminSession() {
  const expires = String(Date.now() + ADMIN_SESSION_SECONDS * 1000);
  return `${expires}.${signature(expires)}`;
}

export function verifyAdminSession(token: string | undefined) {
  if (!isAdminConfigured() || !token) return false;
  const [expires, signed, extra] = token.split(".");
  if (extra || !expires || !signed) return false;
  const expiry = Number(expires);
  if (!Number.isSafeInteger(expiry) || expiry < Date.now()) return false;
  return equalDigest(signed, signature(expires));
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}
