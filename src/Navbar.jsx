import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const navItems = [
  { name: 'Books', path: '/Books' },
  { name: 'Food', path: '/Food' },
  { name: 'Outreach', path: '/Outreach' },
  { name: 'ATNI', path: '/Outreach/ATNI' },
];

const Navbar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const listRef = useRef([]);

  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    const currentEl = listRef.current[currentIndex];
    if (currentEl) {
      const link = currentEl.querySelector('a');
      setIndicatorStyle({
        left: link.offsetLeft,
        width: link.offsetWidth,
      });
    }
  }, [location.pathname]);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map(({ name, path }, index) => (
          <li
            key={name}
            ref={el => listRef.current[index] = el}
            className={location.pathname === path ? styles.active : ""}
          >
            <Link to={path} className={styles.navLink}>
              {name}
            </Link>
          </li>
        ))}
        <span className={styles['active-indicator']} style={indicatorStyle} />
      </ul>
    </nav>
  );
};

export default Navbar;
