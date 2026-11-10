import { defaultPortfolioContent } from "@/data/portfolio";
import { portfolioSchema } from "@/lib/portfolio-schema";
import type { PortfolioContent } from "@/types/portfolio";

export function getPortfolioStoreConfig() {
  const rawUrl = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!rawUrl || !key) return null;
  try {
    const url = new URL(rawUrl);
    const localDevelopment = process.env.NODE_ENV !== "production"
      && ["localhost", "127.0.0.1"].includes(url.hostname);
    if (url.protocol !== "https:" && !(localDevelopment && url.protocol === "http:")) return null;
    return { url: url.origin, key };
  } catch {
    return null;
  }
}

export function isPortfolioStoreConfigured() {
  return getPortfolioStoreConfig() !== null;
}

export async function readStoredPortfolio(): Promise<PortfolioContent | null> {
  const config = getPortfolioStoreConfig();
  if (!config) return null;

  const response = await fetch(
    `${config.url}/rest/v1/portfolio_content?id=eq.1&select=content`,
    { headers: { apikey: config.key }, cache: "no-store" },
  );
  if (!response.ok) throw new Error("La lecture du contenu a échoué.");

  const rows: unknown = await response.json();
  if (!Array.isArray(rows) || rows.length === 0) return null;

  const parsed = portfolioSchema.safeParse(rows[0]?.content);
  if (!parsed.success) throw new Error("Le contenu enregistré est invalide.");
  return parsed.data;
}

export async function getPortfolioContent(): Promise<PortfolioContent> {
  try {
    return (await readStoredPortfolio()) ?? defaultPortfolioContent;
  } catch (error) {
    console.error("Portfolio data unavailable:", error);
    return defaultPortfolioContent;
  }
}

export async function savePortfolioContent(content: PortfolioContent) {
  const config = getPortfolioStoreConfig();
  if (!config) throw new Error("Le stockage n'est pas configuré.");

  const response = await fetch(
    `${config.url}/rest/v1/portfolio_content?on_conflict=id`,
    {
      method: "POST",
      headers: {
        apikey: config.key,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify({ id: 1, content }),
      cache: "no-store",
    },
  );
  if (!response.ok) throw new Error("L'enregistrement du contenu a échoué.");
}
