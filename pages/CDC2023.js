// pages/CDC2023.js

import React from 'react';

const CDC2023Page = () => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CDC2023</title>
        <link rel="stylesheet" href="/styles.css" /> {/* Update path for CSS file */}
        <script src="/main.js" /> {/* Update path for JavaScript file */}
      </head>
      <body>
        <header>
          <nav>
            {/* Your navigation menu */}
          </nav>
        </header>
        <h1>CDC 2023</h1>
        <h2>Data analysis done with my teammates on the CDC 2023 competition</h2>
        <div className="container2">
          <a href="https://github.com/brentonlian/CDC2023_Business">Github link</a>
        </div>
        <div className="container2">
          <a href="/">Home</a> {/* Update path for Next.js routing */}
        </div>
        <div className="img-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/MotsFinissantEnABDet.jpg" alt="Regular Expression" height="300" width="500" />
        </div>
      </body>
    </html>
  );
};

export default CDC2023Page;
