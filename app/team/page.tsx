import type { Metadata } from "next";
import { PageCTA, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the leadership, management, and engineering professionals behind HashSync products.",
};

const team = [
  { initials: "AS", name: "Aaziq Ali Shah", role: "Chief Executive Officer", bio: "Aaziq leads HashSync's vision and product-engineering philosophy, with direct responsibility for the quality, direction, and delivery of the products the team creates.", image: "/aaziq-ali-shah.png" },
  { initials: "ZS", name: "Zulkaif Umer Shah", role: "Chief Operating Officer", bio: "Zulkaif oversees day-to-day operations and delivery standards, keeping projects, people, and client communication moving with clarity and consistency." },
  { initials: "DS", name: "Dur e Sameen", role: "Lead Software Engineer", bio: "Sameen leads software engineering execution, helping the team make sound technical decisions and deliver dependable products across complex requirements." },
  { initials: "FH", name: "Maham Shabbir", role: "UI/UX Designer", bio: "Maham shapes clear, thoughtful interfaces and user journeys that turn product requirements into accessible and polished digital experiences." },
  { initials: "AH", name: "Ammad Hussain", role: "Cloud Security Consultant", bio: "Ammad advises on cloud security, infrastructure risk, and practical safeguards that help products operate with stronger technical foundations." },
  { initials: "MT", name: "Muhammad Talha", role: "HR Manager", bio: "Talha supports the people and culture behind HashSync, fostering collaboration, accountability, and professional growth across the team." },
  { initials: "ZA", name: "Zuljamal Ashrafeen", role: "Web Developer", bio: "Zuljamal builds modern web experiences and product interfaces, translating requirements into responsive, maintainable, and dependable software." },
  { initials: "UA", name: "Usman Amir", role: "Flutter Developer", bio: "Usman develops cross-platform mobile applications in Flutter with a focus on reliable functionality, product quality, and a consistent user experience." },
  { initials: "AN", name: "Aiman Nisar", role: "Junior Flutter Developer", bio: "Aiman contributes to Flutter application development, feature implementation, testing, and the continuous improvement of mobile product experiences." },
  { initials: "UK", name: "Fahad Khan", role: "Associate Software Engineer", bio: "Fahad supports application engineering across features and integrations, bringing careful implementation and collaborative problem-solving to the team." },
  { initials: "IN", name: "Irtaza Naqvi", role: "Database Design Analyst", bio: "Irtaza works on database structure and data design, helping products organize, protect, and use information efficiently as they grow." },
  { initials: "IS", name: "Sheikh Faizan", role: "Shopify Developer", bio: "Faizan develops and customizes Shopify stores, commerce interfaces, and integrations designed around dependable operations and customer experience." },
  { initials: "MN", name: "Maheen Nawaz", role: "SQA Specialist", bio: "Maheen focuses on software quality assurance, validating product behavior and helping the team identify issues before they reach users." },
  { initials: "ZF", name: "Zainab Fatima", role: "Business Development Executive", bio: "Zainab connects client needs with HashSync's capabilities, supporting early conversations and long-term relationships with clarity and care." },
];

export default function TeamPage() {
  return <main><SiteHeader />
    <header className="subpage-hero team-hero shell"><p className="eyebrow"><span /> Our team</p><h1>The people who<br /><em>own the outcome.</em></h1><p>HashSync brings leadership, operations, project coordination, and engineering together around one responsibility: building products our clients can trust.</p></header>
    <section className="team-page-section"><div className="shell team-page-grid">
      {team.map((member, index) => <article className={index === 0 ? "person-card person-card-featured" : "person-card"} key={member.name}>
        <div className="person-visual">{member.image ? <img src={member.image} alt={`${member.name}, ${member.role} at HashSync`} /> : <span>{member.initials}</span>}</div>
        <div className="person-info"><span className="person-number">{String(index + 1).padStart(2, "0")}</span><h2>{member.name}</h2><b>{member.role}</b><p>{member.bio}</p></div>
      </article>)}
    </div></section>
    <section className="individuals-banner shell"><div><p className="eyebrow eyebrow-light"><span /> Who can work with us</p><h2>You do not need to be a company to build something serious.</h2></div><div><p>We work with individual founders, creators, professionals, and product owners as well as startups and established organizations. What matters is a meaningful idea, a real problem, and the commitment to build it properly.</p><a className="button button-primary" href="/contact">Discuss your idea <span>↗</span></a></div></section>
    <PageCTA /><SiteFooter />
  </main>;
}
