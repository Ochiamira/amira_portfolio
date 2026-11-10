import { ArrowUp } from "lucide-react";
import type { PortfolioContent } from "@/types/portfolio";

export function Footer({ profile, socialLinks }: Pick<PortfolioContent, "profile" | "socialLinks">) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a className="brand brand--footer" href="#accueil">
            <span>{profile.firstName.charAt(0)}</span>{profile.lastName.charAt(0)}
          </a>
          <p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Tous droits réservés.</p>
        </div>
        <div className="footer-links">
          {socialLinks.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}</a>)}
          <a href="#accueil" aria-label="Revenir en haut">Haut de page <ArrowUp size={15} /></a>
        </div>
      </div>
    </footer>
  );
}
