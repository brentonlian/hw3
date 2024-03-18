// pages/RegexResearch.js

import React from 'react';
import Layout from '../components/Layout'; // Correct import path for Layout component
import styles from '../styles/layout.module.css'; // Correct import path for CSS module
import Link from 'next/link' //Links

const RegexResearchPage = () => {
  const toggleMenu = () => {
    // Implement your toggleMenu function logic here
  };

  return (
    <html>
      <head>
        <title>Regex Research</title>
        <link rel="stylesheet" href="/styles.css" /> {/* Update path for CSS file */}
        <script src="/main.js" /> {/* Update path for JavaScript file */}
      </head>
      <body>
        <header>
          <nav>
            <div className="menu-toggle" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className="menu">
              <li><a href="/">Home</a></li> {/* Update path for Next.js routing */}
              <li><a href="/RedditSentimentAnalysis">RedditSentimentAnalysis</a></li>
              <li><a href="/CDC2023">CDC2023</a></li>
              <li><a href="/RegexResearch">RegexResearch</a></li>
            </ul>
          </nav>
        </header>
        <h1>Regex Research</h1>
        <h2>Research done on ReDOS vulnerability for the summer 2022 CSIRE program</h2>
        <div className="container2">
          <a href="https://github.com/brentonlian/RegexResearch">Github link</a>
        </div>
        <div className="container2">
          <a href="/">Home</a>
        </div>
        <div className="img-container">
          <img src="https://live.staticflickr.com/3851/14762982307_f1c5819f00_z.jpg" alt="Data Analysis" />
        </div>
      </body>
    </html>
  );
};

export default RegexResearchPage;
