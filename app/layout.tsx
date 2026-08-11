import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hash-sync.com"),
  title: { default: "HashSync | Product Engineering Company", template: "%s | HashSync" },
  description: "HashSync engineers mobile apps, web platforms, AI-powered software, and connected digital products for individuals, founders, startups, and businesses.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { type: "website", url: "https://hash-sync.com", siteName: "HashSync", title: "HashSync | Product Engineering Company", description: "Mobile, web, AI, and connected products engineered for the real world.", images: [{ url: "/og.png", width: 1792, height: 933, alt: "HashSync product engineering" }] },
  twitter: { card: "summary_large_image", title: "HashSync | Product Engineering Company", description: "Mobile, web, AI, and connected products engineered for the real world.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
