import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Proceedings = () => {
  const proceedings = [
    {
      year: '2014',
      location: 'Saint-Louis (Senegal)',
      links: [
        {
          url: 'https://hal.science/hal-01062320v1',
          text: 'https://hal.science/hal-01062320v1'
        }
      ]
    },
    {
      year: '2016',
      location: 'Hammamet (Tunisia)',
      links: [
        {
          url: 'https://hal.science/hal-01350039v2',
          text: 'https://hal.science/hal-01350039v2'
        }
      ]
    },
    {
      year: '2018',
      location: 'Stellenbosch (South Africa)',
      links: [
        {
          url: 'https://hal.science/hal-01881376v1',
          text: 'https://hal.science/hal-01881376v1'
        }
      ]
    },
    {
      year: '2020',
      location: 'Senegal and Online',
      links: [
        {
          url: 'https://inria.hal.science/CARI2020/',
          text: 'https://inria.hal.science/CARI2020/',
          note: '[collection]'
        }
      ]
    },
    {
      year: '2022',
      location: 'Tunis (Tunisia) & Dschang (Cameroun)',
      links: [
        {
          url: 'https://inria.hal.science/CARI2022',
          text: 'https://inria.hal.science/CARI2022',
          note: '[collection]'
        }
      ]
    },
    {
      year: '2024',
      location: 'Béjaïa (Algeria)',
      volumes: [
        {
          title: 'Volume 1: Research in Computer Science, Communications in Computer and Information Science (CCIS), Springer:',
          url: 'https://doi.org/10.1007/978-3-031-88226-5',
          text: 'https://doi.org/10.1007/978-3-031-88226-5'
        },
        {
          title: 'Volume 2: Proceedings of the Mathematics Section of CARI, Trends in Mathematics, Springer:',
          url: 'https://doi.org/10.1007/978-3-031-90510-0',
          text: 'https://doi.org/10.1007/978-3-031-90510-0'
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <Navigation />
      
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Titre principal */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-8 uppercase">
            CARI PROCEEDINGS
          </h1>

          {/* Sous-titre */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-12">
            African Conference on Research in Computer Science and Applied Mathematics
          </h2>

          {/* Liste des proceedings */}
          <div className="space-y-8">
            {proceedings.map((proceeding, index) => (
              <div key={index} className="space-y-2">
                {/* Année et lieu */}
                <p className="text-lg text-gray-900">
                  <span className="font-bold">CARI {proceeding.year}</span>
                  {', '}
                  <span>{proceeding.location}</span>
                </p>

                {/* Liens simples */}
                {proceeding.links && proceeding.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="ml-0">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {link.text}
                    </a>
                    {link.note && (
                      <span className="text-gray-900 ml-1">{link.note}</span>
                    )}
                  </div>
                ))}

                {/* Volumes (pour 2024) */}
                {proceeding.volumes && (
                  <div className="space-y-3 ml-0">
                    {proceeding.volumes.map((volume, volIndex) => (
                      <div key={volIndex} className="space-y-1">
                        <p className="text-gray-900">
                          <span>–</span>
                          <span className="ml-2">{volume.title}</span>
                        </p>
                        <a
                          href={volume.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline block ml-4"
                        >
                          {volume.text}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Proceedings;