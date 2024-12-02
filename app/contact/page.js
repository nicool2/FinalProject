import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Get in touch with Nayibe Arroyave." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.description}>Feel free to reach out to me via email at <a href="mailto:NayibeNicoolAndrea.ArroyaveBautista@MyGeorgian.ca">NayibeNicoolAndrea.ArroyaveBautista@MyGeorgian.ca</a>.</p>
        
        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}

