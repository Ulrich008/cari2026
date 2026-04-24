import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Données JSON des workshops
const workshopsData = {
  title: "CARI WORKSHOPS",
  intro: [
    "The CARI'2026 workshops cover specific, emerging topics. The purpose of workshops is to provide a comprehensive forum and encourage in-depth discussion of various technical and application issues in specific research fields in computer sciences and applied mathematics.",
    "The accepted Workshops for the eighteenth edition (CARI'2026) of the CARI conference follow:"
  ],
  workshops: [
    {
      id: "daafrica",
      title: "Workshop on Data Science and AI for Agriculture in Africa (DAAfrica'2026)",
      content: "Agriculture remains a cornerstone of Africa's economy and livelihoods, yet the sector faces persistent challenges related to productivity, climate variability, market access, and food security. In response, the African Union Commission has developed a Digital Agriculture Strategy (DAS), adopted in February 2024, to foster universally accessible broadband and unlock the benefits of internet-based services for agriculture. The Inaugural African Union Conference on Digital Agriculture (December 2025, Addis Ababa) further emphasizes the need for innovation, climate-smart practices, and digital transformation to shape agricultural policy for Africa's future. Researchers, academics, and students working on the field of data science with application in agriculture in Africa are invited to submit short papers for oral presentations or posters.",
      hasReadMore: true,
      readMoreLink: "/calls/cari-workshops/daafrica-read-more"
    },
    {
      id: "nlparl",
      title: "Workshop on Natural Language processing for African and low-resource languages (NLP-ARL'2026)",
      content: "Natural language processing has made significant progress driven by advances in artificial intelligence and the advent of Large Language Models. However, these improvements still concern dominant languages such as English and French. For low-resourced languages, including many languages and dialects of Africa, this lack of usable data limits model performance, increases the risk of overfitting, and complicates their integration into operational tools. NLP-ARL Workshop aims to explore the current stakes and future research areas to address the challenges posed by the under-represented languages.",
      hasReadMore: true,
       readMoreLink: "/calls/cari-workshops/nlparl-read-more"  // ✅ Ajout du lien
    },
    {
      id: "cybsec",
      title: "Workshop on Cybersecurity in Africa (CybSecAfrica'2026)",
      content: "Cybersecurity is a universal challenge that requires training, research, and development. In Africa, the community of researchers in this field and their research topics are scattered and poorly identified. This workshop is a first step toward bringing this community together and making proposals for a secure and reliable digital future. The one-day program will combine presentations by guest speakers with group discussions that reflect the participants' areas of interest. Participation is open to all cybersecurity professionals, academics, researchers and students. We welcome all innovative contributions on these topics, regardless of the field of application (health, agriculture, social sciences, digital humanities, etc.). Participation is open to all academics, researchers, students and professionals.",
      hasReadMore: false,
      readMoreLink: null
    },
    {
      id: "intercoop",
      title: "Special session on international cooperation projects (InterCoop'2026)",
      content: "After thirty years of international cooperation between African, European, and international research institutes, the CARI conference (African Conference on Research in Computer Science and Applied Mathematics), came into being and constitutes an ideal place where African, European, and international scientists and researchers meet and exchange. CARI'2026 is therefore a perfect framework for sharing experiences on international collaboration benefits and results. Computer science and applied mathematics make it possible to propose solutions to everyday problems in different areas of society (health, agriculture, environment, etc.). This half-day special session is dedicated to sharing experiences on international cooperation projects in various fields that are part of digital sciences. Part of this session will be devoted to presentations and roundtable discussions of the different existing findings from international organizations. This international cooperation half-day session will be held on October 21st, 2026 in Cotonou, Benin, as an event affiliated to CARI'2026. It will be a hybrid meeting, combining people attending the CARI'2026 main conference itself as well as other participants joining by a Visio-conference system. The link to be used will be provided later.",
      hasReadMore: true,
      readMoreLink: "/calls/cari-workshops/intercoop-read-more"
    }
  ],
  navButtons: [
    { id: "daafrica", label: "DAAfrica'2026" },
    { id: "nlparl", label: "NLP-ARL'2026" },
    { id: "cybsec", label: "CybSecAfrica'2026" },
    { id: "intercoop", label: "InterCoop'2026" }
  ],
  navigation: {
    links: ["Home", "Calls", "Organization", "Program", "Registration", "Venue", "Sponsors", "Contact"]
  },
  copyright: "© Copyright CARI 2026"
};

const Workshops = () => {
  const [openSections, setOpenSections] = useState(
    workshopsData.workshops.reduce((acc, workshop) => {
      acc[workshop.id] = true;
      return acc;
    }, {})
  );

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      
      <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <h1 className="text-4xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
            {workshopsData.title}
          </h1>

          <div className="mb-8 space-y-4 text-gray-900 leading-relaxed text-justify">
            {workshopsData.intro.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {workshopsData.workshops.map((workshop) => (
            <section key={workshop.id} id={workshop.id} className="mb-4">
              <button
                onClick={() => toggleSection(workshop.id)}
                className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-lg md:text-xl font-bold text-green-600 text-left">
                  {workshop.title}
                </h2>
                <svg
                  className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                    openSections[workshop.id] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openSections[workshop.id] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-100 p-6">
                  <div className="text-gray-900 leading-relaxed text-justify space-y-4">
                    <p>{workshop.content}</p>
                    {workshop.hasReadMore && (
                      <p>
                        <Link 
                          to={workshop.readMoreLink} 
                          className="text-green-600 hover:text-green-800 font-semibold underline"
                        >
                          (READ MORE)
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}

          <div className="mt-12 pt-6 border-t border-gray-300">
            <div className="flex flex-wrap justify-center gap-4">
              {workshopsData.navButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => scrollToSection(button.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Workshops;