const services = [
  { id: "01", title: "Mobile App Development", text: "Production-ready iOS and Android applications—from polished consumer experiences to real-time, subscription, and device-connected products.", tags: ["Flutter", "iOS", "Android"] },
  { id: "02", title: "Web & SaaS", text: "Custom web applications, SaaS platforms, portals, dashboards, and backend systems designed around real users and operational needs.", tags: ["Web apps", "APIs", "Cloud"] },
  { id: "03", title: "AI Applications", text: "Practical AI features that improve search, automate workflows, understand documents, and help users make better decisions inside your product.", tags: ["LLMs", "Automation", "AI APIs"] },
  { id: "04", title: "IoT & Connected Devices", text: "Companion apps and cloud systems that communicate with Bluetooth devices, sensors, custom protocols, and real-time hardware data.", tags: ["BLE", "Sensors", "Real-time"] },
  { id: "05", title: "Custom Software", text: "Purpose-built operations software, internal systems, workflow automation, and data platforms shaped around how your business actually works.", tags: ["Platforms", "Workflows", "Data"] },
  { id: "06", title: "E-commerce", text: "Shopify and custom commerce experiences with thoughtful UX, secure payments, integrations, and the foundations for sustainable growth.", tags: ["Shopify", "Payments", "Stores"] },
];

const process = [
  ["01", "Discover", "Align on the business, users, constraints, and the problem worth solving."],
  ["02", "Design", "Define flows, architecture, priorities, and a product experience people can use."],
  ["03", "Build", "Engineer the product in focused increments with clear progress and regular reviews."],
  ["04", "Launch", "Test across the full system and release to production with confidence."],
  ["05", "Improve", "Support, measure, modernize, and scale the product as the business evolves."],
];

const technologies = [
  ["Mobile", "Flutter · Dart · iOS · Android"],
  ["Web", "Modern frontend · SaaS · Responsive UI"],
  ["Backend & Cloud", "Firebase · REST APIs · Databases · Auth"],
  ["AI", "LLM integrations · AI APIs · Intelligent workflows"],
  ["Connected Devices", "Bluetooth LE · Sensors · Real-time data"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="HashSync home">
          <img src="/hashsync-logo-light.jpg" alt="HashSync" />
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
        </div>
        <a className="button button-small button-dark" href="#contact">Start a project <span>↗</span></a>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Product engineering company · Islamabad</p>
          <h1>Engineering ideas into <em>real products.</em></h1>
          <p className="hero-lede">HashSync helps startups and businesses design, build, launch, and scale mobile apps, web platforms, AI-powered software, and connected digital products.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Discuss your idea <span>↗</span></a>
            <a className="text-link" href="#services">Explore capabilities <span>↓</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Product engineering system visualization">
          <div className="hero-glow" />
          <div className="system-card">
            <div className="system-head"><span>Product system</span><b><i /> Production ready</b></div>
            <div className="system-core">
              <div className="core-node"><small>HashSync</small><strong>Build</strong></div>
              <span className="node node-mobile">Mobile</span>
              <span className="node node-cloud">Cloud</span>
              <span className="node node-ai">AI</span>
              <span className="node node-device">Device</span>
            </div>
            <div className="system-foot"><span>Strategy</span><span>UI / UX</span><span>Engineering</span><span>Support</span></div>
          </div>
          <div className="float-chip chip-one"><span>&lt;/&gt;</span> Reliable engineering</div>
          <div className="float-chip chip-two"><span>⌁</span> Connected systems</div>
        </div>
      </header>

      <section className="proof-bar">
        <div className="shell proof-grid">
          <div><b>End-to-end</b><span>From product thinking to launch</span></div>
          <div><b>Complex made clear</b><span>Mobile + Cloud + AI + Hardware</span></div>
          <div><b>Built together</b><span>Direct, transparent collaboration</span></div>
          <div><b>Global delivery</b><span>Based in Islamabad, working worldwide</span></div>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> Core services</p><h2>Every layer your<br />product needs.</h2></div>
          <p>We combine product thinking, design execution, and engineering depth so you can move from a complex idea to dependable, production-ready software with one accountable team.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-top"><span>{service.id}</span><i>↗</i></div>
              <h3>{service.title}</h3><p>{service.text}</p>
              <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="systems" id="approach">
        <div className="shell">
          <div className="section-heading systems-heading">
            <p className="eyebrow eyebrow-light"><span /> Built for the hard parts</p>
            <h2>Software for the<br /><em>real world.</em></h2>
          </div>
          <div className="system-showcase">
            <article className="showcase-main">
              <div className="showcase-copy"><span>Connected products</span><h3>Mobile, cloud, hardware, and data—in one dependable system.</h3><p>We engineer companion applications that communicate with Bluetooth devices and sensors, translate raw data into useful experiences, and stay reliable outside the lab.</p></div>
              <div className="device-map" aria-label="Connected product architecture">
                <span className="map-item phone">Mobile app</span><span className="map-line line-one" />
                <span className="map-item api">API</span><span className="map-line line-two" />
                <span className="map-item sensor">BLE device</span><span className="map-line line-three" />
                <span className="map-item cloud">Cloud data</span>
              </div>
            </article>
            <article className="showcase-side"><span>AI in the product</span><h3>Useful intelligence, not empty hype.</h3><p>Search, recommendations, assistants, document understanding, and workflow automation built around a clear user need.</p><div className="mini-flow"><i>Input</i><b>→</b><i>Reason</i><b>→</b><i>Action</i></div></article>
          </div>
        </div>
      </section>

      <section className="section shell why" id="about">
        <div className="why-intro"><p className="eyebrow"><span /> Why HashSync</p><h2>Ownership at every step.</h2><p>We do not simply take tickets and write code. We think with you, surface tradeoffs early, and take responsibility for turning the product into something reliable people can use.</p></div>
        <div className="why-grid">
          <article><span>01</span><h3>Product-first thinking</h3><p>We start with the outcome, user, and constraints before choosing what to build.</p></article>
          <article><span>02</span><h3>Engineering depth</h3><p>From interface to API, cloud to device protocol, we work across the complete system.</p></article>
          <article><span>03</span><h3>Clear collaboration</h3><p>Direct communication, visible progress, and decisions you can understand.</p></article>
          <article><span>04</span><h3>Long-term partnership</h3><p>Launch is a milestone. We stay ready to support, improve, and scale what comes next.</p></article>
        </div>
      </section>

      <section className="ceo-section">
        <div className="shell ceo-grid">
          <div className="ceo-photo-wrap">
            <div className="ceo-accent" />
            <img className="ceo-photo" src="/aaziq-ali-shah.jpeg" alt="Aaziq Ali Shah, CEO of HashSync" />
            <div className="ceo-signature"><b>Aaziq Ali Shah</b><span>CEO, HashSync</span></div>
          </div>
          <div className="ceo-message">
            <p className="eyebrow"><span /> From our CEO</p>
            <h2>A message from<br />our CEO.</h2>
            <blockquote>
              <p>At HashSync, we believe great software starts with understanding the problem before writing the first line of code. Our goal is not simply to deliver applications, but to build products that solve real problems, create value, and can grow with the businesses behind them.</p>
              <p>We approach every project as a partnership. Whether we are developing a mobile application, a web platform, an AI-powered product, or software connected to physical hardware, our focus remains the same: thoughtful engineering, clear communication, and reliable execution.</p>
              <p>We are building HashSync around a simple idea—combine strong technical capability with genuine responsibility for the products we create.</p>
            </blockquote>
            <div className="ceo-name"><b>Aaziq Ali Shah</b><span>CEO, HashSync</span></div>
          </div>
        </div>
      </section>

      <section className="section shell" id="process">
        <div className="section-heading process-heading"><p className="eyebrow"><span /> Development process</p><h2>A clear path from<br />idea to impact.</h2></div>
        <div className="process-list">
          {process.map(([number, title, text]) => <div className="process-row" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i>↗</i></div>)}
        </div>
      </section>

      <section className="tech-section">
        <div className="shell tech-grid">
          <div><p className="eyebrow eyebrow-light"><span /> Technology</p><h2>The right tools,<br />organized around<br />the product.</h2><p>Technology choices should serve the experience, the system, and the future of the product—not a trend.</p></div>
          <div className="tech-list">{technologies.map(([group, items]) => <div key={group}><b>{group}</b><span>{items}</span></div>)}</div>
        </div>
      </section>

      <section className="section shell testimonials">
        <div className="testimonial-head"><p className="eyebrow"><span /> Client perspective</p><h2>Trusted to turn ideas<br />into working products.</h2></div>
        <div className="quote-grid">
          <figure className="quote-card featured"><div>“</div><blockquote>Hashsync delivered an outstanding mobile app for our business. Their team understood our needs perfectly and provided a solution that exceeded our expectations.</blockquote><figcaption><b>Steve Ziskind</b><span>CEO at CXR</span></figcaption></figure>
          <figure className="quote-card"><div>“</div><blockquote>They were professional and responsive throughout the entire project. Our new website looks fantastic and functions flawlessly.</blockquote><figcaption><b>Sarah Johnson</b><span>Marketing Manager, Green Solutions</span></figcaption></figure>
          <figure className="quote-card"><div>“</div><blockquote>The team guided us through the entire process of creating our app, and their insights were invaluable. We are thrilled with the final product.</blockquote><figcaption><b>Aisha Malik</b><span>Director, Softix Solutions</span></figcaption></figure>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div><p className="eyebrow eyebrow-light"><span /> Start a conversation</p><h2>Tell us what<br />you&apos;re <em>building.</em></h2></div>
        <div className="contact-action"><p>Share the idea, challenge, or product you want to improve. We&apos;ll respond with a clear next step.</p><a className="email-link" href="mailto:aaziq@hash-sync.com">aaziq@hash-sync.com <span>↗</span></a><p className="location">Avenue Mall, DHA Phase 1, Islamabad, Pakistan · Available worldwide</p></div>
      </section>

      <footer className="footer shell">
        <a className="brand footer-brand" href="#top"><img src="/hashsync-logo-light.jpg" alt="HashSync" /></a>
        <p>Product engineering for the real world.</p>
        <div><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <span>© 2026 HashSync</span>
      </footer>
    </main>
  );
}
