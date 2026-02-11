import React from 'react';
import Navigation from './Navigation';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-8 py-6 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <Navigation />
        <div className="text-center text-gray-600 mt-4 text-sm">
          <p>© 2026 CARI Conference. All rights reserved.</p>
          <p className="mt-2">University of Abomey-Calavi, Cotonou, Benin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;