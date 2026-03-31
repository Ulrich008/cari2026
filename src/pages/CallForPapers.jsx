import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom'; 
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const CallForPapers = () => {
  const [openSections, setOpenSections] = useState({
    overview: true,
    scope: true,
    dates: true,
    submission: true,
  });

  const location = useLocation();
  const datesRef = useRef(null);

  // Effet pour gérer le défilement vers l'ancre
  useEffect(() => {
    if (location.hash === '#important-dates') {
      // Ouvrir la section des dates
      setOpenSections(prev => ({ ...prev, dates: true }));
      
      // Attendre que la section soit ouverte (avec un petit délai pour l'animation)
      setTimeout(() => {
        if (datesRef.current) {
          datesRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white min-h-screen">
        {/* Titre principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
          CALL FOR PAPERS
        </h1>

        {/* Sous-titre */}
        <div className="mb-8">
          <p className="text-gray-900 leading-relaxed">
            <span className="font-semibold">The 18th African Conference on Research in Computer Science and Applied Mathematics (CARI'2026)</span>
            <br />
            October 21-24, 2026 University of Abomey-Calavi, Cotonou – Benin
          </p>
        </div>

        {/* OVERVIEW Section */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('overview')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              OVERVIEW
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.overview ? 'rotate-180' : ''
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
              openSections.overview ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="space-y-4 text-gray-900 leading-relaxed">
                <p>
                  CARI, the African Conference on Research in Computer Science and Applied Mathematics, is the flagship event of ASDS – African Society in Digital Science (
                  <a 
                    href="https://asds.africa/" 
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://asds.africa/
                  </a>
                  ). It brings together researchers and practitioners from Africa and beyond to present and discuss advances in computer science and applied mathematics, aiming to strengthen collaboration, international cooperation, and the visibility of African research while fostering innovation to address the continent's challenges.
                </p>
                <p>
                  CARI'2026 will be held on October 21-24, 2026. The program will feature keynote talks, technical sessions, poster presentations, and panel discussions, preceded by workshops and tutorials on October 22, 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCOPE AND TOPICS OF INTEREST Section */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('scope')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              SCOPE AND TOPICS OF INTEREST
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.scope ? 'rotate-180' : ''
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
              openSections.scope ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="space-y-4 text-gray-900 leading-relaxed">
                <p>
                  CARI 2026 invites submissions of papers presenting original research results and short papers reporting work in progress or position papers.
                </p>
                <p>
                  The conference is structured around two main tracks: <span className="font-bold">Computer Science</span> and <span className="font-bold">Applied Mathematics</span>. Topics of interest include, but are not limited to:
                </p>

                {/* Track: Computer Science */}
                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">Track: Computer Science</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Algorithms and optimisation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Artificial Intelligence, machine learning, and data science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Distributed systems and cloud computing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Networking and the Internet of Things</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Security, privacy, and dependable systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Digital sovereignty and computing for Africa</span>
                    </li>
                  </ul>
                </div>

                {/* Track: Applied Mathematics */}
                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">Track: Applied Mathematics</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Analysis of dynamical Systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Partial differential equations and their applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>High-performance scientific computing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Mathematical foundations of artificial intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Mathematical Modelling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Stochastic Systems</span>
                    </li>
                  </ul>
                </div>

                {/* Note spéciale */}
                <p className="mt-6 italic">
                  CARI'2026 especially welcomes applied research addressing African contexts and challenges, with <span className="font-bold">application domains</span> including agriculture, healthcare, education, environmental systems, transportation, and logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT DATES Section */}
        <section 
          id="important-dates" 
          ref={datesRef}
          className="mb-4 scroll-mt-24" // scroll-mt-24 pour éviter que le header cache le titre
        >
          <button
            onClick={() => toggleSection('dates')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              IMPORTANT DATES (All deadlines are at 23:59 GMT)
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.dates ? 'rotate-180' : ''
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
              openSections.dates ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="space-y-2 text-gray-900 leading-relaxed">
                <p>
                  <span className="mr-2">-</span>
                  <span className="font-bold">Abstract submission (optional):</span> <span className="text-red-600 font-bold">23 March, 2026</span>
                </p>
                <p>
              <span className="mr-2">-</span>
              <span className="font-bold">Paper submission:</span> 
              <span className="line-through mr-2">30 March, 2026  ,</span>
              <span className="text-red-600  font-bold">10 April, 2026</span>
            </p>
                <p>
                  <span className="mr-2">-</span>
                  <span className="font-bold">Notification to authors:</span> <span className="text-red-600 font-bold">22 June, 2026</span>
                </p>
                <p>
                  <span className="mr-2">-</span>
                  <span className="font-bold">Camera-ready deadline:</span> <span className="text-red-600 font-bold">6 July, 2026</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PAPER SUBMISSION AND PUBLICATION Section */}
        <section className="mb-4">
          <button
            onClick={() => toggleSection('submission')}
            className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
              PAPER SUBMISSION AND PUBLICATION
            </h2>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                openSections.submission ? 'rotate-180' : ''
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
              openSections.submission ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <div className="space-y-4 text-gray-900 leading-relaxed">
                <p>CARI'2026 accepts submissions in three categories:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Full papers describing original research (up to 14 pages excluding references).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Work-in-progress papers on early results (up to 7 pages in length excluding references).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Position papers proposing novel or unconventional ideas - preferably supported by empirical data and measurements - that differ from prior published work (up to 7 pages excluding references).</span>
                  </li>
                </ul>

                <p className="mt-4">
                  All submissions must be original, unpublished, and not under consideration elsewhere. All submissions will be reviewed based on relevance, originality, significance, and clarity.
                </p>

                <p className="mt-4">
                  Papers should follow the Lecture Notes in Computer Science (LNCS) format (Springer) and be submitted via{' '}
                  <a 
                    href="https://easychair.org/conferences/?conf=cari2026" 
                    className="text-blue-600 hover:text-blue-800 underline font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EasyChair
                  </a>{' '}
                  (<a 
                    href="https://easychair.org/conferences/?conf=cari2026" 
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://easychair.org/conferences/?conf=cari2026
                  </a>).
                </p>

                <p className="mt-4">
                  CARI 2026 employs a single-blind review process, with authors' names included in submissions.
                </p>

                <p className="mt-4">
                  As CARI'2024, all accepted papers should be published in Springer's book series Communications in Computer and Information Science (CCIS) or Trends in Mathematics and made available through the SpringerLink Digital Library (indexed in Scopus, ACM Digital Library, DBLP, and Google Scholar). Selected papers from CARI'2026 will be invited to submit extended versions for possible publication in ARIMA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOR MORE INFORMATION Section */}
        <section className="mb-8 mt-8">
          <div className="border-t-4 border-b-4 border-green-600 py-4">
            <h2 className="text-center text-lg md:text-xl font-bold text-gray-900 uppercase mb-4">
              FOR MORE INFORMATION
            </h2>
            <div className="text-center space-y-2">
              <p className="text-gray-900">
                <span className="font-bold">E-mail:</span>{' '}
                <a 
                  href="mailto:Cari2026bi@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  caribj2026@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CallForPapers;