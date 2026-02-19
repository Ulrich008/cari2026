import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const UnderConstruction = () => {
  return (
    <>
      <Header />
      <Navigation />
      
      {/* Section principale Under Construction - Fond gris comme dans l'image */}

          {/* Container principal avec fond blanc */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
            
            {/* Logo/Image de construction */}
            <div className="mb-8">
              <img
                src="/assets/under.png"
                alt="Website Under Construction"
                className="w-full max-w-full mx-auto"
                style={{ maxHeight: '500px', objectFit: 'contain' }}
              />
            </div>

            {/* Message optionnel en bas */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm md:text-base">
                We're working hard to bring you an amazing experience. Stay tuned!
              </p>
            </div>
          </div>
    

      <Footer />
    </>
  );
};

export default UnderConstruction;