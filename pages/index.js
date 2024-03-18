// pages/index.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Hamburger from '../components/Hamburger'; // Import the Hamburger component

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      {/* Render the Hamburger component */}
      <Hamburger isOpen={isOpen} toggle={toggleMenu} />
      <div>
        <h1>Welcome to my portfolio website!</h1>
        <h2>My name is Brenton Lian, and I am a first year CS student at UNC-Chapel Hill. Check out some of my projects below</h2>
        <div className="container">
          <ul>
            <li><a href="/RedditSentimentAnalysis">RedditSentimentAnalysis</a></li>
            <p>Sentiment analysis on the UNC Chapel Hill Reddit</p>
            <li><a href="/CDC2023">CDC2023</a></li>
            <p>Data analysis for the 2023 CDC competition</p>
            <li><a href="/RegexResearch">RegexResearch</a></li>
            <p>Regex research done over Summer 2022</p>
          </ul>
        </div>
        <div className="img-container">
          <img src="https://m.media-amazon.com/images/I/71jAb9+mA4L._AC_SY300_SX300_.jpg" alt="Printer Image" />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
