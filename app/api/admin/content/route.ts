import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, isSameOrigin, verifyAdminSession } from "@/lib/admin-auth";
import { portfolioSchema } from "@/lib/portfolio-schema";
import { savePortfolioContent } from "@/lib/portfolio-store";

export async function PUT(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: "Requête refusée." }, { status: 403 });
  }
  if (!verifyAdminSession(request.cookies.get(ADMIN_COOKIE_NAME)?.value)) {
    return NextResponse.json({ message: "Session expirée. Reconnectez-vous." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Contenu invalide." }, { status: 400 });
  }

  const parsed = portfolioSchema.safeParse(body);
  if (!parsed.success) {
    const invalidField = parsed.error.issues[0]?.path.join(" > ") || "inconnu";
    return NextResponse.json(
      { message: `Champ manquant ou invalide : ${invalidField}.` },
      { status: 400 },
    );
  }

  try {
    await savePortfolioContent(parsed.data);
    return NextResponse.json({ message: "Modifications enregistrées." }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Unable to save portfolio:", error);
    return NextResponse.json(
      { message: "L'enregistrement a échoué. Réessayez plus tard." },
      { status: 502 },
    );
  }
}
