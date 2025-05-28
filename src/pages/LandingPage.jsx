import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import styles from './LandingPage.module.css';

const cards = [
  { title: 'Books', path: '/Books', description: 'Explore Nanak Abrante’s book collection.' },
  { title: 'Food', path: '/Food', description: 'Discover culinary content and food initiatives.' },
  { title: 'Outreach', path: '/Outreach', description: 'View community outreach programs.' },
  { title: 'ATNI', path: '/Outreach/ATNI', description: 'Learn about the ATNI program.' },
];

const LandingPage = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.hero} />
      <main className={styles.container}>
        <div className={styles.cardGrid}>
          {cards.map((card, index) => (
            <Link to={card.path} key={index} className={styles.cardLink}>
              <div
                className={`${styles.card} ${styles.hidden}`}
                ref={el => (cardRefs.current[index] = el)}
              >
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
