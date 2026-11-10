import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Timeline } from "@/components/timeline";
import { getPortfolioContent } from "@/lib/portfolio-store";
import { connection } from "next/server";

export default async function Home() {
  await connection();
  const content = await getPortfolioContent();
  const visible = {
    skills: content.skillGroups.length > 0,
    timeline: content.experiences.length > 0 || content.education.length > 0,
    projects: content.projects.length > 0,
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Aller au contenu principal</a>
      <Header profile={content.profile} visible={visible} />
      <main id="main-content">
        <Hero profile={content.profile} quickFacts={content.quickFacts} socialLinks={content.socialLinks} hasProjects={visible.projects} />
        <About profile={content.profile} languages={content.languages} sectionCopy={content.sectionCopy} />
        {visible.skills ? <Skills skillGroups={content.skillGroups} sectionCopy={content.sectionCopy} /> : null}
        {visible.timeline ? <Timeline experiences={content.experiences} education={content.education} sectionCopy={content.sectionCopy} /> : null}
        {visible.projects ? <Projects projects={content.projects} sectionCopy={content.sectionCopy} /> : null}
        {content.certifications.length > 0 ? <Certifications certifications={content.certifications} sectionCopy={content.sectionCopy} /> : null}
        <Contact profile={content.profile} socialLinks={content.socialLinks} sectionCopy={content.sectionCopy} />
      </main>
      <Footer profile={content.profile} socialLinks={content.socialLinks} />
    </>
  );
}
