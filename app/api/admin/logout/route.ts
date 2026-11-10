import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, isSameOrigin } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: "Requête refusée." }, { status: 403 });
  }
  const response = NextResponse.json({ message: "Déconnexion réussie." });
  response.cookies.set(ADMIN_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "strict",
    secure: new URL(request.url).protocol === "https:",
    path: "/",
    maxAge: 0,
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
