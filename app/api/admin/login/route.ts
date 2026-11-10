import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  ADMIN_SESSION_SECONDS,
  createAdminSession,
  isAdminConfigured,
  isSameOrigin,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: "Requête refusée." }, { status: 403 });
  }
  if (!isAdminConfigured()) {
    return NextResponse.json({ message: "Administration non configurée." }, { status: 503 });
  }

  let password: unknown;
  try {
    const body: unknown = await request.json();
    password = typeof body === "object" && body !== null && "password" in body
      ? body.password
      : undefined;
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400 });
  }

  if (typeof password !== "string" || password.length > 500 || !verifyAdminPassword(password)) {
    return NextResponse.json({ message: "Mot de passe incorrect." }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Connexion réussie." });
  response.cookies.set(ADMIN_COOKIE_NAME, createAdminSession(), {
    httpOnly: true,
    sameSite: "strict",
    secure: new URL(request.url).protocol === "https:",
    path: "/",
    maxAge: ADMIN_SESSION_SECONDS,
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
