import Head from 'next/head';

export default function Scal3MLMain() {
  // Sample data for gallery images
  const modelsGalleryImages = [
    "/pexels-cottonbro-3201587.jpg",
    "/pexels-divinetechygirl-1181359.jpg",
    "/pexels-olia-danilevich-4974914.jpg",
    "/pexels-divinetechygirl-1181467.jpg",
    "/pexels-thisisengineering-3861961.jpg",
    "/pexels-yankrukov-8197497.jpg",
  ];

  const dataGalleryImages = [
    "/pexels-pixabay-210607.jpg",
    "/pexels-kowalievska-1170979.jpg",
    "/pexels-pixabay-459728.jpg"
  ];

  return (
    <div className="container">
      <Head>
      <img src="/Scal3ML_Logo.png" alt="Scal3ML Logo" className="hero-logo-2" />
        <title>Scal3ML - Collaborate and Build</title>
        <meta name="description" content="Scal3ML - Collaborate and Build" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/global.css" />
        <style>{`
          .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
          }

          .image-grid img {
            width: 100%;
            height: auto;
          }
          
          .section {
            margin-bottom: 40px;
          }

          .share-button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .share-button:hover {
            background-color: #45a049;
          }
        `}</style>
      </Head>

      <header className="hero">
        <h1 className="hero-title-main" style={{ fontWeight: "bold" }}>
          Collaborate and Build
        </h1>
      </header>

      <main>
        <section className="section">
          <h2 className="section-title">Buy Models</h2>
          <div className="image-grid">
            {modelsGalleryImages.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Model ${index + 1}`} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Buy Data</h2>
          <div className="image-grid">
            {dataGalleryImages.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Data ${index + 1}`} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Monetize Data</h2>
          <p className="section-description">
            Share your data with the data markets and monetize your data.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Monetize Models</h2>
          <img
            src="/pexels-thisisengineering-3862126.jpg"
            alt="Monetize Models"
            className="monetize-models-image"
          />
        </section>

        <div className="iframe-container">
          <iframe
            src="https://jupyterlite.github.io/demo/repl/index.html?kernel=python&toolbar=1"
            width="100%"
            height="500px"
          ></iframe>
        </div>

        <section className="section">
          <button className="share-button">Share to IPFS</button>
        </section>
      </main>

      <footer>
        <p>Powered by Scal3ML</p>
      </footer>
    </div>
  );
}
