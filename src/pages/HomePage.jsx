import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HeroBanner from '../components/HeroBanner';
import WelcomeSection from '../components/WelcomeSection';
import SidebarLinks from '../components/SidebarLinks';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <WelcomeSection />
          </div>
          <div className="lg:w-1/3">
            <SidebarLinks />
            
          </div>
        </div>
<div className="mt-8">
              <Countdown />
            </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;