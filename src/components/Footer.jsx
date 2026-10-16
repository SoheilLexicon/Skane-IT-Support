import { ArrowUpRight } from 'lucide-react';
import flagga from '../assets/flagga.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand"><img src={flagga} alt="" width="37" height="31"/><span>SKÅNE IT SUPPORT</span></div>
        <a href="#hem" className="back-top">Tillbaka till toppen <ArrowUpRight size={17} aria-hidden="true"/></a>
      </div>
      <div className="container footer-bottom"><span>© 2026 Skåne IT Support · Skolprojekt</span><span>Byggt med React, Vite och CSS</span></div>
    </footer>
  );
}
