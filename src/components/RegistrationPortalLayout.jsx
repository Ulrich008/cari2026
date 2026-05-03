// src/components/RegistrationPortalLayout.jsx
import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import RegistrationPortalNav from './RegistrationPortalNav';

const RegistrationPortalLayout = ({ children, title }) => {
  return (
    <>
      <Header />
      <Navigation />
      
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Titre dynamique */}
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 text-center uppercase">
            {title}
          </h1>

          {/* Barre de navigation du portail */}
          <RegistrationPortalNav />

          {/* Contenu de la page */}
          {children}
          
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default RegistrationPortalLayout;