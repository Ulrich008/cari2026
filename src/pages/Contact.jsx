import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <Navigation />
      
      {/* Bannière verte avec titre CONTACT et forme ondulée */}
      <div className="relative bg-green-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
            CONTACT
          </h1>
        </div>
        
        {/* Forme ondulée en bas - plus prononcée */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg 
            className="relative block w-full h-16 md:h-20 lg:h-24" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z" 
              fill="#f3f4f6"
              className="fill-gray-100"
            />
          </svg>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section 1 : ABOMEY-CALAVI */}
          <div className="flex items-start gap-6">
            {/* Icône de localisation */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>
            
            {/* Contenu */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 uppercase">
                ABOMEY-CALAVI, COTONOU, BENIN
              </h2>
              <div className="space-y-2 text-gray-900">
                <p className="text-lg">
                  <a 
                    href="https://maps.app.goo.gl/FkiWhJr5vkuVxRrF8?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-700 transition-colors"
                  >
                    IITA Abomey-calavi
                  </a>
                  , <a 
                    href="https://maps.app.goo.gl/qAV6UWCspGMaihRp7?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-700 transition-colors"
                  >
                    Sofitel Cotonou Marina Hotel & Spa
                  </a>
                </p>
                <p className="text-lg">
                  Tél : <a href="tel:+2290163705153" className="hover:text-green-700 transition-colors">+(229) 0163705153</a>
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 : ANY QUESTIONS ? */}
          <div className="flex items-start gap-6">
            {/* Icône de question */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
                </svg>
              </div>
            </div>
            
            {/* Contenu */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 uppercase">
                ANY QUESTIONS ?
              </h2>
              <p className="text-lg text-gray-900">
                Send us an e-mail at{' '}
                <a 
                  href="mailto:caribj2026@gmail.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  caribj2026@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Section 3 : STAY INFORMED ? */}
          <div className="flex items-start gap-6">
            {/* Icône d'email */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
            </div>
            
            {/* Contenu */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 uppercase">
                STAY INFORMED ?
              </h2>
              <p className="text-lg text-gray-900">
                Click here to suscribe to our mailinglist.{' '}
                <a 
                  href="mailto:caribj2026@gmail.com?subject=Subscribe%20to%20mailing%20list"
                  className="text-blue-600 hover:text-blue-800"
                >
                  ✉️
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;