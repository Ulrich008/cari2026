import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const TechnicalProgramCommittee = () => {
  const [openChairsSection, setOpenChairsSection] = useState(true);

  const toggleChairsSection = () => {
    setOpenChairsSection(!openChairsSection);
  };

  // CHAIR
  const chairs = [
    {
      name: 'Mathieu ROCHE',
      title: 'CIRAD, UMR TETIS, France  ',
      image: '/assets/roche.jpeg',
    },
  ];

  // TRACK CO-CHAIRS COMPUTER SCIENCE
  const trackCSCoChairs = [
    {
      name: 'César VIHO',
      title: 'IRISA/Université de Rennes, France',
      image: '/assets/VIHO.jpeg',
    },
    {
      name: 'Paulin MELATAGIA',
      title: 'Univ. Yaoundé & ASDS, Cameroun',
      image: '/assets/paulin.png',
    },
  ];

  // TRACK CO-CHAIRS APPLIED MATHEMATICS
  const trackMathCoChairs = [
    {
      name: 'Nabil GMATI',
      title: 'ENIT, Université de Tunis El Manar, Tunisie',
      image: '/assets/nabil.webp',
    },
    {
      name: 'Suzanne TOUZEAU',
      title: 'INRAE, France',
      image: '/assets/suz.jpeg',
    },
  ];

  return (
    <>
      <Header />
      <Navigation />
      <div className="max-w-7xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
        {/* Titre principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
          TECHNICAL PROGRAM COMMITTEE
        </h1>

        {/* UNE SEULE SECTION ACCORDÉON - TECHNICAL PROGRAM COMMITTEE CHAIRS */}
        <section className="mb-4">
          <button
            onClick={toggleChairsSection}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              TECHNICAL PROGRAM COMMITTEE CHAIRS
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openChairsSection ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Contenu de la section accordéon */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openChairsSection ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              
              {/* CHAIR */}
              <div className="mb-8">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 uppercase">
                  CHAIR
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {chairs.map((chair, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      {/* Conteneur d'image : carré, ombre, coins arrondis */}
                      <div className="w-full max-w-sm aspect-square mb-4 overflow-hidden bg-white shadow-lg rounded-lg">
                        <img
                          src={chair.image}
                          alt={chair.name}
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23e2e8f0' width='300' height='300'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPhoto%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                      <p className="font-bold text-gray-900 text-base mb-1">
                        {chair.name}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed px-2">
                        {chair.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRACK CO-CHAIRS COMPUTER SCIENCE */}
              <div className="mb-8">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 uppercase">
                  TRACK CO-CHAIRS COMPUTER SCIENCE
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trackCSCoChairs.map((chair, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-full max-w-sm aspect-square mb-4 overflow-hidden bg-white shadow-lg rounded-lg">
                        <img
                          src={chair.image}
                          alt={chair.name}
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23e2e8f0' width='300' height='300'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPhoto%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                      <p className="font-bold text-gray-900 text-base mb-1">
                        {chair.name}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed px-2">
                        {chair.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRACK CO-CHAIRS APPLIED MATHEMATICS */}
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 uppercase">
                  TRACK CO-CHAIRS APPLIED MATHEMATICS
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trackMathCoChairs.map((chair, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-full max-w-sm aspect-square mb-4 overflow-hidden bg-white shadow-lg rounded-lg">
                        <img
                          src={chair.image}
                          alt={chair.name}
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23e2e8f0' width='300' height='300'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPhoto%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                      <p className="font-bold text-gray-900 text-base mb-1">
                        {chair.name}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed px-2">
                        {chair.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* MEMBERS - COMPUTER SCIENCE (Section fixe, non pliable) */}
        <section className="mb-4">
          <div className="bg-white border-b-4 border-green-600 px-4 py-3">
            <h2 className="text-base md:text-lg font-bold text-gray-800 uppercase">
              MEMBERS - COMPUTER SCIENCE
            </h2>
          </div>
          <div className="bg-gray-100 p-6">
            <p className="text-gray-700 text-sm font-semibold">TBA/TBC</p>
          </div>
        </section>

        {/* MEMBERS - APPLIED MATHEMATICS (Section fixe, non pliable) */}
        <section className="mb-4">
          <div className="bg-white border-b-4 border-green-600 px-4 py-3">
            <h2 className="text-base md:text-lg font-bold text-gray-800 uppercase">
              MEMBERS - APPLIED MATHEMATICS
            </h2>
          </div>
          <div className="bg-gray-100 p-6">
            <p className="text-gray-700 text-sm font-semibold">TBA/TBC</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TechnicalProgramCommittee;