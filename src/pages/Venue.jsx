import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Venue = () => {
  const [openSections, setOpenSections] = useState({
    location: true,
    cities: true,
    travel: true,
    accommodation: true,
    discover: true,
    social: true,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const hotelsConference = [
    { name: 'Paradisia Hotel', stars: 4, area: 'Godomey' },
    { name: 'Hôtel Les Arcades', stars: 3, area: 'Abomey-Calavi' },
    { name: 'Assouka Eco-Village', stars: 2, area: 'Lake Nokoué' },
    { name: 'IITA Guest House', stars: 2, area: 'IITA Campus' },
    { name: 'IITA Guest House', stars: 2, area: 'Abomey-Calavi' },
  ];

  const hotelsCotonou = [
    { name: 'Golden Tulip Le Diplomate', stars: 4, area: 'Marina' },
    { name: 'Novotel Orisha', stars: 4, area: 'Marina' },
    { name: 'Hotel du Lac', stars: 4, area: 'Cotonou' },
    { name: 'Ibis Cotonou', stars: 3, area: 'Marina' },
    { name: 'Maison Rouge', stars: 4, area: 'Marina' },
    { name: 'Nobila Airport Hotel', stars: 4, area: 'Airport' },
    { name: 'Sofitel Marina Hotel & Spa', stars: 5, area: 'Marina' },
  ];

  const renderStars = (count) => {
    return '★'.repeat(count);
  };

  return (
    <>
      <Header />
      <Navigation />
      
      <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 uppercase">
            VENUE
          </h1>

          {/* CONFERENCE LOCATION Section */}
          <section className="mb-4">
            <button
              onClick={() => toggleSection('location')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
                CONFERENCE LOCATION
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.location ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.location ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="space-y-4 text-gray-900 leading-relaxed text-justify">
                  <p>
                    The 18th African Conference on Research in Computer Science and Applied Mathematics (CARI 2026) will be held in Abomey-Calavi, near Cotonou, Benin, from October 21–24, 2026.
                  </p>
                  
                  <p className="font-semibold">The conference will take place at:</p>
                  
                  <div className="pl-4">
                    <p className="font-bold">International Institute of Tropical Agriculture (IITA – Benin)</p>
                    <p>Abomey-Calavi, Benin</p>
                  </div>
                  
                  <p>
                    The IITA campus provides a modern and peaceful environment ideally suited for academic exchange and scientific collaboration. The venue offers conference rooms, meeting spaces, and facilities designed to host international scientific events.
                  </p>

                  <p className="font-semibold">📍 Conference Venue Map</p>
                  <a 
                    href="https://share.google/Xglf2Y5DpNyeJbFuP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline block"
                  >
                    https://share.google/Xglf2Y5DpNyeJbFuP
                  </a>

                  <p>
                    The venue is located approximately 30 minutes from Cotonou International Airport, ensuring convenient access for international participants.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* HOST CITIES Section */}
          <section className="mb-4">
            <button
              onClick={() => toggleSection('cities')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
                HOST CITIES
              </h2>
              <svg className={`w-6 h-6 text-green-600 transition-transform duration-300 ${openSections.cities ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.cities ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="space-y-6 text-gray-900 leading-relaxed text-justify">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Abomey-Calavi</h3>
                    <p>
                      Abomey-Calavi is the main academic center of Benin and home to the University of Abomey-Calavi, the country's largest public university. The city provides a dynamic academic environment and hosts several research institutions and innovation centers.
                    </p>
                    <p className="mt-2">
                      Its proximity to Cotonou makes it an ideal location for international conferences, combining accessibility with a calm and focused setting.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Cotonou</h3>
                    <p>
                      Cotonou is the economic capital of Benin and the principal gateway for international visitors. The city hosts the international airport, major hotels, banks, and business districts.
                    </p>
                    <p className="mt-2">
                      Visitors will find a wide range of restaurants, services, and cultural activities within easy reach.
                    </p>
                    <p className="mt-2">
                      Cotonou is located approximately 20 km from the conference venue, allowing convenient daily transportation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRAVEL INFORMATION Section */}
          <section className="mb-4">
            <button
              onClick={() => toggleSection('travel')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
                TRAVEL INFORMATION
              </h2>
              <svg className={`w-6 h-6 text-green-600 transition-transform duration-300 ${openSections.travel ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.travel ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="space-y-6 text-gray-900 leading-relaxed text-justify">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Arrival by Air</h3>
                    <p>International participants should arrive at:</p>
                    <p className="font-bold mt-2">Cotonou International Airport (COO)</p>
                    <p>The airport provides connections to major African and European cities.</p>
                    
                    <p className="mt-4 font-semibold">Transportation options from the airport include:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Airport taxis</li>
                      <li>Private transfers</li>
                      <li>Hotel shuttles</li>
                    </ul>
                    
                    <p className="mt-2">Travel time to the conference venue is approximately 25–35 minutes.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Visa Information</h3>
                    <p>Participants requiring a visa to enter Benin are encouraged to apply well in advance.</p>
                    
                    <p className="mt-4 font-semibold">Official visa information is available at:</p>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <span className="font-semibold">Benin e-Visa Portal:</span><br />
                        <a href="https://www.service-public.bj/public/services/service/PS00005" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                          https://www.service-public.bj/public/services/service/PS00005
                        </a>
                      </li>
                      <li>
                        <span className="font-semibold">Ministry of Foreign Affairs:</span><br />
                        <a href="https://diplomatie.gouv.bj/fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                          https://diplomatie.gouv.bj/fr
                        </a>
                      </li>
                    </ul>
                    
                    <p className="mt-4">Visa invitation letters will be issued only after registration and payment have been completed.</p>
                    
                    <p className="mt-4">
                      <span className="font-semibold">For visa support:</span>{' '}
                      <a href="mailto:visa@cari2026.org" className="text-blue-600 hover:text-blue-800 underline">
                        caribj2026@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ACCOMMODATION Section */}
          <section className="mb-4">
            <button
              onClick={() => toggleSection('accommodation')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
                ACCOMMODATION
              </h2>
              <svg className={`w-6 h-6 text-green-600 transition-transform duration-300 ${openSections.accommodation ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.accommodation ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="space-y-6 text-gray-900 leading-relaxed text-justify">
                  <p>
                    A range of accommodation options is available in Abomey-Calavi and Cotonou, including guest houses, business hotels, and international-standard hotels.
                  </p>
                  <p>
                    Participants are encouraged to book early due to limited availability during the conference period.
                  </p>

                  {/* Hotels Near Conference Venue */}
                  <div className="mt-6">
                    <h3 className="font-bold text-lg mb-4 bg-green-600 text-white px-4 py-2">
                      Hotels Near the Conference Venue
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-green-700 text-white">
                            <th className="border border-green-600 px-4 py-2 text-left">Hotel</th>
                            <th className="border border-green-600 px-4 py-2 text-center">Category</th>
                            <th className="border border-green-600 px-4 py-2 text-left">Area</th>
                          </tr>
                        </thead>
                        <tbody>
                          {hotelsConference.map((hotel, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2">{hotel.name}</td>
                              <td className="border border-gray-300 px-4 py-2 text-center text-yellow-500">
                                {renderStars(hotel.stars)}
                              </td>
                              <td className="border border-gray-300 px-4 py-2">{hotel.area}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Hotels in Cotonou */}
                  <div className="mt-6">
                    <h3 className="font-bold text-lg mb-4 bg-green-600 text-white px-4 py-2">
                      Hotels in Cotonou
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-green-700 text-white">
                            <th className="border border-green-600 px-4 py-2 text-left">Hotel</th>
                            <th className="border border-green-600 px-4 py-2 text-center">Category</th>
                            <th className="border border-green-600 px-4 py-2 text-left">Area</th>
                          </tr>
                        </thead>
                        <tbody>
                          {hotelsCotonou.map((hotel, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2">{hotel.name}</td>
                              <td className="border border-gray-300 px-4 py-2 text-center text-yellow-500">
                                {renderStars(hotel.stars)}
                              </td>
                              <td className="border border-gray-300 px-4 py-2">{hotel.area}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DISCOVER BENIN Section */}
          <section className="mb-4">
            <button
              onClick={() => toggleSection('discover')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
                DISCOVER BENIN
              </h2>
              <svg className={`w-6 h-6 text-green-600 transition-transform duration-300 ${openSections.discover ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.discover ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="space-y-8 text-gray-900 leading-relaxed text-justify">
                  <p>
                    CARI 2026 participants will have the opportunity to explore the cultural and historical heritage of Benin.
                  </p>

                  {/* Ganvié */}
                  <div>
                    <h3 className="font-bold text-lg mb-3">Ganvié – The Lacustrine City</h3>
                    <p className="mb-4">
                      Ganvié is one of the most remarkable cultural sites in West Africa. Built entirely on stilts over Lake Nokoué, the village is often referred to as the Venice of Africa.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <img 
                        src="/assets/Venue/ganvi1.jpg" 
                        alt="Ganvié village on water" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                      <img 
                        src="/assets/Venue/ganvie2.jpg" 
                        alt="Ganvié houses on stilts" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                    </div>
                    <img 
                      src="/assets/Venue/hot1.jpg" 
                      alt="Ganvié lakeside hotel" 
                      className="w-full h-64 object-cover rounded-lg shadow-md" 
                    />
                  </div>

                  {/* Ouidah */}
                  <div>
                    <h3 className="font-bold text-lg mb-3">Ouidah</h3>
                    <p className="mb-4">
                      Ouidah is a historic coastal town known for its rich cultural heritage and historical landmarks. Visitors may explore museums, temples, and historical monuments.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <img 
                        src="/assets/Venue/ouidah4.jpg" 
                        alt="Ouidah historical gate" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                      <img 
                        src="/assets/Venue/ouidah2.jfif" 
                        alt="Ouidah building" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                      <img 
                        src="/assets/Venue/ouidah3.jpg" 
                        alt="Ouidah monument" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                      <img 
                        src="/assets/Venue/site.jpg" 
                        alt="Ouidah historical site" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                    </div>
                  </div>

                  {/* Royal Palaces of Abomey */}
                  <div>
                    <h3 className="font-bold text-lg mb-3">Royal Palaces of Abomey</h3>
                    <p className="mb-4">
                      The Royal Palaces of Abomey represent the historical center of the former Kingdom of Dahomey and constitute one of the most important cultural heritage sites in Benin.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <img 
                        src="/assets/Venue/abm1.jpg" 
                        alt="Abomey Palace entrance" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                      <img 
                        src="/assets/Venue/abm2.jpg" 
                        alt="Abomey Palace interior" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                    </div>
                  </div>

                  {/* Gogo Tinpkon */}
                  <div>
                    <h3 className="font-bold text-lg mb-3">Gogo Tinpkon</h3>
                    <p className="mb-4">
                      Gogo Tinpkon is a historic and cultural site reflecting traditional heritage and local history.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <img 
                        src="/assets/Venue/g1.jpg" 
                        alt="Gogo Tinpkon gardens" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                      <img 
                        src="/assets/Venue/g2.jpg" 
                        alt="Gogo Tinpkon cultural site" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                    </div>
                  </div>

                  {/* Cathedral of Cotonou */}
                  <div>
                    <h3 className="font-bold text-lg mb-3">Cathedral of Cotonou</h3>
                    <p className="mb-4">
                      One of the most recognizable landmarks in Cotonou, the cathedral reflects the architectural and religious heritage of the city.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <img 
                        src="/assets/Venue/ouida1.jpg" 
                        alt="Cathedral front view" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                      <img 
                        src="/assets/Venue/cath.jpg" 
                        alt="Cathedral side view" 
                        className="w-full h-64 object-cover rounded-lg shadow-md" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SOCIAL EVENT Section */}
          <section className="mb-4">
            <button
              onClick={() => toggleSection('social')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
                SOCIAL EVENT
              </h2>
              <svg className={`w-6 h-6 text-green-600 transition-transform duration-300 ${openSections.social ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.social ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="space-y-4 text-gray-900 leading-relaxed text-justify">
                  <p>
                    A cultural social event will be organized during the conference to provide participants with an opportunity to experience the traditions and hospitality of Benin.
                  </p>
                  <p>
                    <span className="font-semibold">Preview:</span>{' '}
                    <a 
                      href="https://www.instagram.com/reel/Cnhh-4RBsZY/?igshid=MDJmNzVkMjY="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://www.instagram.com/reel/Cnhh-4RBsZY/?igshid=MDJmNzVkMjY=
                    </a>
                  </p>
                  <p>
                    The social event will include cultural performances and traditional activities.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Venue;