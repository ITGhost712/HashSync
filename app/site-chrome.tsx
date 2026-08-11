export function SiteHeader() {
  return (
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="/" aria-label="HashSync home"><img src="/hashsync-logo-transparent.png" alt="HashSync" /></a>
      <div className="nav-links"><a href="/services">Services</a><a href="/industries">Industries</a><a href="/team">Team</a><a href="/about">About</a><a href="/contact">Contact</a></div>
      <a className="button button-small button-dark" href="/contact">Start a project <span>↗</span></a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer shell">
      <a className="brand footer-brand" href="/"><img src="/hashsync-logo-transparent.png" alt="HashSync" /></a>
      <p>Product engineering for the real world.</p>
      <div><a href="/services">Services</a><a href="/industries">Industries</a><a href="/team">Team</a><a href="/about">About</a><a href="/contact">Contact</a></div>
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
