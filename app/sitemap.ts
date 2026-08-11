import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hash-sync.com";
  return ["", "/services", "/industries", "/team", "/about", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.8 }));
}
