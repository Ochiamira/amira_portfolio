import type { Metadata } from "next";
import { cookies } from "next/headers";
import { AdminEditor } from "@/components/admin/admin-editor";
import { AdminLogin } from "@/components/admin/admin-login";
import { ADMIN_COOKIE_NAME, isAdminConfigured, verifyAdminSession } from "@/lib/admin-auth";
import { readStoredPortfolio } from "@/lib/portfolio-store";
import { defaultPortfolioContent } from "@/data/portfolio";
import type { PortfolioContent } from "@/types/portfolio";
import "./admin.css";

export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const configured = isAdminConfigured();
  const session = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;
  const authorized = verifyAdminSession(session);

  if (!configured) {
    return (
      <main className="admin-shell admin-centered">
        <div className="admin-panel">
          <h1>Administration à configurer</h1>
          <p>Ajoutez les variables d’environnement et la table Supabase décrites dans le README pour activer l’éditeur.</p>
        </div>
      </main>
    );
  }

  if (!authorized) return <AdminLogin />;

  let content: PortfolioContent;
  try {
    content = (await readStoredPortfolio()) ?? defaultPortfolioContent;
  } catch {
    return (
      <main className="admin-shell admin-centered">
        <div className="admin-panel">
          <h1>Contenu indisponible</h1>
          <p>La base de données ne répond pas ou son contenu est invalide. Vérifiez la configuration Supabase avant de modifier le portfolio.</p>
        </div>
      </main>
    );
  }
  return <AdminEditor initialContent={content} />;
}
