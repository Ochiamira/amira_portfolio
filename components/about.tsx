import { CheckCircle2, Languages, Mail, MapPin, Phone } from "lucide-react";
import type { PortfolioContent } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function About({ languages, profile, sectionCopy }: Pick<PortfolioContent, "languages" | "profile" | "sectionCopy">) {
  return (
    <section className="section" id="a-propos">
      <div className="container about-grid">
        <Reveal>
          <SectionHeading eyebrow="À propos" title={sectionCopy.aboutTitle} />
          <div className="about-copy">
            <p>{profile.longBio}</p>
            <p>{profile.objective}</p>
          </div>
          <div className="contact-facts">
            <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
            {profile.phone ? <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={18} /> {profile.phone}</a> : null}
            <span><MapPin size={18} /> {profile.location}</span>
          </div>
        </Reveal>

        <Reveal className="about-panel" delay={0.1}>
          {languages.length > 0 ? <div className="about-panel__title">
            <Languages size={22} />
            <h3>Langues</h3>
          </div> : null}
          {languages.length > 0 ? <div className="language-list">
            {languages.map((language) => (
              <div className="language-row" key={language}>
                <span><CheckCircle2 size={16} /> {language}</span>
              </div>
            ))}
          </div> : null}
          <div className="about-quote">
            <span>Ma façon de travailler</span>
            <p>{sectionCopy.aboutQuote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
