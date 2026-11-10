import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import type { PortfolioContent } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";

export function Hero({ profile, quickFacts, socialLinks, hasProjects }: Pick<PortfolioContent, "profile" | "quickFacts" | "socialLinks"> & { hasProjects: boolean }) {
  return (
    <section className="hero" id="accueil">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          {profile.availability ? <div className="status-pill">
            <span className="status-dot" />
            {profile.availability}
          </div> : null}
          <p className="hero-kicker">Bonjour, je suis</p>
          <h1>
            {profile.firstName} <span>{profile.lastName}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-description">{profile.shortBio}</p>

          <div className="hero-actions">
            <a className="button button--primary" href={hasProjects ? "#projets" : "#contact"}>
              {hasProjects ? "Découvrir mes projets" : "Me contacter"} <ArrowDown size={18} />
            </a>
            {profile.cv ? <a className="button button--secondary" href={profile.cv} download>
              Télécharger mon CV <Download size={18} />
            </a> : null}
          </div>

          <div className="hero-meta">
            <span><MapPin size={16} /> {profile.location}</span>
            <div className="social-list">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={0.12}>
          <div className="portrait-frame">
            <div className="portrait-accent" />
            {profile.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} />
            ) : (
              <div className="portrait-placeholder" aria-label="Emplacement pour votre photo">
                <span>{profile.initials}</span>
                <small>Ajoutez votre photo</small>
              </div>
            )}
            {profile.availability ? <div className="portrait-card">
              <span>Actuellement</span>
              <strong>{profile.availability}</strong>
            </div> : null}
          </div>
        </Reveal>
      </div>

      {quickFacts.length > 0 ? <div className="container metrics" aria-label="Informations rapides">
        {quickFacts.map((fact, index) => (
          <Reveal className="metric" delay={index * 0.06} key={fact.label}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </Reveal>
        ))}
      </div> : null}
    </section>
  );
}
