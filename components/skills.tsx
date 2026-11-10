import { BrainCircuit, Code2, Wrench } from "lucide-react";
import type { PortfolioContent } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Code2, Wrench, BrainCircuit];

export function Skills({ skillGroups, sectionCopy }: Pick<PortfolioContent, "skillGroups" | "sectionCopy">) {
  return (
    <section className="section section--tinted" id="competences">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Compétences"
            title={sectionCopy.skillsTitle}
            description={sectionCopy.skillsDescription}
            align="center"
          />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <Reveal className="skill-card" delay={index * 0.08} key={group.title}>
                <div className="skill-icon"><Icon size={23} /></div>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
