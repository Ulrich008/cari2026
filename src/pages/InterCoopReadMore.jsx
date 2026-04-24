import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const intercoopData = {
  title: "SESSION ON INTERNATIONAL COOPERATION",
  subtitle: "Event affiliated with CARI'2026 Cotonou, Benin",
  url: "https://cari-conf.bj/program/international-cooperation",
  callForContributions: {
    title: "CALL FOR CONTRIBUTIONS",
    highlightedText: "THIS SPECIAL SESSION OF CARI'2026 IS DEDICATED TO SHARE EXPERIENCES ON ONGOING INTERNATIONAL COOPERATION PROJECTS AND EXISTING FUNDINGS IN APPLIED MATHEMATICS AND COMPUTER SCIENCES"
  },
  sections: [
    {
      title: "SCOPE",
      content: "After thirty years of international cooperation between African, European, and international research institutes, the CARI conference (African Conference on Research in Computer Science and Applied Mathematics), came into being and constitutes an ideal place where African, European, and international scientists and researchers meet and exchange. CARI'2026 is therefore a perfect framework for sharing experiences on international collaboration benefits and results. Computer science and applied mathematics make it possible to propose solutions to everyday problems in different areas of society (health, agriculture, environment, etc.). This half-day special session is dedicated to sharing experiences on international cooperation projects in various fields that are part of digital sciences. Part of this session will be devoted to presentations and roundtable discussions of the different existing fundings from international organizations.",
      type: "paragraph"
    },
    {
      title: "Participating in this session will give you the opportunity to:",
      content: [
        "Sharing experiences on issues and benefits of international cooperations",
        "Meet researchers and experienced people who have already worked or are working on international projects to build networks/consortia and apply for large-scale and more ambitious projects.",
        "Find out about sources of funding for international projects at the European scale, such as ANR, CNRS, the French Embassy fundings, Inria, CIRAD, INRAE, IRD, AUF, Marie Curie, etc.",
        "The main levers to activate to secure project fundings from international organizations"
      ],
      type: "ordered-list"
    },
    {
      title: "TOPICS OF INTEREST",
      content: "This special session is devoted to providing a forum for discussions on ongoing international cooperation projects at the intersection of computer science and applied mathematics in various fields in Africa with different application domains (agriculture, environment, health, governance, etc.). A non-exhaustive list is below:",
      items: [
        "Smart Farming for Crop monitoring & forecasting",
        "Smart Cities, Smart Grids for Good Energy",
        "E-Education, E-Government, E-Health",
        "Animal and plant health monitoring",
        "Applied Mathematics and Modelling in Biology, Ecology and Medicine",
        "etc."
      ],
      type: "unordered-list"
    },
    {
      title: "GUIDELINES",
      content: "Researchers, academics, and students working on cooperation projects in the field of computer science and applied mathematics with application in-country development and society field in general in Africa are invited to submit short proposals for oral presentations. A proposal for this special international cooperation session must be in English up to 2 pages (strict maximum limit) and must be submitted only using this <specific template>. For guidance only, proposers should provide information on: Title of the international cooperation project, Context and Objectives of the project, Ongoing work and results, Added Value and Societal Impacts.",
      type: "paragraph"
    },
    {
      title: "SUBMISSIONS",
      content: "Please submit your short paper for special session by email to the session chairs at:",
      email: "cari26.intcoop@asds.africa",
      type: "contact"
    },
    {
      title: "IMPORTANT DATES",
      dates: [
        { label: "Submission deadline", date: "June 15th, 2026" },
        { label: "Notification to authors", date: "June 30th, 2026" },
        { label: "Session date", date: "October 21st, 2026" }
      ],
      type: "dates"
    },
    {
      title: "PARTICIPATION",
      content: "This international cooperation half-day session will be held on October 21st, 2026 in Cotonou, Benin, as an event affiliated to CARI'2026. It will be a hybrid meeting, combining people attending the CARI'2026 main conference itself as well as other participants joining by a Visio-conference system. The link to be used will be provided later.",
      type: "paragraph"
    },
    {
      title: "SESSION CHAIRS",
      chairs: [
        { name: "Arnaud AHOUANDJINOU", affiliation: "LRSIA/FRI - Université d'Abomey-Calavi, Bénin" },
        { name: "César VIHO", affiliation: "IRISA/Centre Inria de l'Université de Rennes, France" }
      ],
      type: "chairs"
    }
  ],
  navigation: {
    links: ["Home", "Calls", "Organization", "Program", "Registration", "Venue", "Sponsors", "Contact"]
  },
  copyright: "© Copyright CARI 2026"
};

const InterCoopReadMore = () => {
  const renderSection = (section, index) => {
    switch (section.type) {
      case "paragraph":
        return (
          <div key={index} className="mb-6">
            <h6 className="text-xl font-bold text-green-600 mb-3">{section.title}</h6>
            <p className="text-gray-900 leading-relaxed text-justify">{section.content}</p>
          </div>
        );

      case "ordered-list":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <ol className="list-decimal ml-6 text-gray-900 leading-relaxed space-y-2">
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>
        );

      case "unordered-list":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <p className="text-gray-900 leading-relaxed mb-3">{section.content}</p>
            <ul className="list-disc ml-6 text-gray-900 leading-relaxed space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        );

      case "contact":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <p className="text-gray-900 leading-relaxed">
              {section.content}{' '}
              <a href={`mailto:${section.email}`} className="text-blue-600 hover:text-blue-800 underline">
                {section.email}
              </a>
            </p>
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

      case "chairs":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <ul className="list-none text-gray-900 leading-relaxed space-y-1">
              {section.chairs.map((chair, idx) => (
                <li key={idx}>• {chair.name}, {chair.affiliation}</li>
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
          
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 uppercase">
            {intercoopData.title}
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            {intercoopData.subtitle}
          </h2>

          <div className="mb-6">
            <a 
              href={intercoopData.url} 
              className="text-blue-600 hover:text-blue-800 underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {intercoopData.url}
            </a>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4 border-b-2 border-red-600 pb-2">
              {intercoopData.callForContributions.title}
            </h3>

            <div className="bg-green-600 text-white p-4 mb-6 rounded-lg">
              <p className="text-center font-bold text-lg md:text-xl">
                {intercoopData.callForContributions.highlightedText}
              </p>
            </div>

            {intercoopData.sections.map((section, index) => renderSection(section, index))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InterCoopReadMore;