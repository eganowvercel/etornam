'use client';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Donate from './components/Donate';
import Footer from './components/Footer';
import About from './components/About';
import Campaign from './components/Campaign';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Page() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Donate />
      <Campaign />
      <Footer />
    </div>
  );
}

export default Page;
