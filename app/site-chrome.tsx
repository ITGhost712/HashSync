import Link from "next/link";

export { SiteHeader } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="footer shell">
      <Link className="brand footer-brand" href="/"><img src="/hashsync-logo-transparent.png" alt="HashSync" /></Link>
      <p>Product engineering for the real world.</p>
      <div><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/industries">Who We Help</Link><Link href="/team">Our Team</Link><Link href="/about">About Us</Link><Link href="/contact">Contact</Link></div>
      <span>© 2026 HashSync</span>
    </footer>
  );
}

export function PageCTA() {
  return (
    <section className="contact shell page-cta">
      <div><p className="eyebrow eyebrow-light"><span /> Start a conversation</p><h2>Tell us what<br />you&apos;re <em>building.</em></h2></div>
      <div className="contact-action"><p>Share the idea, challenge, or product you want to improve. We&apos;ll respond with a clear next step.</p><a className="email-link" href="mailto:aaziq@hash-sync.com">aaziq@hash-sync.com <span>↗</span></a><p className="location">Avenue Mall, DHA Phase 1, Islamabad, Pakistan · Available worldwide</p></div>
    </section>
  );
}
