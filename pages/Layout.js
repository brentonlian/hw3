// components/Layout.js

import React from 'react';
import styles from '../styles/layout.module.css'; // Import CSS module styles

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Header content */}
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
