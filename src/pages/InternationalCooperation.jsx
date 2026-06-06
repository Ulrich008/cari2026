import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Import du template file (à placer dans le dossier public ou assets)
// Assurez-vous que le fichier est dans: public/templates/Template-Coop_Int_Session-CARI2026.docx
// ou importez-le directement si vous utilisez un importeur de fichiers

const InternationalCooperation = () => {
  const [openSections, setOpenSections] = useState({
    scope: true,
    topics: true,
    guidelines: true,
    submissions: true,
    dates: true,
    participation: true,
    chairs: true
  });

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Fonction pour télécharger le template
  const downloadTemplate = () => {
    // Chemin vers le fichier template dans le dossier public
    const templateUrl = '/templates/Template-Coop_Int_Session-CARI2026.docx';
    const link = document.createElement('a');
    link.href = templateUrl;
    link.download = 'Template-Coop_Int_Session-CARI2026.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <Navigation />
      
      <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <h1 className="text-4xl md:text-4xl font-bold text-red-600 mb-4 uppercase">
            International Cooperation Session
          </h1>
          
          <p className="text-gray-600 mb-6 text-base">
            Event affiliated with CARI'2026 — Cotonou, Benin — October 21, 2026
          </p>

          <div className="mb-8 bg-green-50 border-l-4 border-green-600 p-4">
            <p className="text-green-800 font-semibold">
              CALL FOR CONTRIBUTIONS — This special session of CARI'2026 is dedicated to share experiences on ongoing international cooperation projects and exiting fundings in Applied Mathematics and Computer Sciences.
            </p>
          </div>

          {/* SECTION 1: SCOPE */}
          <section id="scope" className="mb-4">
            <button
              onClick={() => toggleSection('scope')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 text-left">
                Scope
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.scope ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.scope ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="text-gray-900 leading-relaxed text-justify space-y-4">
                  <p>
                    After thirty years of international cooperation between African, European, and international 
                    research institutes, the CARI conference (African Conference on Research in Computer Science 
                    and Applied Mathematics), came into being and constitutes an ideal place where African, 
                    European, and international scientists and researchers meet and exchange. CARI'2026 is 
                    therefore a perfect framework for sharing experiences on international collaboration benefits 
                    and results. Computer science and applied mathematics make it possible to propose solutions 
                    to everyday problems in different areas of society (health, agriculture, environment, etc.). 
                    This half-day special session is dedicated to sharing experiences on international cooperation 
                    projects in various fields that are part of digital sciences. Part of this session will be 
                    devoted to presentations and roundtable discussions of the different existing fundings from 
                    international organizations.
                  </p>
                  
                  <p className="font-semibold text-green-700 mt-4">Participating in this session will give you the opportunity to:</p>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>Sharing experiences on issues and benefits of international cooperations</li>
                    <li>Meet researchers and experienced people who have already worked or are working on international projects to build networks/consortia and apply for large-scale and more ambitious projects.</li>
                    <li>Find out about sources of funding for international projects at the European scale, such as ANR, CNRS, the French Embassy fundings, Inria, CIRAD, INRAE, IRD, AUF, Marie Curie, etc.</li>
                    <li>The main levers to activate to secure project fundings from international organizations</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: TOPICS OF INTEREST */}
          <section id="topics" className="mb-4">
            <button
              onClick={() => toggleSection('topics')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 text-left">
                Topics of Interest
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.topics ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.topics ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="text-gray-900 leading-relaxed space-y-4">
                  <p>
                    This special session is devoted to providing a forum for discussions on ongoing international 
                    cooperation projects at the <span className="font-semibold">intersection of computer science and applied 
                    mathematics in various fields in Africa</span> with different application domains (agriculture, 
                    environment, health, governance, etc.). A non-exhaustive list is below:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Smart Farming for Crop monitoring &amp; forecasting</li>
                    <li>Smart Cities, Smart Grids for Good Energy</li>
                    <li>E-Education, E-Government, E-Health</li>
                    <li>Animal and plant health monitoring</li>
                    <li>Applied Mathematics and Modelling in Biology, Ecology and Medicine</li>
                    <li>etc.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: GUIDELINES */}
          <section id="guidelines" className="mb-4">
            <button
              onClick={() => toggleSection('guidelines')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 text-left">
                Guidelines
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.guidelines ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.guidelines ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="text-gray-900 leading-relaxed space-y-4">
                  <p>
                    Researchers, academics, and students working on cooperation projects in the field of 
                    <span className="font-semibold"> computer science and applied mathematics with application in-country 
                    development and society field in general in Africa </span>are invited to submit short proposals 
                    for oral presentations. A proposal for this special international cooperation session must be 
                    in <span className="font-semibold">English up to 2 pages</span> (strict maximum limit) and must 
                    be submitted only using the google form and specific template. For guidance only, proposers should provide 
                    information on: Title of the international cooperation project, Context and Objectives of the 
                    project, Ongoing work and results, Added Value and Societal Impacts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: SUBMISSIONS */}
          <section id="submissions" className="mb-4">
            <button
              onClick={() => toggleSection('submissions')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 text-left">
                Submissions
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.submissions ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.submissions ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="text-gray-900 leading-relaxed space-y-4">
                  <p>
                    Please submit your short proposal for the international cooperation session by using the 
                    Google Form below and the <span className="font-semibold">specific template</span>:
                  </p>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-300 space-y-3">
                    <div>
                      <span className="font-semibold text-green-700">📝 Google Form:</span>{' '}
                      <a 
                        href="https://forms.gle/V5dtMKsbUCe6UrUL8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 font-semibold underline break-all"
                      >
                        https://forms.gle/V5dtMKsbUCe6UrUL8
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 border-t border-gray-200">
                      <span className="font-semibold text-green-700">📄 Template:</span>
                      <button
                        onClick={downloadTemplate}
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Template (DOCX)
                      </button>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm">
                    <p className="text-yellow-800">
                      <span className="font-semibold">⚠️ File naming:</span> Please name your file 
                      <span className="font-mono bg-yellow-100 px-1 mx-1">"acronymoftheproject_Proposal_Coop_int_session2026.pdf"</span>
                      (Replace acronymoftheproject by the name of your international cooperation project)
                    </p>
                  </div>
                  
                  <p className="mt-4">
                    <span className="font-semibold">📧 Contact:</span> For any questions, contact the session chairs via e-mail at:{' '}
                    <a 
                      href="mailto:cari26.intcoop@gmail.com" 
                      className="text-green-600 hover:text-green-800 font-semibold underline"
                    >
                      cari26.intcoop@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: IMPORTANT DATES */}
          <section id="dates" className="mb-4">
            <button
              onClick={() => toggleSection('dates')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 text-left">
                Important Dates
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.dates ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.dates ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="text-gray-900 leading-relaxed">
                  <ul className="space-y-2">
                    <li><span className="font-semibold">Submission deadline:</span> June 26, 2026</li>
                    <li><span className="font-semibold">Notification to authors:</span> July 15, 2026</li>
                    <li><span className="font-semibold">Camera-ready deadline:</span> July 31, 2026</li>
                    <li><span className="font-semibold">Workshop:</span> October 21, 2026</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: PARTICIPATION */}
          <section id="participation" className="mb-4">
            <button
              onClick={() => toggleSection('participation')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 text-left">
                Participation
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.participation ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.participation ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="text-gray-900 leading-relaxed">
                  <p>
                    This international cooperation half-day session will be held on <span className="font-semibold">October 21st, 2026</span> in 
                    Cotonou, Benin, as an event affiliated to CARI'2026. It will be a <span className="font-semibold">hybrid meeting</span>, 
                    combining people attending the CARI'2026 main conference itself as well as other participants 
                    joining by a Visio-conference system. The link to be used will be provided later.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: SESSION CHAIRS */}
          <section id="chairs" className="mb-4">
            <button
              onClick={() => toggleSection('chairs')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 text-left">
                Session Chairs
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.chairs ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.chairs ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="text-gray-900 leading-relaxed space-y-2">
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Arnaud AHOUANDJINOU, LRSIA/IFRI - Université d'Abomey-Calavi, Bénin</li>
                    <li>César VIHO, IRISA/Centre Inria de l'Université de Rennes, France</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/V5dtMKsbUCe6UrUL8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-center"
            >
              Submit Your Proposal
            </a>
            <Link 
              to="/program" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-center"
            >
              ← Back to Program
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default InternationalCooperation;