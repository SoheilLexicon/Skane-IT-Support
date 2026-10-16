import skanorKyrka from '../assets/skanor-kyrka.webp';
import oldFalsterbo from '../assets/Old_falsterbo.webp';
import falsterbohus from '../assets/falsterbohus.webp';
import strand from '../assets/stand.webp';

const photos = [
  { src: skanorKyrka, title: 'Skanörs kyrka', description: 'Historisk byggnad i Skanör' },
  { src: oldFalsterbo, title: 'Gamla Falsterbo', description: 'Charmig gata i Falsterbo' },
  { src: falsterbohus, title: 'Falsterbohus', description: 'Byggnad och sanddyner i Falsterbo' },
  { src: strand, title: 'Strandhytter i Skåne', description: 'Färgglada strandhytter vid havet' },
];

export default function Gallery() {
  return (
    <section id="galleri" className="section gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-heading gallery-heading">
          <div><p className="section-label">03 / VÅR INSPIRATION</p><h2 id="gallery-heading">Skåne i <em>bilder.</em></h2></div>
          <p>Lokala miljöer ger webbplatsen en egen karaktär. Från historiska gator till sand och hav.</p>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <figure className="gallery-card" key={photo.title}>
              <img src={photo.src} alt={photo.description} width="800" height="600" loading="lazy" />
              <figcaption><span className="gallery-index">0{index + 1}</span><strong>{photo.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
