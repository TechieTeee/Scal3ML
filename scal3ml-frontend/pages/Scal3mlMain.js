import Head from 'next/head';
import Slider from 'react-slick';

export default function Scal3MLMain() {
  // Sample data for gallery images
  const modelsGalleryImages = [/* Array of image URLs for models gallery */];
  const dataGalleryImages = [/* Array of image URLs for data gallery */];

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <Head>
        <title>Scal3ML - Collaborate and Build</title>
        <meta name="description" content="Scal3ML - Collaborate and Build" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>

      <header className="hero">
      <h1 className="hero-title-main" style={{ fontWeight: 'bold' }}>Collaborate and Build</h1>
      </header>

      <main>
        <section className="section">
          <h2 className="section-title">Buy Models</h2>
          <Slider {...carouselSettings}>
            {modelsGalleryImages.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Model ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="section">
          <h2 className="section-title">Buy Data</h2>
          <Slider {...carouselSettings}>
            {dataGalleryImages.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Data ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="section">
          <h2 className="section-title">Monetize Data</h2>
          <p className="section-description">
            Share your data with the data markets and monetize your data.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Monetize Models</h2>
          <img src="/path/to/monetize-models-picture.jpg" alt="Monetize Models" />
        </section>

        <iframe
          src="https://jupyterlite.github.io/demo/repl/index.html?kernel=python&toolbar=1"
          width="100%"
          height="500px"
        ></iframe>
      </main>

      <footer>
        <p>Powered by Scal3ML</p>
      </footer>
    </div>
  );
}
