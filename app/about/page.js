import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about Nayibe Arroyave." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>

        <section>
          <h2>Education</h2>
          <p>
            I am an international student currently studying at{" "}
            <a
              href="https://www.georgianatilac.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Georgian@Ilac
            </a>{" "}
            in the computer programming program. It is my last semester and I
            have learned a lot. This project you are currently viewing is for my
            JavaScript Frameworks.
          </p>

          <h2>Introduction</h2>
          <p>
            I am a passionate web developer My journey in web development began
            with a fascination for technology and a desire to create impactful
            projects.
          </p>
        </section>

        <section>
          <h2>Specialization</h2>
          <p>I enjoy working on both front-end and back-end development.</p>
        </section>

        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}
