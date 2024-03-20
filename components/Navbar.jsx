import React, { useState } from 'react';
import Link from 'next/link';
import NavItem from './NavItem'; // Assuming you have a NavItem component

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'CDC2023', href: '/CDC2023' },
  { text: 'Reddit Sentiment Analysis', href: '/RedditSentimentAnalysis' },
  { text: 'Regex Research', href: '/RegexResearch' },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
     
    </header>
  );
};

export default Navbar;
