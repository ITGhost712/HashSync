"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Who We Help", "/industries"],
  ["Our Team", "/team"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
      <Link className="brand" href="/" aria-label="HashSync home"><img src="/hashsync-logo-transparent.png" alt="HashSync" /></Link>
      <div className="nav-links">{links.map(([label, href]) => <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</div>
      <Link className="button button-small button-dark nav-cta" href="/contact">Start a project <span>↗</span></Link>
      <button className="mobile-nav-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <div className="mobile-menu" id="mobile-navigation" aria-hidden={!open}>
        <div className="mobile-menu-links">{links.map(([label, href], index) => <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<i>↗</i></Link>)}</div>
        <div className="mobile-menu-footer"><a href="mailto:aaziq@hash-sync.com">aaziq@hash-sync.com</a><span>Islamabad · Available worldwide</span></div>
      </div>
    </nav>
  );
}
