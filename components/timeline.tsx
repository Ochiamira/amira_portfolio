import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import type { PortfolioContent, TimelineItem } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function TimelineColumn({
  title,
  items,
  type,
}: {
  title: string;
  items: TimelineItem[];
  type: "work" | "education";
}) {
  const Icon = type === "work" ? BriefcaseBusiness : GraduationCap;

  return (
    <div className="timeline-column">
      <div className="timeline-title"><Icon size={21} /><h3>{title}</h3></div>
      <div className="timeline-list">
        {items.map((item, index) => (
          <Reveal className="timeline-item" delay={index * 0.06} key={`${item.title}-${item.period}`}>
            <span className="timeline-dot" />
            <span className="timeline-period">{item.period}</span>
            <h4>{item.title}</h4>
            <p className="timeline-organization">{item.organization}{item.location ? ` · ${item.location}` : ""}</p>
            <p>{item.description}</p>
            {item.highlights ? (
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            ) : null}
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Timeline({ education, experiences, sectionCopy }: Pick<PortfolioContent, "education" | "experiences" | "sectionCopy">) {
  return (
    <section className="section" id="parcours">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Mon parcours"
            title={sectionCopy.timelineTitle}
            description={sectionCopy.timelineDescription}
          />
        </Reveal>
        <div className="timeline-grid" style={experiences.length === 0 || education.length === 0 ? { gridTemplateColumns: "1fr" } : undefined}>
          {experiences.length > 0 ? <TimelineColumn title="Expériences" items={experiences} type="work" /> : null}
          {education.length > 0 ? <TimelineColumn title="Formation" items={education} type="education" /> : null}
        </div>
      </div>
    </section>
  );
}
