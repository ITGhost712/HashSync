import type { Metadata } from "next";
import { PageCTA, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "About Us", description: "Meet HashSync, an Islamabad-based product engineering company led by Aaziq Ali Shah and Zulkaif Umer Shah." };

export default function AboutPage() {
  return <main><SiteHeader />
    <header className="subpage-hero shell"><p className="eyebrow"><span /> About HashSync</p><h1>Technical capability.<br /><em>Genuine responsibility.</em></h1><p>HashSync is an Islamabad-based product engineering company helping individuals, founders, startups, and businesses turn complex ideas into dependable, real-world software.</p></header>
    <section className="story-section"><div className="shell story-grid"><div><p className="eyebrow eyebrow-light"><span /> Our point of view</p><h2>We don&apos;t simply write code.</h2></div><div><p>We help shape what should be built, how the system should work, and how to move from an early idea to a product people can depend on.</p><p>Our team works across mobile, web, backend, cloud, AI, and connected devices. That breadth matters when a product crosses technical boundaries—and most serious products do.</p><p>We value thoughtful decisions, direct communication, reliable execution, and long-term relationships over short-term output.</p></div></div></section>
    <section className="leadership shell"><div className="leadership-image"><img src="/aaziq-ali-shah.png" alt="Aaziq Ali Shah, CEO of HashSync" /><span>Aaziq Ali Shah<br /><small>CEO, HashSync</small></span></div><div className="leadership-copy"><p className="eyebrow"><span /> Leadership</p><h2>Visible leadership. Direct accountability.</h2><blockquote>“We are building HashSync around a simple idea—combine strong technical capability with genuine responsibility for the products we create.”</blockquote><div className="leader-list"><div><b>Aaziq Ali Shah</b><span>Chief Executive Officer</span></div><div><b>Zulkaif Umer Shah</b><span>Chief Operating Officer</span></div></div><a className="button button-dark leadership-link" href="/team">Meet the full team <span>↗</span></a></div></section>
    <section className="values"><div className="shell values-grid"><article><b>01</b><h3>Understand first</h3><p>The problem comes before the implementation.</p></article><article><b>02</b><h3>Own the outcome</h3><p>We take responsibility for what the product needs to achieve.</p></article><article><b>03</b><h3>Communicate clearly</h3><p>Good delivery depends on honest, visible collaboration.</p></article><article><b>04</b><h3>Build for reality</h3><p>Software must work beyond the demo and keep working as it grows.</p></article></div></section>
    <PageCTA /><SiteFooter />
  </main>;
}
