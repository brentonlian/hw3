// pages/RedditSentimentAnalysis.js

import React from 'react';
import Layout from '../components/Layout'; // Correct import path for Layout component
import styles from '../styles/layout.module.css'; // Correct import path for CSS module

const RedditSentimentAnalysisPage = () => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RedditSentimentAnalysis</title>
        <link rel="stylesheet" href="/styles.css" /> {/* Update path for CSS file */}
        <script src="/main.js" /> {/* Update path for JavaScript file */}
      </head>
      <body>
        <header>
          <nav>
            {/* Your navigation menu */}
          </nav>
        </header>
        <h1>Reddit Sentiment Analysis</h1>
        <p>Sentiment analysis on the UNC Chapel Hill Reddit</p>
        <div className="container2">
          <a href="/"> Home</a> {/* Update path for Next.js routing */}
        </div>
        {/* Additional content */}
        <time datetime="2016-10-25" suppressHydrationWarning />
      </body>
    </html>
  );
};

export default RedditSentimentAnalysisPage;
