import { useState } from 'react';
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';

export default function Contact({ showContact, setShowContact }) {
  const [status, setStatus] = useState('');
  const toggle = () => { setShowContact(!showContact); setStatus(''); };
  const handleSubmit = (event) => {
    event.preventDefault();
    // This is a local UI demonstration, not an email integration.
    event.currentTarget.reset();
    setStatus('Testet fungerade! Inget meddelande har skickats eller sparats.');
  };

  return (
    <section id="kontakt" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="section-label section-label-light">04 / SÄG HEJ</p>
          <h2 id="contact-heading">Här börjar <em>en bra dialog.</em></h2>
          <p>En enkel och tydlig kontaktupplevelse är en viktig del av en modern webbplats. Här kan du testa hur formuläret skulle fungera.</p>
          <div className="contact-trust"><ShieldCheck size={21} aria-hidden="true" /><span>Demoläge – inga personuppgifter överförs eller sparas.</span></div>
          <div className="contact-detail"><Mail size={20} aria-hidden="true" /> Skolprojekt · ingen aktiv kundtjänst</div>
        </div>
        <div className="contact-panel">
          <p className="panel-kicker">KONTAKTDEMO</p>
          <h3>Testa kontaktformuläret</h3>
          <p>Öppna formuläret, skriv ett testmeddelande och se hur ett gränssnitt kan svara.</p>
          <button type="button" className="button button-dark toggle-contact" aria-expanded={showContact} aria-controls="demo-contact-form" onClick={toggle}>
            {showContact ? 'Stäng formuläret' : 'Öppna formuläret'} <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          {showContact && <form className="demo-form" id="demo-contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Ditt namn</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Ditt namn" required />
            <label htmlFor="contact-email">Din e-postadress</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="namn@example.com" required />
            <label htmlFor="contact-message">Meddelande</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Skriv ditt testmeddelande här ..." required />
            <button type="submit" className="button button-dark full-width">Testa meddelande <ArrowUpRight size={18} aria-hidden="true" /></button>
            <p className="form-note">Endast demonstration – formuläret skickar inte e-post.</p>
          </form>}
          {status && <p className="form-status" role="status">{status}</p>}
        </div>
      </div>
    </section>
  );
}
