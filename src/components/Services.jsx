import { ArrowUpRight, Cloud, MonitorCog, Wifi } from 'lucide-react';
const services = [
  { icon: MonitorCog, index: '01', title: 'Datorsupport', copy: 'En tydlig väg till hjälp med Windows, installationer, program och vanlig felsökning.', tags: 'DATORER · PROGRAM' },
  { icon: Wifi, index: '02', title: 'Nätverk & Wi-Fi', copy: 'Lättbegriplig information om anslutningar, routrar och det trådlösa nätverket.', tags: 'UPPKOPPLING · NÄTVERK' },
  { icon: Cloud, index: '03', title: 'Microsoft 365', copy: 'Vägledning kring Outlook, Teams, OneDrive och digitala arbetsflöden.', tags: 'M365 · SAMARBETE' },
];

export default function Services({ onContact }) {
  return (
    <section id="tjanster" className="section services-section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-heading services-heading">
          <div><p className="section-label">01 / VÅRT KONCEPT</p><h2 id="services-heading">Enklare vardag,<br /><em>smartare teknik.</em></h2></div>
          <p>Vi visar tre områden där en tydlig IT-supportwebbplats kan skapa trygghet och göra det lätt att hitta rätt information.</p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, index, title, copy, tags }) => (
            <article className="service-card" key={index}>
              <div className="service-top"><span className="service-icon"><Icon size={30} strokeWidth={1.7} aria-hidden="true" /></span><span className="service-number">{index}</span></div>
              <p className="service-tag">{tags}</p>
              <h3>{title}</h3><p className="service-copy">{copy}</p>
              <a className="service-link" href="#kontakt" onClick={onContact}>Testa en förfrågan <ArrowUpRight size={18} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
        <p className="section-disclaimer">Skolprojekt: sidan visar ett förslag på tjänster. Faktisk tjänstetillgänglighet är inte bekräftad.</p>
      </div>
    </section>
  );
}
