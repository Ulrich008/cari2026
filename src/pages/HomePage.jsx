import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import WelcomeSection from '../components/WelcomeSection';
import SidebarLinks from '../components/SidebarLinks';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Grille principale avec gap réduit */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Colonne de gauche - Welcome Section */}
          <div className="lg:w-2/3">
            <WelcomeSection />
          </div>
          
          {/* Colonne de droite - Sidebar */}
          <div className="lg:w-1/3">
            <SidebarLinks />
          </div>
        </div>

        {/* Compte à rebours */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <Countdown />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;