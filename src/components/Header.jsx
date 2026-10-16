import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import flagga from '../assets/flagga.png';

const links = [
  { href: '#hem', label: 'Hem' },
  { href: '#tjanster', label: 'Tjänster' },
  { href: '#om', label: 'Om projektet' },
  { href: '#galleri', label: 'Galleri' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Header({ onContact }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#hem" onClick={closeMenu} aria-label="Skåne IT Support, till startsidan">
          <img className="brand-flag" src={flagga} alt="" width="44" height="36" />
          <span className="brand-text"><strong>SKÅNE <span>IT SUPPORT</span></strong><small>TEKNIK MED LOKAL KÄNSLA</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Stäng menyn' : 'Öppna menyn'}>
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
        <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Huvudmeny">
          {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a href="#kontakt" className="nav-cta" onClick={() => { onContact(); closeMenu(); }}>Testa kontakt <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}
