import type { Metadata } from "next";
import { PageCTA, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "Industries | HashSync", description: "HashSync engineers digital products for startups, SaaS, health and wellness, connected devices, professional services, and commerce." };

const sectors = [
  ["Startups", "MVPs, prototypes, technical architecture, full product builds, and the engineering support to grow beyond launch.", "Idea → MVP → Scale"],
  ["SaaS", "Subscription products, dashboards, multi-user platforms, integrations, and modernization for established software businesses.", "Web + Backend + Cloud"],
  ["IoT & Connected Products", "Companion apps, BLE communication, sensor data, device control, and cloud-connected product systems.", "Mobile + Hardware + Data"],
  ["Health & Wellness", "Thoughtful wellness applications, habit products, dashboards, and companion apps for connected wellness devices.", "Experience + Reliability"],
  ["Professional Services", "Client portals, internal platforms, reporting systems, and workflow automation that reduce operational friction.", "People + Process + Software"],
  ["Commerce", "Shopify and custom commerce, payments, inventory, order systems, and integrations designed around the buyer journey.", "Store + Systems + Growth"],
];

export default function IndustriesPage() {
  return <main><SiteHeader />
    <header className="subpage-hero shell"><p className="eyebrow"><span /> Industries</p><h1>Deep engineering.<br /><em>Applied with context.</em></h1><p>The technology changes, but the work begins in the same place: understanding the users, environment, constraints, and outcome that matter.</p></header>
    <section className="sector-section"><div className="shell sector-grid">{sectors.map(([name, text, stack], i) => <article key={name}><span>0{i + 1}</span><h2>{name}</h2><p>{text}</p><b>{stack}</b></article>)}</div></section>
    <section className="cross-system shell"><div><p className="eyebrow"><span /> Our differentiator</p><h2>We connect the full system.</h2></div><div className="cross-map"><span>Interface</span><i>+</i><span>Mobile</span><i>+</i><span>Cloud</span><i>+</i><span>AI</span><i>+</i><span>Hardware</span></div></section>
    <PageCTA /><SiteFooter />
  </main>;
}
