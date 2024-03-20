import React from 'react';
import Layout from '../components/Layout'; // Correct import path for Layout component
import styles from '../styles/layout.module.css'; // Correct import path for CSS module
import Link from 'next/link' //Links
import Navbar from '../components/Navbar';

const Home = () => {
  

  return (
    <div>
      <Navbar />
      <Layout> {/* Use the Layout component to wrap the page content */}
        <div className={styles.container}> {/* Use className to apply styles */}
          <h1 className={styles['layout-h1']}>Welcome to my portfolio website!</h1>
          <h2>My name is Brenton Lian, and I am a first year CS student at UNC-Chapel Hill. Check out some of my projects below</h2>
         
          <div className={styles.imgContainer}>
            <img src="https://m.media-amazon.com/images/I/71jAb9+mA4L._AC_SY300_SX300_.jpg" alt="Printer Image" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
