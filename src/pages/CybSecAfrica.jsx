import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const cybSecAfricaData = {
  title: "CyberAfrica'2026 - CARI'2026",
  subtitle: "Cybersecurity in Africa Workshop : Towards a secure and reliable digital future",
  date: "October 21, 2026",
  location: "Cotonou, Benin",
  support: {
    workshopSupported: "Workshop supported by ASDS",
    affiliation: "Event affiliated with CARI'2026",
    affiliationUrl: "https://cari-conf.bj/",
    location: "Cotonou, Benin"
  },
  callForShortPapers: {
    title: "CALL FOR SHORT PAPERS",
    sections: [
      {
        title: "SCOPE",
        type: "paragraphs",
        content: [
          "The growing role of digital technology in our societies and economies brings new threats to the individuals, businesses, and government agencies that use it: privacy violations, intrusions, theft, and even destruction. These threats are undermining trust in digital technology, and restoring that trust will require overcoming several scientific challenges: securing IT systems by guaranteeing the availability of services, preserving the integrity and confidentiality of private and sensitive data, securing electronic protocols and transactions, defending against malware, anticipating future attacks, working on the resilience of organizations and services, and developing appropriate security policies. Cybersecurity refers to all the techniques, practices, technologies, and processes designed to protect computer systems, networks, data, and users against cyber threats (attacks, intrusions, theft, sabotage, breach of trust, etc.).",
          "Cybersecurity is a universal challenge that requires training, research, and development. In Africa, the community of researchers in this field and their research topics are scattered and poorly identified. This workshop is a first step toward bringing this community together and making proposals for a secure and reliable digital future. The workshop program will combine presentations by guest speakers with group discussions that reflect the participants' areas of interest.",
          "Participation is open to all cybersecurity professionals, academics, researchers and students."
        ]
      },
      {
        title: "TOPICS OF INTEREST",
        type: "unordered-list",
        intro: "Topics are expected to cover :",
        items: [
          "Governance: national strategies, policies, legislation, and implementation challenges;",
          "Research and innovation: critical security challenges related to the underlying infrastructure across sectors (electricity grids, communications, government, finance, distance learning, etc.);",
          "Skills training and education, awareness-raising for all ages."
        ]
      },
      {
        title: "SUBMISSIONS",
        type: "submissions",
        content: [
          "All cybersecurity professionals, academics, researchers and students are invited to submit short papers (extended abstracts 2-3 pages) for oral presentations or posters.",
          "Submitted abstracts must be in English and will be reviewed by the workshop committee for suitability and interest to the Cybersecurity in Africa audience. The authors may submit unpublished work reporting original and early results, introducing new ideas or describing prototypes.",
          "Every accepted submission must have at least one author registered for the workshop.",
          "The abstracts should be submitted electronically on the workshop web site and follow the format available on the submission page.",
          "Proceedings of the workshop will be published on the HAL archive."
        ],
        links: [
          {
            url: "https://cari-conf.bj/registration",
            label: "https://cari-conf.bj/registration"
          },
          {
            url: "https://caricyber.sciencesconf.org",
            label: "https://caricyber.sciencesconf.org"
          },
          {
            url: "https://hal.science/",
            label: "https://hal.science/"
          }
        ]
      },
      {
        title: "IMPORTANT DATES",
        type: "dates",
        dates: [
          { label: "Submission deadline", date: "June 26, 2026" },
          { label: "Notification to authors", date: "July 15, 2026" },
          { label: "Camera-ready deadline", date: "July 31, 2026" },
          { label: "Workshop", date: "October 21, 2026" }
        ]
      },
      {
        title: "PARTICIPATION",
        type: "paragraph",
        content: "The workshop will be held in Cotonou, Benin, as an event affiliated to CARI'2026. This workshop will be a hybrid event that combines a \"live\" in-person event with a \"virtual\" online component."
      },
      {
        title: "WORKSHOP CHAIRS AND ORGANISERS",
        type: "chairs",
        chairs: [
          { name: "Jules Dégila", affiliation: "Université d'Abomey-Calavi - UAC, Bénin", role: "co-Chair" },
          { name: "Assane Gueye", affiliation: "UADB/CMU-Africa", role: "co-Chair" },
          { name: "Hélène Kirchner", affiliation: "Inria", role: "" },
          { name: "Aurélie Kpoze", affiliation: "Inria", role: "" },
          { name: "Jean-Baptiste Gandonou", affiliation: "UAC", role: "" }
        ]
      }
    ]
  },
  navigation: {
    links: ["Home", "Calls", "Organization", "Program", "Registration", "Venue", "Sponsors", "Contact"]
  },
  copyright: "© Copyright CARI 2026"
};

const CybSecAfrica = () => {
  const renderSection = (section, index) => {
    switch (section.type) {
      case "paragraphs":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <div className="text-gray-900 leading-relaxed text-justify space-y-4">
              {section.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        );

      case "unordered-list":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <p className="text-gray-900 leading-relaxed mb-3">{section.intro}</p>
            <ul className="list-disc ml-6 text-gray-900 leading-relaxed space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        );

      case "submissions":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <div className="text-gray-900 leading-relaxed space-y-3">
              <p>{section.content[0]}</p>
              <p>{section.content[1]}</p>
              <p>
                {section.content[2]}{' '}
                <a 
                  href={section.links[0].url} 
                  className="text-blue-600 hover:text-blue-800 underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.links[0].label}
                </a>
                .
              </p>
              <p>
                {section.content[3]}{' '}
                <a 
                  href={section.links[1].url} 
                  className="text-blue-600 hover:text-blue-800 underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.links[1].label}
                </a>
                .
              </p>
              <p>
                {section.content[4]}{' '}
                <a 
                  href={section.links[2].url} 
                  className="text-blue-600 hover:text-blue-800 underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.links[2].label}
                </a>
              </p>
            </div>
          </div>
        );

      case "dates":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <ul className="list-none text-gray-900 leading-relaxed space-y-1">
              {section.dates.map((dateItem, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{dateItem.label}:</span> {dateItem.date}
                </li>
              ))}
            </ul>
          </div>
        );

      case "paragraph":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <p className="text-gray-900 leading-relaxed">{section.content}</p>
          </div>
        );

      case "chairs":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <ul className="list-none text-gray-900 leading-relaxed space-y-1">
              {section.chairs.map((chair, idx) => (
                <li key={idx}>
                  • {chair.name}, {chair.affiliation} {chair.role && `(${chair.role})`}
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      
      <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Titre principal */}
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2 uppercase">
            {cybSecAfricaData.title}
          </h1>

          {/* Sous-titre */}
          <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
            {cybSecAfricaData.subtitle}
          </h2>

          {/* Date et lieu */}
          <p className="text-lg font-semibold text-gray-700 mb-2">
            {cybSecAfricaData.date}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-6">
            {cybSecAfricaData.location}
          </p>

          {/* Informations de support et affiliation */}
          <div className="mb-8 space-y-1 text-gray-900">
            <p>{cybSecAfricaData.support.workshopSupported}</p>
            <p>
              {cybSecAfricaData.support.affiliation} ({' '}
              <a 
                href={cybSecAfricaData.support.affiliationUrl} 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cybSecAfricaData.support.affiliationUrl}
              </a>
              {' '})
            </p>
            <p>{cybSecAfricaData.support.location}</p>
          </div>

          {/* CALL FOR SHORT PAPERS */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4 border-b-2 border-red-600 pb-2">
              {cybSecAfricaData.callForShortPapers.title}
            </h3>

            {/* Rendu dynamique des sections */}
            {cybSecAfricaData.callForShortPapers.sections.map((section, index) => renderSection(section, index))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CybSecAfrica;