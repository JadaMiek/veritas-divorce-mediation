export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Veritas Mediation home">
            <img src="/veritas-co-logo.jpg" alt="Veritas Co. logo" />
            <span>Veritas<br /><em>Mediation</em></span>
          </a>
          <div className="nav-links"><a href="#process">The Process</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
          <a className="nav-call" href="tel:+17327731264">(732) 773-1264</a>
        </nav>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">MARRIAGE &amp; DIVORCE MEDIATION · MORRIS COUNTY, NEW JERSEY</p>
            <h1>True resolution<br />for your next chapter.</h1>
            <p className="lede">When a relationship is changing, the path forward should feel clear, respectful, and entirely your own.</p>
            <div className="hero-actions"><a className="button button-primary" href="tel:+17327731264">Schedule a confidential call</a><a className="button button-quiet" href="#process">How mediation works <span>→</span></a></div>
            <p className="call-note">Serving New Jersey, Morris County · Call or text <a href="tel:+17327731264">(732) 773-1264</a></p>
          </div>
          <aside className="hero-card" aria-label="Veritas Mediation promise"><p className="card-mark">VERITAS</p><blockquote>“A fair agreement is built by the people who have to live with it.”</blockquote><div className="card-line" /><p>Guided conversations. Informed choices. A workable way forward.</p></aside>
        </div>
      </section>

      <section className="intro shell"><p className="section-kicker">A DIFFERENT WAY FORWARD</p><div className="intro-layout"><h2>Resolve what matters<br />without losing yourself<br />in the process.</h2><div><p>Mediation gives both people a structured, neutral setting to discuss the practical decisions ahead—at a pace that supports honest conversation and lasting agreements.</p><p>Veritas means truth. Here, it means making room for the full picture and finding a resolution that is clear, informed, and respectful.</p></div></div></section>

      <section className="process" id="process"><div className="shell"><div className="section-heading"><p className="section-kicker">THE VERITAS PROCESS</p><h2>A steadier path, step by step.</h2></div><div className="steps"><article><span>01</span><h3>Start with clarity</h3><p>Begin with a confidential conversation about your situation, priorities, and whether mediation is the right fit.</p></article><article><span>02</span><h3>Make room to be heard</h3><p>Work through the issues that matter—from parenting and property to communication and next steps.</p></article><article><span>03</span><h3>Build your agreement</h3><p>Create a practical resolution that reflects your decisions and gives everyone a clear path forward.</p></article></div></div></section>

      <section className="services shell" id="services"><div className="section-heading"><p className="section-kicker">MEDIATION SERVICES</p><h2>Support for the conversations<br />that shape what comes next.</h2></div><div className="service-grid"><article><span className="service-number">01</span><h3>Divorce mediation</h3><p>Navigate financial decisions, shared property, support, and the terms of your separation with structure and care.</p></article><article><span className="service-number">02</span><h3>Parenting agreements</h3><p>Develop practical parenting plans that put children’s needs first while respecting both parents’ roles.</p></article><article><span className="service-number">03</span><h3>Marriage &amp; family conversations</h3><p>Address difficult topics before they become immovable—through constructive, facilitated dialogue.</p></article></div></section>

      <section className="closing" id="contact"><div className="shell closing-inner"><p className="section-kicker">SERVING NEW JERSEY, MORRIS COUNTY</p><h2>Resolution can start<br />with one call.</h2><p>Let’s talk privately about what you need and what mediation could look like for you.</p><a className="phone-link" href="tel:+17327731264">(732) 773-1264 <span>→</span></a></div></section>
      <footer className="footer shell"><div className="footer-brand"><img src="/veritas-co-logo.jpg" alt="" /><span>Veritas Mediation</span></div><p>True Resolution for Your Next Chapter.</p><a href="tel:+17327731264">(732) 773-1264</a></footer>
    </main>
  );
}
