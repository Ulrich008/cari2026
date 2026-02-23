import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Ambassade de France au Bénin',
      logo: '/assets/ambassade.png',
      url: 'https://bj.ambafrance.org/'
    },
    {
      name: 'Sèmè City',
      logo: '/assets/seme.png',
      url: 'https://semecity.bj/'
    },
    {
      name: 'Huawei',
      logo: '/assets/huawei.png',
      url: 'https://www.huawei.com/'
    }
  ];

  return (
    <>
      <Header />
      <Navigation />
      
      {/* Modification : remplacement de py-16 par pt-16 pb-8 pour réduire l'espace en bas */}
      <div className="min-h-screen bg-gray-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-20 uppercase">
            SPONSORS
          </h1>

          {/* Grille des logos - 3 sponsors en ligne */}
          {/* Correction : valeur manquante pour lg:gap- (remplacée par lg:gap-16) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-16 items-center">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full h-auto max-h-48 object-contain"
                  onError={(e) => {
                    // Placeholder si l'image ne charge pas
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23f3f4f6' width='300' height='200'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='16' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${sponsor.name}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>    
      <Footer />
    </>
  );
};

export default Sponsors;