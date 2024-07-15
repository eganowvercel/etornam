'use client';
import React, { Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Donate from './components/Donate';
import Footer from './components/Footer';
import About from './components/About';
import Campaign from './components/Campaign';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster, toast } from 'sonner';

function Page() {
  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  return (
    <div>
      <Toaster richColors position="top-left" />
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Hero />
      <About />
      <Donate />
      <Campaign />
      <Footer />
    </div>
  );
}

export default Page;
