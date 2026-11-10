import { z } from "zod";
import type { PortfolioContent } from "@/types/portfolio";

const text = (max: number) => z.string().trim().min(1).max(max);
const optionalText = (max: number) => z.string().trim().max(max);

const address = (allowEmpty = false) =>
  z.string().trim().max(500).refine((value) => {
    if (allowEmpty && value === "") return true;
    if (value.startsWith("/") && !value.startsWith("//")) return true;
    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:";
    } catch {
      return false;
    }
  }, "Utilisez une URL http(s) ou un chemin commençant par /.");

const timelineItem = z.object({
  period: text(100),
  title: text(160),
  organization: text(160),
  location: optionalText(120).optional(),
  description: text(1200),
  highlights: z.array(text(500)).max(12).optional(),
});

export const portfolioSchema: z.ZodType<PortfolioContent> = z.object({
  profile: z.object({
    firstName: text(80),
    lastName: text(80),
    initials: text(8),
    role: text(180),
    location: text(120),
    email: z.email().max(150),
    phone: optionalText(40),
    availability: optionalText(180),
    shortBio: text(600),
    longBio: text(3000),
    objective: text(2000),
    photo: address(true),
    cv: address(true),
  }),
  sectionCopy: z.object({
    aboutTitle: text(200),
    aboutQuote: text(1000),
    skillsTitle: text(200),
    skillsDescription: text(1000),
    timelineTitle: text(200),
    timelineDescription: text(1000),
    projectsTitle: text(200),
    projectsDescription: text(1000),
    contactTitle: text(200),
    contactDescription: text(1000),
    certificationsTitle: text(200),
    certificationsDescription: text(1000),
  }),
  socialLinks: z.array(z.object({
    label: text(60),
    href: address(),
  })).max(12),
  quickFacts: z.array(z.object({
    value: text(30),
    label: text(100),
  })).max(8),
  skillGroups: z.array(z.object({
    title: text(120),
    skills: z.array(text(100)).max(40),
  })).max(12),
  experiences: z.array(timelineItem).max(30),
  education: z.array(timelineItem).max(30),
  projects: z.array(z.object({
    title: text(180),
    category: text(120),
    description: text(1200),
    challenge: text(1200),
    solution: text(1200),
    impact: text(1200),
    technologies: z.array(text(100)).max(40),
    image: address(true),
    liveUrl: address(true).optional(),
    repositoryUrl: address(true).optional(),
    featured: z.boolean().optional(),
    outcomeLabel: optionalText(60).optional(),
  })).max(30),
  certifications: z.array(z.object({
    title: text(160),
    issuer: text(160),
    date: text(80),
    credentialUrl: address(true).optional(),
  })).max(30),
  languages: z.array(text(60)).max(20),
});
