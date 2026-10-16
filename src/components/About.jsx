import { BookOpen, HeartHandshake, Sparkles } from 'lucide-react';
import ostergatan from '../assets/ostergatan.webp';

export default function About() {
  return (
    <section id="om" className="section about-section" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-photo-wrap">
          <img src={ostergatan} alt="Lugn gata i Skåne med traditionella hus och grönska" loading="lazy" width="1500" height="1000" />
          <div className="photo-caption"><span>SKÅNSK INSPIRATION</span><strong>Lokalt och personligt</strong></div>
        </div>
        <div className="about-copy">
          <p className="section-label">02 / OM PROJEKTET</p>
          <h2 id="about-heading">Modern teknik.<br /><em>Mänsklig närhet.</em></h2>
          <p className="about-lead">Skåne IT Support är ett frontendprojekt som förenar en lokal identitet med användarvänlig webbdesign.</p>
          <p>Jag har byggt webbplatsen för att öva React-komponenter, responsiv CSS, bilder, navigation och interaktiva formulär. Målet är att göra information lätt att hitta och förstå, oavsett skärmstorlek.</p>
          <div className="about-points">
            <div><HeartHandshake size={21} aria-hidden="true" /><span>Tydligt bemötande</span></div>
            <div><BookOpen size={21} aria-hidden="true" /><span>Pedagogisk kommunikation</span></div>
            <div><Sparkles size={21} aria-hidden="true" /><span>Design för alla skärmar</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
