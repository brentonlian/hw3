// pages/RegexResearch.js

import React from 'react';
import Layout from '../components/Layout'; // Correct import path for Layout component
import styles from '../styles/layout.module.css'; // Correct import path for CSS module
import Link from 'next/link'; // Import Link from Next.js

const RegexResearchPage = () => {
  const toggleMenu = () => {
    // Implement your toggleMenu function logic here
  };

  return (
    <Layout>
      
      <h1>Regex Research</h1>
      <h2>Research done on ReDOS vulnerability for the summer 2022 CSIRE program</h2>
      <div className={styles.container2}>
        <Link href="https://github.com/brentonlian/RegexResearch">Github link</Link>
      </div>
      <div className={styles.container2}>
        <Link href="/">Home</Link> {/* Use Link for Next.js routing */}
      </div>
      <div className={styles.imgContainer}>
        <img src="https://live.staticflickr.com/3851/14762982307_f1c5819f00_z.jpg" alt="Data Analysis" />
      </div>
    </Layout>
  );
};

export default RegexResearchPage;
