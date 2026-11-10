import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getPortfolioContent } from "@/lib/portfolio-store";
import { connection } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  await connection();
  const { profile } = await getPortfolioContent();
  return {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.firstName} ${profile.lastName} — ${profile.role}`,
    template: `%s — ${profile.firstName} ${profile.lastName}`,
  },
  description: profile.shortBio,
  keywords: [profile.role, "Computer Vision", "vision industrielle", "Edge AI", "robotique", "Tunisie"],
  authors: [{ name: `${profile.firstName} ${profile.lastName}` }],
  creator: `${profile.firstName} ${profile.lastName}`,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: `${profile.firstName} ${profile.lastName} — ${profile.role}`,
    description: profile.shortBio,
    siteName: `${profile.firstName} ${profile.lastName}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.firstName} ${profile.lastName} — ${profile.role}`,
    description: profile.shortBio,
  },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1921" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
