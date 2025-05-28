import React from "react";
import styles from "./Outreach.module.css";

const Outreach = () => {
  return (
    <section className={styles.outreachSection} id="outreach">
      <div className={styles.container}>
        <h2 className={styles.title}>Inspiring Change: Leadership & Community Impact</h2>

        <p className={styles.intro}>
          Nanak Abrantee's commitment to youth empowerment goes beyond his artistic and literary work. As Founder and Executive President of{" "}
          <strong>Awesome Thinkers Network International (ATNI)</strong>, he champions the unleashing of potential in young people through mentorship,
          leadership training, and publication opportunities.
        </p>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Awesome Thinkers Network International (ATNI)</h3>
          <p>
            ATNI is a dynamic youth network dedicated to empowerment and publication, impacting over 5,000 youth through conferences and outreach projects.
            This initiative also secured the Second Runner-up award at the Ashesi Design Lab: Future Learning Hackathon 2020, demonstrating a strong focus on innovation and design thinking.
          </p>
          <p>
            While ATNI does not yet have a standalone online platform, this website serves as its primary digital hub, showcasing its mission, impact, and opportunities
            to get involved or support the cause.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Broader Leadership & Mentorship Roles</h3>
          <ul className={styles.rolesList}>
            <li>
              <strong>John C. Maxwell & Rob Hoskins’ Change Your World Programme:</strong> Esteemed member of this global leadership initiative,
              bringing world-class leadership principles to youth mentorship.
            </li>
            <li>
              <strong>Campus Ambassador, International Model United Nations (IMUN) 2021:</strong> Fostering international diplomacy and leadership skills.
            </li>
            <li>
              <strong>District Coordinator, National Hard Spell:</strong> Commitment to grassroots educational initiatives and youth capacity building.
            </li>
          </ul>
          <p>
            Nanak Abrantee's mentorship philosophy centers on hands-on growth, student leadership, and the fusion of global best practices with local impact,
            making him a dynamic and well-connected leader.
          </p>
        </div>

        <div className={styles.signature}>
          <p>
            Known both as <em>"Nana Kofi Anim"</em> (author persona) and <em>"Nanak Abrantee"</em> (spoken word and public persona), he seamlessly bridges artistic expression and community empowerment,
            encouraging everyone to <strong>keep being awesome!!!</strong>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Outreach;
