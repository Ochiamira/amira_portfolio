"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Profile } from "@/types/portfolio";

export function Header({
  profile,
  visible,
}: {
  profile: Profile;
  visible: { skills: boolean; timeline: boolean; projects: boolean };
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const navigation = [
    { label: "À propos", href: "#a-propos" },
    ...(visible.skills ? [{ label: "Compétences", href: "#competences" }] : []),
    ...(visible.timeline ? [{ label: "Parcours", href: "#parcours" }] : []),
    ...(visible.projects ? [{ label: "Projets", href: "#projets" }] : []),
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    // Le thème enregistré n'est disponible qu'après le montage dans le navigateur.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(shouldUseDark);
    document.documentElement.dataset.theme = shouldUseDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#accueil" aria-label="Retour à l'accueil">
          <span>{profile.firstName.charAt(0)}</span>
          {profile.lastName.charAt(0)}
        </a>

        <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Navigation principale">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href={`mailto:${profile.email}`} onClick={() => setMenuOpen(false)}>
            Parlons ensemble
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
