import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Sponsors = () => {
  const partners = [
    {
      name: "Université d'Abomey-Calavi",
      logo: '/assets/logo2.png',
      url: 'https://www.uac.bj/'
    },
    {
      name: 'IFRI',
      logo: '/assets/ifri.png',
      url: 'https://www.ifri.uac.bj/'
    },
    {
      name: 'IMSP',
      logo: '/assets/imsp.png',
      url: 'https://imsp-uac.org/'
    },
    {
      name: 'ASDS',
      logo: '/assets/logo3.png',
      url: 'https://asds.africa/'
    },
    {
      name: 'INRIA',
      logo: '/assets/inria.png',
      url: 'https://www.inria.fr/'
    },
    {
      name: 'CIRAD',
      logo: '/assets/cirad.png',
      url: 'https://www.cirad.fr/'
    },
    {
      name: 'IRD',
      logo: '/assets/ird.png',
      url: 'https://www.ird.fr/'
    }
  ];

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

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* SECTION PARTENAIRES */}
          <h1  className="text-3xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
            PARTNER INSTITUTIONS
          </h1>

          {/* Première ligne : 4 logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
            {partners.slice(0, 4).map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto max-h-32 object-contain"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100'%3E%3Crect fill='%23e2e8f0' width='200' height='100'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${partner.name}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </a>
            ))}
          </div>

          {/* Deuxième ligne : 3 logos centrés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto mb-20">
            {partners.slice(4).map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto max-h-32 object-contain"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100'%3E%3Crect fill='%23e2e8f0' width='200' height='100'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${partner.name}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </a>
            ))}
          </div>

          {/* SECTION SPONSORS */}
          <h1  className="text-3xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
            SPONSORS
          </h1>

          {/* Grille des 3 sponsors */}
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