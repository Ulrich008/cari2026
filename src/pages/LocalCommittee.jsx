import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const LocalCommittee = () => {
  // État pour toutes les sections repliables
  const [openSections, setOpenSections] = useState({
    honorary: true,
    general: true,
    vicesGenerals: true,
    organization: true,        // ✅ Organisation en accordéon
    keynotes: false,
    communications: false,
    webPublicity: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // ----- DONNÉES (inchangées) -----
  const honoraryChairs = [
    {
      name: 'Eléonore YAYI LADEKAN',
      title: 'Ministre de l\'Enseignement Supérieur et de la Recherche Scientifique (MESRS) du Bénin',
      image: '/assets/h1.webp',
    },
    {
      name: 'Norbert HOUNKONNOU',
      title: 'Président du Réseau des Académies africaines des Sciences et Ancien Président de l\'Académie nationale des Sciences, Arts et Lettres du Bénin (ANSALB)',
      image: '/assets/h3.jfif',
    },
    {
      name: 'Tahirou DJARRA',
      title: 'Vice-Recteur chargé des affaires Académiques, Université d\'Abomey Calavi (UAC)',
      image: '/assets/h2.webp',
    },
  ];

  const generalChair = {
    name: 'S. Arnaud R. M. AHOUANDJINOU',
    title: 'Université d\'Abomey-Calavi - UAC, Bénin',
    image: '/assets/Arnaud.png',
  };

  const vicesGeneralsChairs = [
    {
      name: 'Kamel BARKAOUI',
      title: 'ASDS & CNAM Paris & Académie Tunisienne des Sciences, des Lettres et des Arts, Paris, France',
      image: '/assets/kamel.jpeg',
    },
    {
      name: 'César VIHO',
      title: 'IRISA/Université de Rennes, France',
      image: '/assets/VIHO.jpeg',
    },
  ];

  const organizationChairs = [
    {
      name: 'Eugène C. EZIN',
      title: 'IFRI/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/dir.webp',
    },
    {
      name: 'Carlos OGOUYADJOU',
      title: 'IMSP/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/c1.jfif',
    },
  ];

  const organizationMembers = [
    {
      name: 'Guy DEGLA',
      title: 'IMSP/Université d\'Abomey-Calavi - UAC, Bénin, CIMPA-Chair',
      image: '/assets/m1.webp',
    },
    {
      name: 'Jules DEGILA',
      title: 'IMSP/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/m2.jpg',
    },
    {
      name: 'kokou ASSOGBA',
      title: 'EPAC/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/assogba.jpeg',
    },
    {
      name: 'Ratheil HOUNDJI',
      title: 'IFRI/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/Ra.jfif',
    },
    {
      name: 'Pélégie HOUNGUE',
      title: 'IMSP/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/Pelagie.png',
    },
    {
      name: 'Gwenaëlle LANNEC',
      title: 'IRISA/Université de Rennes, France',
      image: '/assets/Gene.jfif',
    },
  ];

  const keynotesChair = [
    {
      name: 'Jules DEGILA',
      title: 'IMSP/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/m2.jpg',
    },
  ];

  const communicationsChair = [
    {
      name: 'Ratheil HOUNDJI',
      title: 'IFRI/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/Ra.jfif',
    },
  ];

  const webPublicityChairs = [
    {
      name: 'Probus KIKI',
      title: 'IFRI/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/KIKI.jpg',
    },
    {
      name: 'Jerome ZOHOU',
      title: 'IFRI/Université d\'Abomey-Calavi - UAC, Bénin',
      image: '/assets/ZOHOU.jfif',
    },
    {
      name: 'Erick ADJE',
      title: 'Université du Littoral Côte d\'Opale (ULCO) / Laboratoire d\'Informatique Signal et Image de la Côte d\'Opale, France',
      image: '/assets/erick.jpg.jpeg',
    },
  ];

  return (
    <>
      <Header />
      <Navigation />
      <div className="max-w-7xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
        {/* Titre principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
          LOCAL ORGANIZATION COMMITTEE
        </h1>

        {/* --- HONORARY CHAIRS (accordéon) --- */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('honorary')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              HONORARY CHAIRS
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.honorary ? 'rotate-180' : ''
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
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSections.honorary ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {honoraryChairs.map((chair, index) => (
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
                    <p className="font-bold text-gray-900 text-base mb-2">
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
        </section>

        {/* --- GENERAL CHAIR (accordéon) --- */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('general')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              GENERAL CHAIR
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.general ? 'rotate-180' : ''
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
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSections.general ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="flex justify-start">
                <div className="flex flex-col items-center text-center w-full sm:w-1/2 lg:w-1/3">
                  <div className="w-full aspect-square mb-4 overflow-hidden bg-white shadow-lg rounded-lg">
                    <img
                      src={generalChair.image}
                      alt={generalChair.name}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23e2e8f0' width='300' height='300'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPhoto%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                  <p className="font-bold text-gray-900 text-base mb-2">
                    {generalChair.name}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed px-2">
                    {generalChair.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- VICES GENERALS CHAIRS (accordéon) --- */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('vicesGenerals')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              VICE GENERAL CHAIRS
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.vicesGenerals ? 'rotate-180' : ''
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
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSections.vicesGenerals ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {vicesGeneralsChairs.map((chair, index) => (
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
                    <p className="font-bold text-gray-900 text-base mb-2">
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
        </section>

        {/* --- ORGANIZATION COMMITTEE (accordéon principal) --- */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('organization')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              ORGANIZATION COMMITTEE
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.organization ? 'rotate-180' : ''
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

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSections.organization ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              {/* CHAIRS - toujours visible */}
              <div className="mb-8">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 uppercase">
                  CHAIRS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {organizationChairs.map((chair, index) => (
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
                      <p className="font-bold text-gray-900 text-base mb-2">
                        {chair.name}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed px-2">
                        {chair.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* MEMBERS - toujours visible */}
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 uppercase">
                  MEMBERS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {organizationMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-full max-w-sm aspect-square mb-4 overflow-hidden bg-white shadow-lg rounded-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23e2e8f0' width='300' height='300'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPhoto%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                      <p className="font-bold text-gray-900 text-base mb-2">
                        {member.name}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed px-2">
                        {member.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- KEYNOTES AND RELATIONSHIPS CHAIR (accordéon) --- */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('keynotes')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              KEYNOTES AND RELATIONSHIPS CHAIR
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.keynotes ? 'rotate-180' : ''
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
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSections.keynotes ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {keynotesChair.map((chair, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-full max-w-sm aspect-square mb-4 overflow-hidden bg-white shadow-lg rounded-lg">
                      <img
                        src={chair.image}
                        alt={chair.name || 'Keynotes Chair'}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23e2e8f0' width='300' height='300'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPhoto%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                    {chair.name && (
                      <>
                        <p className="font-bold text-gray-900 text-base mb-2">
                          {chair.name}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed px-2">
                          {chair.title}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- COMMUNICATIONS CHAIR (accordéon) --- */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('communications')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              COMMUNICATIONS CHAIR
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.communications ? 'rotate-180' : ''
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
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSections.communications ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {communicationsChair.map((chair, index) => (
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
                    <p className="font-bold text-gray-900 text-base mb-2">
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
        </section>

        {/* --- WEB AND PUBLICITY CHAIR (accordéon) --- */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('webPublicity')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              WEB AND PUBLICITY CHAIR
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.webPublicity ? 'rotate-180' : ''
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
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSections.webPublicity ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {webPublicityChairs.map((chair, index) => (
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
                    <p className="font-bold text-gray-900 text-base mb-2">
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
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LocalCommittee;