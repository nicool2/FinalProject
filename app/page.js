import Head from 'next/head';
import styles from '../app/styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nayibe Arroyave's Portfolio</title>
        <meta name="keywords" content="Next.js, Portfolio, Nayibe Arroyave, Web Development" />
        <meta name="description" content="Welcome to Nayibe Arroyave's professional portfolio showcasing projects and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* i did not find any google fonts that i like it*/}
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Final Project for JavaScript Frameworks!</h1>
        <h2>fourth semester</h2>
        <p className={styles.description}>
          Teacher : Rajesh Bandi
        </p>
        
      </main>
    </div>
  );
}