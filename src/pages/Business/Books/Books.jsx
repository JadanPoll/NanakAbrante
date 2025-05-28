// Books.jsx
import React from "react";
import styles from "./Books.module.css";

const books = [
  {
    title: "In Your Hands",
    cover: "/images/in-your-hands.jpg",
    synopsis:
      "A journey of self-discovery and empowerment, inspiring readers to take charge of their destiny.",
    themes: ["Self-discovery", "Empowerment", "Action"],
    buyLink: "https://www.amazon.com/dp/B08BYKTPNN",
  },
  {
    title: "The Thriving Ladder",
    cover: "/images/the-thriving-ladder.jpg",
    synopsis:
      "A guide to climbing the metaphorical ladder of success with perseverance and grace.",
    themes: ["Success", "Perseverance", "Growth"],
    buyLink: "#",
  },
  {
    title: "The Deep",
    cover: "/images/the-deep.jpg",
    synopsis:
      "Exploring the depths of human emotion and experience through poetic reflections.",
    themes: ["Emotion", "Reflection", "Poetry"],
    buyLink: "#",
  },
  {
    title: "Growth Is Not Automatic",
    cover: "/images/growth-is-not-automatic.jpg",
    synopsis:
      "An honest look at personal growth, highlighting challenges and the power of persistence.",
    themes: ["Growth", "Challenges", "Persistence"],
    buyLink: "#",
  },
  {
    title: "The A Effect (Forthcoming)",
    cover: "/images/the-a-effect.jpg",
    synopsis:
      "Anticipated to be a transformative work about creating meaningful impact in communities.",
    themes: ["Impact", "Community", "Transformation"],
    buyLink: "#",
  },
];

const Books = () => {
  return (
    <section className={styles.booksSection}>
      <h1 className={styles.pageTitle}>Literary Works</h1>
      <p className={styles.intro}>
        Discover Nanak Abrantee’s literary journey — from self-discovery to inspiring action.
      </p>
      <div className={styles.booksGrid}>
        {books.map(({ title, cover, synopsis, themes, buyLink }) => (
          <article key={title} className={styles.bookCard}>
            <img src={cover} alt={`Cover of ${title}`} className={styles.bookCover} />
            <div className={styles.bookDetails}>
              <h2 className={styles.bookTitle}>{title}</h2>
              <p className={styles.synopsis}>{synopsis}</p>
              <ul className={styles.themes}>
                {themes.map((theme) => (
                  <li key={theme} className={styles.theme}>
                    {theme}
                  </li>
                ))}
              </ul>
              {buyLink && buyLink !== "#" ? (
                <a
                  href={buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyButton}
                >
                  Buy Now
                </a>
              ) : (
                <span className={styles.comingSoon}>Coming Soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Books;
