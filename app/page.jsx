const services = [
  ["Divorce mediation", "A measured process for financial, property, and separation decisions."],
  ["Parenting agreements", "Thoughtful plans that put children’s needs and family stability first."],
  ["Marriage & family conversations", "Guided dialogue to create understanding before conflict grows."],
];

const steps = [
  ["01", "Begin with a conversation", "Discuss your goals, questions, and the decisions ahead."],
  ["02", "Create practical agreements", "Address the details with structure, balance, and respect."],
  ["03", "Leave with clarity", "Reach a workable resolution for the next stage of life."],
];

export default function Home() {
  return <main>
    <header className="site-header"><a className="wordmark" href="#top">Veritas <span>Mediation</span></a><nav aria-label="Main navigation"><a href="#process">Process</a><a href="#services">Services</a><a href="#contact">Contact</a></nav><a className="header-phone" href="tel:+17327731264">(732) 773-1264</a></header>
    <section id="top" className="hero"><div className="hero-copy"><p className="eyebrow">MARRIAGE &amp; DIVORCE MEDIATION · MORRIS COUNTY, NEW JERSEY</p><h1>True resolution for your next chapter.</h1><p className="hero-text">Clear, respectful mediation for couples and families ready to move forward with confidence.</p><a className="button" href="tel:+17327731264">Schedule a conversation</a></div><div className="hero-logo-wrap"><img className="hero-logo" src="/veritas-co-logo.jpg" alt="Veritas Co. logo" /></div></section>
    <section className="introduction content-width"><div><p className="section-label">A STEADIER WAY FORWARD</p><h2>Resolution built on clarity.</h2></div><div className="intro-copy"><p>Separation, divorce, and family change bring difficult decisions. Veritas Mediation offers a focused, neutral space to address them with care, honesty, and practical direction.</p><p>Serving individuals and families throughout Morris County and New Jersey.</p></div></section>
    <section id="process" className="process-section"><div className="content-width"><p className="section-label">THE PROCESS</p><h2>From conflict to a clear path.</h2><div className="steps">{steps.map(([number, title, text]) => <article className="step" key={number}><span>{number} ·</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section id="services" className="services content-width"><p className="section-label">HOW VERITAS HELPS</p><h2>Support for the conversations that matter most.</h2><div className="service-grid">{services.map(([title, text]) => <article className="service" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section id="contact" className="contact"><p className="section-label">START WITH A CONVERSATION</p><h2>Ready for a clearer next step?</h2><p>Call Veritas Mediation to discuss how a structured, respectful process can help your family move forward.</p><a className="button" href="tel:+17327731264">Call (732) 773-1264</a></section>
    <footer><span>© 2026 Veritas Mediation</span><span>Serving Morris County &amp; New Jersey</span></footer>
  </main>;
}
