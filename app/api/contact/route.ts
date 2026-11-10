import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(150),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(3000),
  companyWebsite: z.string().max(0).optional(),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Vérifiez les informations saisies puis réessayez." },
        { status: 400 },
      );
    }

    const { name, email, subject, message, companyWebsite } = parsed.data;
    if (companyWebsite) {
      return NextResponse.json({ message: "Message reçu." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        {
          message:
            "Le formulaire est prêt, mais l'envoi doit encore être configuré dans le fichier .env.local.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
        <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { message: "Le message n'a pas pu être envoyé. Réessayez plus tard." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Merci, votre message a bien été envoyé." });
  } catch {
    return NextResponse.json(
      { message: "Une erreur inattendue est survenue." },
      { status: 500 },
    );
  }
}
