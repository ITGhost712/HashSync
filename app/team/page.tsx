import type { Metadata } from "next";
import { PageCTA, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Our Team | HashSync",
  description: "Meet the leadership, management, and engineering professionals behind HashSync products.",
};

const team = [
  { initials: "AS", name: "Aaziq Ali Shah", role: "Chief Executive Officer", bio: "Aaziq leads HashSync's vision and product-engineering philosophy, with direct responsibility for the quality, direction, and delivery of the products the team creates.", image: "/aaziq-ali-shah.png" },
  { initials: "ZU", name: "Zulkaif Umer Shah", role: "Chief Operating Officer", bio: "Zulkaif oversees day-to-day operations and delivery standards, keeping projects, people, and client communication moving with clarity and consistency." },
  { initials: "AH", name: "Ammara Hashmi", role: "Manager", bio: "Ammara coordinates project portfolios and team efforts, helping translate plans into organized execution and timely client outcomes." },
  { initials: "SS", name: "Shariq Ali Shah", role: "HR Manager", bio: "Shariq supports the people and culture behind HashSync, creating the environment where collaboration, accountability, and professional growth can thrive." },
  { initials: "MM", name: "Muhammad Musa", role: "Web Developer", bio: "Muhammad builds modern web experiences and product interfaces, turning client requirements into clear, responsive, and dependable software." },
];

export default function TeamPage() {
  return <main><SiteHeader />
    <header className="subpage-hero team-hero shell"><p className="eyebrow"><span /> Our team</p><h1>The people who<br /><em>own the outcome.</em></h1><p>HashSync brings leadership, operations, project coordination, and engineering together around one responsibility: building products our clients can trust.</p></header>
    <section className="team-page-section"><div className="shell team-page-grid">
      {team.map((member, index) => <article className={index === 0 ? "person-card person-card-featured" : "person-card"} key={member.name}>
        <div className="person-visual">{member.image ? <img src={member.image} alt={`${member.name}, ${member.role} at HashSync`} /> : <span>{member.initials}</span>}</div>
        <div className="person-info"><span className="person-number">0{index + 1}</span><h2>{member.name}</h2><b>{member.role}</b><p>{member.bio}</p></div>
      </article>)}
    </div></section>
    <section className="individuals-banner shell"><div><p className="eyebrow eyebrow-light"><span /> Who can work with us</p><h2>You do not need to be a company to build something serious.</h2></div><div><p>We work with individual founders, creators, professionals, and product owners as well as startups and established organizations. What matters is a meaningful idea, a real problem, and the commitment to build it properly.</p><a className="button button-primary" href="/contact">Discuss your idea <span>↗</span></a></div></section>
    <PageCTA /><SiteFooter />
  </main>;
}
