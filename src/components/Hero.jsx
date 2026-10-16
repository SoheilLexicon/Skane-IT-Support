import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import gastgifvaregarden from '../assets/gastgifvaregarden.webp';

export default function Hero() {
  return (
    <section id="hem" className="hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(15,37,40,.94) 0%,rgba(15,37,40,.83) 39%,rgba(15,37,40,.18) 100%),url('${gastgifvaregarden}')` }} aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> LOKAL KÄNSLA · DIGITAL KUNSKAP</div>
          <h1 id="hero-heading">Teknik ska vara <em>enkel att använda.</em></h1>
          <p className="hero-lead">En modern IT-supportidé med rötterna i Skåne. Upptäck hur tydlig information och smart design kan göra digital hjälp mer tillgänglig.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#tjanster">Se våra tjänster <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="button button-outline" href="#om">Om projektet <ArrowDownRight size={18} aria-hidden="true" /></a>
          </div>
          <p className="hero-note"><CheckCircle2 size={17} aria-hidden="true" /> En frontenddemonstration skapad med React och Vite.</p>
        </div>
        <div className="hero-caption"><span>01 / SKÅNE</span><strong>En plats att känna igen. En idé att utveckla.</strong></div>
      </div>
    </section>
  );
}
