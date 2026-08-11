"use client";

import { useEffect, useState } from "react";

const links = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Team", "/team"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <nav className={`nav shell${open ? " mobile-menu-open" : ""}`} aria-label="Main navigation">
      <a className="brand" href="/" aria-label="HashSync home"><img src="/hashsync-logo-transparent.png" alt="HashSync" /></a>
      <div className="nav-links">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
      <a className="button button-small button-dark nav-cta" href="/contact">Start a project <span>↗</span></a>
      <button className="mobile-nav-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <div className="mobile-menu" id="mobile-navigation" aria-hidden={!open}>
        <div className="mobile-menu-links">{links.map(([label, href], index) => <a href={href} key={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<i>↗</i></a>)}</div>
        <div className="mobile-menu-footer"><a href="mailto:aaziq@hash-sync.com">aaziq@hash-sync.com</a><span>Islamabad · Available worldwide</span></div>
      </div>
    </nav>
  );
}
