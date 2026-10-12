export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    website?: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Maid Cafe Simulator Wiki",
  shortName: "Maid Cafe Simulator",
  logoText: "MC",
  tagline: "Cafe Management Guides, Items, Maids & Tips",
  description: "Complete Maid Cafe Simulator Wiki with gameplay guides, cafe management tips, item information, character details, and useful resources for new players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://maidcafesimulator.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://maidcafesimulator.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3232690/Maid_Cafe_Simulator/",
  heroVideoId: "tXH6W_kfQi4", // Maid Cafe Simulator - Official Release Trailer (Accelix)
  social: {
    website: "https://accelixgames.com/",
    youtube: "https://www.youtube.com/@accelix-official",
    twitter: "https://x.com/AccelixGames",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
