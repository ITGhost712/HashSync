import type { Metadata } from "next";
import { PageCTA, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "Services", description: "Mobile, web, SaaS, AI, connected-device, custom software, and e-commerce product engineering from HashSync." };

const details = [
  ["01", "Mobile App Development", "Build for iOS and Android without compromising the product experience.", ["Flutter and cross-platform development", "Native iOS and Android integrations", "Firebase, authentication, notifications, and payments", "Bluetooth, sensor, and real-time applications", "App Store and Google Play deployment"]],
  ["02", "Web & SaaS Development", "Software platforms that support users, teams, and growing operations.", ["Custom web applications and SaaS platforms", "Dashboards, portals, and role-based systems", "Frontend, backend, APIs, and databases", "Subscriptions, payments, and third-party integrations", "Maintenance and product modernization"]],
  ["03", "AI & Intelligent Applications", "Practical AI designed around a clear product or workflow need.", ["LLM and external AI API integration", "Knowledge assistants and intelligent search", "Document intelligence and recommendations", "AI workflow automation", "AI features for existing products"]],
  ["04", "IoT & Connected Devices", "Software that communicates reliably with devices in the real world.", ["Bluetooth Low Energy companion apps", "Sensor and device data integration", "Device configuration and command control", "Real-time status and monitoring", "Mobile, cloud, hardware, and data architecture"]],
  ["05", "Custom Software", "Technology shaped around your workflow instead of forcing a generic tool to fit.", ["Internal business platforms", "Operations and workflow systems", "Custom dashboards and reporting", "Process automation and integrations", "Legacy product modernization"]],
  ["06", "E-commerce", "Commerce experiences engineered for usability, integration, and growth.", ["Shopify development and customization", "Custom storefronts and catalogs", "Checkout and payment gateways", "Inventory and order integrations", "Conversion-focused interface implementation"]],
];

export default function ServicesPage() {
  return <main><SiteHeader />
    <header className="subpage-hero shell"><p className="eyebrow"><span /> Services</p><h1>One engineering partner.<br /><em>Every product layer.</em></h1><p>Strategy, interface implementation, software engineering, integrations, deployment, and ongoing improvement—connected by one accountable team.</p></header>
    <section className="page-stat-band"><div className="shell"><span>Product planning</span><i>→</i><span>UI / UX</span><i>→</i><span>Engineering</span><i>→</i><span>Launch</span><i>→</i><span>Support</span></div></section>
    <section className="detail-list shell">
      {details.map(([id, title, intro, bullets]) => <article className="detail-row" key={id as string}><span>{id as string}</span><div><h2>{title as string}</h2><p>{intro as string}</p></div><ul>{(bullets as string[]).map(item => <li key={item}>{item}</li>)}</ul></article>)}
    </section>
    <PageCTA /><SiteFooter />
  </main>;
}
