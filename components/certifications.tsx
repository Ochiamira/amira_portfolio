import { ArrowUpRight, Award } from "lucide-react";
import type { PortfolioContent } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Certifications({ certifications, sectionCopy }: Pick<PortfolioContent, "certifications" | "sectionCopy">) {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title={sectionCopy.certificationsTitle}
            description={sectionCopy.certificationsDescription}
          />
        </Reveal>
        <div className="certification-grid">
          {certifications.map((certification, index) => (
            <Reveal className="certification-card" delay={index * 0.06} key={certification.title}>
              <div className="certification-icon"><Award size={23} /></div>
              <div>
                <span>{certification.date}</span>
                <h3>{certification.title}</h3>
                <p>{certification.issuer}</p>
              </div>
              {certification.credentialUrl ? (
                <a href={certification.credentialUrl} target="_blank" rel="noreferrer" aria-label={`Voir ${certification.title}`}>
                  <ArrowUpRight size={18} />
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
