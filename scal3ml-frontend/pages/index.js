import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Scal3ML - Scalable Machine Learning on Blockchain</title>
        <meta
          name="description"
          content="Scal3ML - Scalable Machine Learning on Blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>

      <header className="hero">
        <img src="/Scal3ML_Logo.png" alt="Scal3ML Logo" className="hero-logo" />
        <img
          src="/pexels-jopwell-2422282.jpg"
          alt="Scal3ML"
          className="hero-image"
        />
        <div className="banner-container">
          <div className="banner">
            <p className="banner-text">
              Revolutionizing the intersection of machine learning and
              blockchain
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <h2 className="section-title">Why Scal3ML?</h2>
          <p className="section-description">
            The global big data analytics market is currently estimated to be
            more than $300 billion, according to Fortune Business Insights and
            MarketsandMarkets. This exponential expansion illustrates the
            critical importance of innovative solutions that prioritize data
            security and privacy. Scal3ML is an innovative platform that merges
            the capabilities of machine learning with the security and privacy
            features inherent in blockchain technology. In a landscape where
            data integrity is paramount, novel ML approaches are essential.
            Scal3ML provides a scalable and decentralized platform that ensures
            data integrity and confidentiality, empowering machine learning
            practitioners, data professionals, and developers to collaborate
            securely and transparently. By leveraging blockchain data models and
            integrating with blockchain technology, Scal3ML facilitates
            groundbreaking advancements in data security and privacy. It enables
            collaborative innovation and monetization opportunities for all
            stakeholders, propelling the field of machine learning into new
            frontiers.
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
          <img
            src="/Doctor_Child_Photo.jpg"
            alt="Doctor and Child"
            className="section-image"
          />
          <h2 className="section-title">Use Cases</h2>
          <p className="section-description">
            Scal3ML is a versatile solution with applications across diverse
            industries such as finance, healthcare, e-commerce, and beyond. By
            harnessing the power of machine learning, Scal3ML empowers
            organizations to drive innovation and efficiency while upholding
            critical principles of data privacy, security, and fairness. In the
            finance sector, Scal3ML facilitates collaborative data analysis and
            model development, enabling financial institutions to make informed
            decisions while safeguarding sensitive financial information.
            Healthcare organizations leverage Scal3ML to unlock insights from
            vast datasets, driving advancements in patient care and medical
            research, all while ensuring patient privacy and regulatory
            compliance. For e-commerce companies, Scal3ML offers predictive
            analytics capabilities to enhance customer experiences and optimize
            business operations, all while maintaining data security and
            transparency. Furthermore, Scal3ML's decentralized platform fosters
            collaboration among stakeholders, promoting a culture of innovation
            and knowledge-sharing across industries. By prioritizing security
            and transparency, Scal3ML not only enhances operational efficiency
            and profitability but also fosters trust and accountability within
            organizations. Through its innovative approach, Scal3ML paves the
            way for transformative advancements in data-driven decision-making,
            driving positive impacts across industries and shaping a more secure
            and transparent future.
          </p>
          <button className="cta-button">Discover Use Cases</button>
        </section>

<section class="section">
  <h2 class="section-title">Benefits</h2>
  <ul class="benefits-list">
    <li>Scalability</li>
    <li>Decentralization</li>
    <li>Transparency</li>
    <li>Monetization opportunities</li>
    <li class="spacer"> x </li>
  </ul>
  <Link href="/Scal3mlMain" passHref>
      <button className="cta-button">Try It Out!</button>
    </Link>
</section>

      </main>

      <footer>
        <p>Powered by Scal3ML</p>
      </footer>
    </div>
  );
}
