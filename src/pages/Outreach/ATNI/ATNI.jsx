import React from 'react';
import styles from './ATNI.module.css';

const ATNI = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Awesome Thinkers Network International (ATNI)</h1>
        <p className={styles.tagline}>
          Empowering Youth | Unleashing Potential | Inspiring Innovation
        </p>
      </header>

      <article className={styles.content}>
        <section className={styles.missionSection}>
          <h2>Our Mission</h2>
          <p>
            ATNI is dedicated to youth empowerment and the unleashing of great potentials.
            Founded by Nanak Abrantee, our network inspires, mentors, and provides tangible
            avenues for young people to amplify their voices through publication and outreach.
          </p>
        </section>

        <section className={styles.visionSection}>
          <h2>Our Vision</h2>
          <p>
            We envision a world where every young person has the opportunity, support, and platform
            to turn their ideas and passions into impactful realities that benefit communities globally.
          </p>
        </section>

        <section className={styles.initiativesSection}>
          <h2>Key Initiatives & Impact</h2>
          <ul>
            <li>Organized conferences and outreach projects reaching over 5,000 youth worldwide.</li>
            <li>Fostering leadership and innovation through mentorship programs.</li>
            <li>Empowering youth voices via publications and creative projects.</li>
            <li>Awarded Second Runner-up at the Ashesi Design Lab: Future Learning Hackathon, 2020.</li>
          </ul>
        </section>

        <section className={styles.impactStoriesSection}>
          <h2>Impact Stories</h2>
          <blockquote>
            “ATNI gave me the tools and confidence to present my ideas and connect with like-minded
            youth who are passionate about change.” – Former Participant
          </blockquote>
          <blockquote>
            “Through ATNI’s mentorship and platform, I published my first article and discovered my
            voice in advocacy.” – Young Leader
          </blockquote>
        </section>

        <section className={styles.getInvolvedSection}>
          <h2>Get Involved</h2>
          <p>
            Interested in supporting ATNI or joining our youth network? Here are some ways to engage:
          </p>
          <ul>
            <li>Participate in upcoming conferences and workshops.</li>
            <li>Volunteer as a mentor or organizer.</li>
            <li>Collaborate on youth publications and creative projects.</li>
            <li>Donate to support outreach initiatives and platform development.</li>
          </ul>
          <p>
            Since ATNI currently does not have a dedicated online platform, you can reach out via Nanak Abrantee’s
            personal website for more information and collaboration opportunities.
          </p>
          <a 
            href="http://nanakabrantee.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaButton}
          >
            Visit Nanak Abrantee’s Website
          </a>
        </section>
      </article>
    </section>
  );
};

export default ATNI;
