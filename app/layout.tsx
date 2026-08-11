import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "hash-sync.com";
  const base = `${protocol}://${host}`;
  return {
    title: { default: "HashSync — Engineering Ideas Into Real Products", template: "%s · HashSync" },
    description: "HashSync engineers mobile apps, web platforms, AI-powered software, and connected digital products for startups and ambitious businesses.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { type: "website", title: "HashSync — Engineering Ideas Into Real Products", description: "Mobile · Web · AI · Connected Products", images: [{ url: `${base}/og.png`, width: 1792, height: 933, alt: "HashSync product engineering" }] },
    twitter: { card: "summary_large_image", title: "HashSync — Engineering Ideas Into Real Products", description: "Mobile · Web · AI · Connected Products", images: [`${base}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
