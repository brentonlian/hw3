import React from 'react';
import Layout from '../components/Layout'; // Correct import path for Layout component
import styles from '../styles/layout.module.css'; // Correct import path for CSS module
import Link from 'next/link' //Links

const HomePage = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
  };

  return (
    <Layout> {/* Use the Layout component to wrap the page content */}
      <div className={styles.container}> {/* Use className to apply styles */}
        <h1 classname={styles['layout-h1']}>Welcome to my portfolio website!</h1>
        <h2>My name is Brenton Lian, and I am a first year CS student at UNC-Chapel Hill. Check out some of my projects below</h2>
        <div className={styles.grid}>
          <ul>
            <li>
              <Link href="/RedditSentimentAnalysis">
                RedditSentimentAnalysis
              </Link>
                <p>Sentiment analysis on the UNC Chapel Hill Reddit</p>
            </li>
            <li>
              <Link href="/CDC2023">
                CDC2023
              </Link>
                <p>SData analytsis for the 2023 CDC competition</p>
            </li>
            <li>
              <Link href="/RegexResearch">
                egexResearch
              </Link>
                <p>Regex research done over Summer 2022</p>
            </li>
          </ul>
        </div>
        <div className={styles.imgContainer}>
          <img src="https://m.media-amazon.com/images/I/71jAb9+mA4L._AC_SY300_SX300_.jpg" alt="Printer Image" />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
