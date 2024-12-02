"use client"; 
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [earnings, setEarnings] = useState([]);
  const [cocktail, setCocktail] = useState(null);
  const [trivia, setTrivia] = useState(null);

  useEffect(() => {
    // API de Earnings Calendar
    const fetchEarnings = async () => {
      const symbol = "MSFT";
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/earningscalendar?ticker=${symbol}`,
          {
            headers: {
              "X-Api-Key": "vlspXkSGhp0yrEn4Grld/g==92TXWX9jaRlobGtr",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setEarnings(data);
      } catch (error) {
        console.error("Error fetching earnings:", error);
      }
    };

    // API de Cocteles
    const fetchCocktail = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      const data = await response.json();
      setCocktail(data.drinks[0]);
    };

    // API de Trivia
    const fetchTrivia = async () => {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/trivia?category=music`,
        {
          headers: { "X-Api-Key": "vlspXkSGhp0yrEn4Grld/g==92TXWX9jaRlobGtr" },
        }
      );
      const data = await response.json();
      setTrivia(data[0]);
    };

    fetchEarnings();
    fetchCocktail();
    fetchTrivia();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Explore my projects and applications."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Portfolio</h1>
        <p className={styles.description}>Here are some of my projects:</p>

        <div className={styles.projects}>
          <div className={styles.projectBox}>
            <h2>Project 1: Earnings Calendar</h2>
            {earnings.length > 0 ? (
              <div>
                <h3>{earnings[0].symbol}</h3>
                <p>Earnings Date: {earnings[0].date}</p>
              </div>
            ) : (
              <p>No earnings data available.</p>
            )}
            <a
              href="https://example.com/earnings-calendar"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          <div className={styles.projectBox}>
            <h2>Project 2: Cocktail</h2>
            {cocktail && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  style={{ maxWidth: "150px", marginRight: "20px" }}
                />
                <div>
                  <h3>{cocktail.strDrink}</h3>
                  <p>{cocktail.strInstructions}</p>
                </div>
              </div>
            )}
          </div>

          <div className={styles.projectBox}>
            <h2>Project 3: Trivia</h2>
            {trivia && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 style={{ margin: 20 }}>Question: {trivia.question}</h3>
                <p style={{ margin: 20 }}>Answer: {trivia.answer}</p>
              </div>
            )}
          </div>
          <p>
            Visit the{" "}
            <a
              href="https://api-ninjas.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              api-ninjas.com
            </a>{" "}
            page to get your api key and start creating your projects
          </p>
        </div>

        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}
