import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaLinkedin, FaGithub, FaTwitch, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">HON. ETORNAM JAMES FLOLU</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" className="text-2xl"><FaFacebook /></a>
          <a href="https://instagram.com" className="text-2xl"><FaInstagram /></a>
          <a href="https://twitter.com" className="text-2xl"><FaTwitter /></a>
          <a href="https://tiktok.com" className="text-2xl"><FaTiktok /></a>
          <a href="https://linkedin.com" className="text-2xl"><FaWhatsapp /></a>
        </div>
        <p>DMB 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
