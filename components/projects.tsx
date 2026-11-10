import { CodeXml, ExternalLink, GitBranch, Target, TrendingUp } from "lucide-react";
import type { PortfolioContent, Project } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className={project.featured ? "project-card project-card--featured" : "project-card"} delay={index * 0.06}>
      <div className="project-visual">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
        ) : (
          <div className="project-placeholder">
            <CodeXml size={38} />
            <span>Étude de cas</span>
          </div>
        )}
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-content">
        <div className="project-heading">
          <div>
            <span className="project-number">Projet {String(index + 1).padStart(2, "0")}</span>
            <h3>{project.title}</h3>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-details">
          <div><Target size={17} /><span><strong>Défi</strong>{project.challenge}</span></div>
          <div><CodeXml size={17} /><span><strong>Solution</strong>{project.solution}</span></div>
          <div><TrendingUp size={17} /><span><strong>{project.outcomeLabel ?? "Résultat"}</strong>{project.impact}</span></div>
        </div>
        <div className="tag-list project-tags">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-links">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">Voir la démo <ExternalLink size={15} /></a>
          ) : null}
          {project.repositoryUrl ? (
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Code source <GitBranch size={15} /></a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

export function Projects({ projects, sectionCopy }: Pick<PortfolioContent, "projects" | "sectionCopy">) {
  return (
    <section className="section section--dark" id="projets">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Projets sélectionnés"
            title={sectionCopy.projectsTitle}
            description={sectionCopy.projectsDescription}
          />
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
        </div>
      </div>
    </section>
  );
}
