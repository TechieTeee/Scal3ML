import Head from 'next/head';


export default function Scal3MLMain() {
  return (
    <div className="container">
      <Head>
        <title>Scal3ML - Collaborate and Build</title>
        <meta
          name="description"
          content="Scal3ML - Collaborate and Build"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>

      <header className="hero">
        <h1 className="hero-title">Collaborate and Build</h1>
      </header>

      <main>
        <iframe
          src="https://colab.research.google.com/drive/1KGjSuomO9SfuS3TXk-4yESo2_AyeOQi3?usp=sharing"
          width="800"
          height="600"
          frameborder="0"
          allowfullscreen="true"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </main>

      <footer>
        <p>Powered by Scal3ML</p>
      </footer>
    </div>
  );
}
