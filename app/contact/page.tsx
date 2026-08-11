import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "Start a Project | HashSync", description: "Discuss a mobile, web, AI, connected-device, or custom software product with HashSync." };

export default function ContactPage() {
  return <main><SiteHeader />
    <section className="contact-page shell">
      <div className="contact-page-copy"><p className="eyebrow"><span /> Start a project</p><h1>Tell us what<br />you&apos;re <em>building.</em></h1><p>Whether you are an individual with an idea or a company with a complex product challenge, share what you want to build or improve. We&apos;ll review it and come back with a clear next step.</p><div className="contact-facts"><div><span>Email</span><a href="mailto:aaziq@hash-sync.com">aaziq@hash-sync.com</a></div><div><span>Location</span><b>Avenue Mall, DHA Phase 1<br />Islamabad, Pakistan</b></div><div><span>Collaboration</span><b>Individuals · Companies · International · Remote</b></div></div></div>
      <form className="project-form" action="mailto:aaziq@hash-sync.com" method="post" encType="text/plain">
        <div className="field-pair"><label>Your name<input name="name" type="text" autoComplete="name" required placeholder="Name" /></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@email.com" /></label></div>
        <label>Company, brand, or project name <span className="optional">Optional</span><input name="company-or-project" type="text" autoComplete="organization" placeholder="Your company or personal project" /></label>
        <label>What are you looking to build?<select name="project-type" defaultValue=""><option value="" disabled>Select a project type</option><option>Mobile application</option><option>Web or SaaS platform</option><option>AI-powered product</option><option>IoT or connected device</option><option>Custom software</option><option>E-commerce</option><option>Existing product improvement</option></select></label>
        <label>Project details<textarea name="details" rows={5} required placeholder="The idea, current challenge, users, and any timeline you have in mind…" /></label>
        <button className="button button-primary" type="submit">Send project brief <span>↗</span></button>
        <p>Submitting opens your email app so you can review the message before sending.</p>
      </form>
    </section>
    <SiteFooter />
  </main>;
}
