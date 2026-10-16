import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

// 7 återanvändbara React-komponenter, ordnade i sidans läsordning.
export default function App() {
  const [showContact, setShowContact] = useState(false);
  const openContact = () => setShowContact(true);

  return (
    <>
      <a className="skip-link" href="#main-content">Hoppa till innehållet</a>
      <Header onContact={openContact} />
      <main id="main-content">
        <Hero />
        <Services onContact={openContact} />
        <About />
        <Gallery />
        <Contact showContact={showContact} setShowContact={setShowContact} />
      </main>
      <Footer />
    </>
  );
}
