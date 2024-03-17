// pages/index.js

import React from 'react';

const IndexPage = () => {
  const toggleMenu = () => {
    // Implement your toggleMenu function logic here
  };

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Brenton Lian's Portfolio</title>
        <link rel="stylesheet" href="/styles.css" /> {/* Update path for CSS file */}
        {/* Include any necessary scripts */}
        <script src="/main.js" />
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
              {/* Update links for Next.js routing */}
              <li><a href="/">Home</a></li>
              <li><a href="/RedditSentimentAnalysis">RedditSentimentAnalysis</a></li>
              <li><a href="/CDC2023">CDC2023</a></li>
              <li><a href="/RegexResearch">RegexResearch</a></li>
            </ul>
          </nav>
        </header>
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
      </body>
    </html>
  );
};

export default IndexPage;
