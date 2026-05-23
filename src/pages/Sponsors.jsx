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
      url: 'https://www.ifri-uac.bj/'
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
    },
    {
      name: 'INRAE',
      logo: '/assets/inra.jpeg',
      url: 'https://www.inrae.fr/'
    },
    {
      name: 'MATHNUM',
      logo: '/assets/math.jpeg',
      url: 'https://www.inrae.fr/departements/mathnum'
    },
     {
      name: 'CIPMA',
      logo: '/assets/cimpa.png',
      url: 'https://www.icmpa.net/cipma/'
    },
    {
      name: 'CNRS',
      logo: '/assets/cnrs.png',
      url: 'https://www.cnrs.fr/fr'
    },
     {
      name: 'IRISA',
      logo: '/assets/irisa.png',
      url: 'https://www.irisa.fr/'
    },
     {
      name: 'RENNES',
      logo: '/assets/rennes.png',
      url: 'https://www.univ-rennes.fr/'
    },
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
    },
    {
      name: 'Tetis',
      logo: '/assets/tetis.png',
      url: 'https://iiama.webs.upv.es/en/technology-transfer/software/tetis/'
    }
  ];

  return (
    <>
      <Header />
      <Navigation />

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* SECTION PARTENAIRES */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 uppercase text-center md:text-left border-b-2 border-red-200 pb-4">
              PARTNER INSTITUTIONS
            </h1>

            {/* Première ligne : 4 logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-10">
              {partners.slice(0, 4).map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-auto max-h-28 object-contain"
                    title={partner.name}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100'%3E%3Crect fill='%23e2e8f0' width='200' height='100'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${partner.name}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Deuxième ligne : 5 logos */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
              {partners.slice(4).map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-auto max-h-28 object-contain"
                    title={partner.name}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100'%3E%3Crect fill='%23e2e8f0' width='200' height='100'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${partner.name}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* SECTION SPONSORS */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 uppercase text-center md:text-left border-b-2 border-red-200 pb-4">
              SPONSORS
            </h1>

            {/* Tous les sponsors sur une seule ligne */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-24 w-auto max-w-[180px] object-contain"
                    title={sponsor.name}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23f3f4f6' width='300' height='200'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='16' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${sponsor.name}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sponsors;