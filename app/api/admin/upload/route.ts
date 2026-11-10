import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, isSameOrigin, verifyAdminSession } from "@/lib/admin-auth";
import { getPortfolioStoreConfig } from "@/lib/portfolio-store";

const mimeExtensions: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
  "application/pdf": "pdf",
};

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: "Requête refusée." }, { status: 403 });
  }
  if (!verifyAdminSession(request.cookies.get(ADMIN_COOKIE_NAME)?.value)) {
    return NextResponse.json({ message: "Session expirée. Reconnectez-vous." }, { status: 401 });
  }

  const config = getPortfolioStoreConfig();
  if (!config) {
    return NextResponse.json({ message: "Stockage non configuré." }, { status: 503 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ message: "Fichier invalide." }, { status: 400 });
  }

  const file = form.get("file");
  const kind = form.get("kind");
  if (!(file instanceof File) || typeof kind !== "string" || !["photo", "project", "cv"].includes(kind)) {
    return NextResponse.json({ message: "Fichier invalide." }, { status: 400 });
  }
  const extension = mimeExtensions[file.type];
  if (!extension || (kind === "cv" ? file.type !== "application/pdf" : !file.type.startsWith("image/"))) {
    return NextResponse.json({ message: "Format non accepté." }, { status: 400 });
  }
  if (file.size === 0 || file.size > 3 * 1024 * 1024) {
    return NextResponse.json({ message: "Le fichier doit faire moins de 3 Mo." }, { status: 400 });
  }

  const path = `${kind}/${randomUUID()}.${extension}`;
  try {
    const response = await fetch(
      `${config.url}/storage/v1/object/portfolio-media/${path}`,
      {
        method: "POST",
        headers: {
          apikey: config.key,
          "Content-Type": file.type,
          "Cache-Control": "public, max-age=31536000",
        },
        body: await file.arrayBuffer(),
        cache: "no-store",
      },
    );
    if (!response.ok) throw new Error("Upload failed");

    const publicUrl = `${config.url}/storage/v1/object/public/portfolio-media/${path}`;
    return NextResponse.json({
      url: kind === "cv" ? `${publicUrl}?download=Amira-Ochi-CV.pdf` : publicUrl,
    }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Unable to upload media:", error);
    return NextResponse.json(
      { message: "L'envoi du fichier a échoué. Vérifiez le bucket Supabase." },
      { status: 502 },
    );
  }
}
