// components/Layout.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/layout.module.css'; // Import CSS module styles

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          {/* Render the Hamburger component */}
          <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            {/* Update links for Next.js routing */}
            <li><Link href="/">Home</Link></li>
            <li><Link href="/RedditSentimentAnalysis">RedditSentimentAnalysis</Link></li>
            <li><Link href="/CDC2023">CDC2023</Link></li>
            <li><Link href="/RegexResearch">RegexResearch</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;
