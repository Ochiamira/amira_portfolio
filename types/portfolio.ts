export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  firstName: string;
  lastName: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  shortBio: string;
  longBio: string;
  objective: string;
  photo: string;
  cv: string;
};

export type QuickFact = {
  value: string;
  label: string;
};

export type SectionCopy = {
  aboutTitle: string;
  aboutQuote: string;
  skillsTitle: string;
  skillsDescription: string;
  timelineTitle: string;
  timelineDescription: string;
  projectsTitle: string;
  projectsDescription: string;
  contactTitle: string;
  contactDescription: string;
  certificationsTitle: string;
  certificationsDescription: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  highlights?: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
  outcomeLabel?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export type PortfolioContent = {
  profile: Profile;
  sectionCopy: SectionCopy;
  socialLinks: SocialLink[];
  quickFacts: QuickFact[];
  skillGroups: SkillGroup[];
  experiences: TimelineItem[];
  education: TimelineItem[];
  projects: Project[];
  certifications: Certification[];
  languages: string[];
};
