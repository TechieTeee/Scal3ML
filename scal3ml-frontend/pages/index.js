import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Scal3ML - Scalable Machine Learning on Blockchain</title>
        <meta name="description" content="Scal3ML - Scalable Machine Learning on Blockchain" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>

      <header className="hero">
        <img src="/Scal3ML_Logo.png" alt="Scal3ML Logo" className="hero-logo" />
        <img src="/pexels-jopwell-2422282.jpg" alt="Scal3ML" className="hero-image" />
        <div className="banner-container">
          <div className="banner">
            <p className="banner-text">Revolutionizing the intersection of machine learning and blockchain</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <h2 className="section-title">Why Scal3ML?</h2>
          <p className="section-description">
            Scal3ML brings together the power of machine learning and blockchain technology,
            offering a scalable and decentralized platform for building, sharing, and monetizing
            machine learning models.
          </p>
          <button className="cta-button">Learn More</button>
        </section>

        <section className="section">
          <h2 className="section-title">Features</h2>
          <ul className="feature-list">
            <li>Efficient model storage on the blockchain</li>
            <li>Collaborative model training</li>
            <li>Model sale and profit distribution</li>
            <li>Secure and transparent transactions</li>
          </ul>
          <button className="cta-button">Explore Features</button>
        </section>

        <section className="section">
          <h2 className="section-title">Use Cases</h2>
          <p className="section-description">
            Scal3ML can be used in various industries including finance, healthcare, e-commerce,
            and more. It enables organizations to leverage the power of machine learning while
            ensuring data privacy, security, and fairness.
          </p>
          <button className="cta-button">Discover Use Cases</button>
        </section>

        <section className="section">
          <h2 className="section-title">Benefits</h2>
          <ul className="benefits-list">
            <li>Scalability</li>
            <li>Decentralization</li>
            <li>Transparency</li>
            <li>Monetization opportunities</li>
          </ul>
          <button className="cta-button">Explore Benefits</button>
        </section>
      </main>

      <footer>
        <p>
          Powered by Scal3ML
        </p>
      </footer>
    </div>
  )
}
