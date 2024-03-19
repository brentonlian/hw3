// pages/CDC2023.js

import React from 'react';
import Layout from '../components/Layout'; // Correct import path for Layout component
import styles from '../styles/layout.module.css'; // Correct import path for CSS module
import Link from 'next/link'; // Import Link from Next.js

const CDC2023Page = () => {
  return (
    <Layout>
      <div>
        <h1>CDC 2023</h1>
        <h2>Data analysis done with my teammates on the CDC 2023 competition</h2>
        <div className={styles.container2}>
          <Link href="https://github.com/brentonlian/CDC2023_Business">Github link</Link>
        </div>
        <div className={styles.container2}>
          <Link href="/">Home</Link> {/* Use Link for Next.js routing */}
        </div>
        <div className={styles.imgContainer}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/MotsFinissantEnABDet.jpg" alt="Regular Expression" height="300" width="500" />
        </div>
      </div>
    </Layout>
  );
};

export default CDC2023Page;
