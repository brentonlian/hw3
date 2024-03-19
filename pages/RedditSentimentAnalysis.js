import React from 'react';
import Layout from '../components/Layout'; // Correct import path for Layout component
import styles from '../styles/layout.module.css'; // Correct import path for CSS module
import Link from 'next/link' //Links

const RedditSentimentAnalysisPage = () => {
  return (
    <Layout>
      <div>
        <h1>Reddit Sentiment Analysis</h1>
        <p>Sentiment analysis on the UNC Chapel Hill Reddit</p>
        <div className="container2">
          <Link href="/"> Home</Link> {/* Update path for Next.js routing */}
        </div>
        {/* Additional content */}
        <time dateTime="2016-10-25" suppressHydrationWarning />
        <div className="img-container">
          <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/4/4d/UNC_Chapel_Hill_seal.svg/1200px-UNC_Chapel_Hill_seal.svg.png" alt="UNC" width="300" height="300" />
        </div>
      </div>
    </Layout>
  );
};

export default RedditSentimentAnalysisPage;
