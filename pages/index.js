import React from 'react';
import Layout from '../components/Layout'; // Correct import path for Layout component
import styles from '../styles/layout.module.css'; // Correct import path for CSS module

const IndexPage = () => {
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
            <li><a href="/RedditSentimentAnalysis">RedditSentimentAnalysis</a></li>
            <p>Sentiment analysis on the UNC Chapel Hill Reddit</p>
            <li><a href="/CDC2023">CDC2023</a></li>
            <p>Data analysis for the 2023 CDC competition</p>
            <li><a href="/RegexResearch">RegexResearch</a></li>
            <p>Regex research done over Summer 2022</p>
          </ul>
        </div>
        <div className={styles.imgContainer}>
          <img src="https://m.media-amazon.com/images/I/71jAb9+mA4L._AC_SY300_SX300_.jpg" alt="Printer Image" />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
