import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Read the latest articles on technology."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blogs from medium.com</h1>

        <div className={styles.projectBox}>
          <section>
            <h2>
              <Link
                href="https://medium.com/@kasata/the-rise-of-artificial-intelligence-transforming-the-future-eb4b75eb47e8"
                target="_blank"
              >
                <p>1. The Rise of Artificial Intelligence</p>
              </Link>
            </h2>
            <p>
              Artificial Intelligence (AI) is transforming industries and
              changing the way we interact with technology. From self-driving
              cars to virtual assistants, AI is paving the way for a smarter
              future.
            </p>
            <p>
              In this article, we explore the various applications of AI, its
              impact on the job market, and the ethical considerations that come
              with its rapid advancement.
            </p>
          </section>
        </div>
        <div className={styles.projectBox}>
          <section>
            <h2>
              <Link
                href="https://medium.com/coinmonks/understanding-blockchain-technology-a-comprehensive-guide-b4bd4ef3082d"
                target="_blank"
              >
                {" "}
                2. Understanding Blockchain Technology
              </Link>
            </h2>
            <p>
              Blockchain technology is revolutionizing the way we think about
              data security and transparency. It allows for decentralized
              record-keeping, making it nearly impossible to alter data without
              detection.
            </p>
            <p>
              This article delves into the fundamentals of blockchain, its uses
              in various sectors, and how it can potentially disrupt traditional
              business models.
            </p>
          </section>
        </div>
        <div className={styles.projectBox}>
          <section>
            <h2>
              <Link
                href="https://medium.com/@mysteryweevil/web-components-the-future-of-web-development-is-here-c990d1b76bfc"
                target="_blank"
              >
                {" "}
                3. The Future of Web Development
              </Link>
            </h2>
            <p>
              Web development is an ever-evolving field, with new technologies
              and frameworks emerging regularly. Understanding the trends
              shaping the future of web development is crucial for developers to
              stay relevant.
            </p>
          </section>
        </div>
        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}
