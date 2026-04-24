import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const daafricaData = {
  title: "DAAFRICA'2026 – CARI'2026",
  subtitle: "Workshop on Data Science and AI for Agriculture in Africa",
  date: "October 21, 2026",
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
          "Agriculture remains a cornerstone of Africa's economy and livelihoods, yet the sector faces persistent challenges related to productivity, climate variability, market access, and food security. In response, the African Union Commission has developed a Digital Agriculture Strategy (DAS), adopted in February 2024, to foster universally accessible broadband and unlock the benefits of internet-based services for agriculture. The Inaugural African Union Conference on Digital Agriculture (December 2025, Addis Ababa) further emphasizes the need for innovation, climate-smart practices, and digital transformation to shape agricultural policy for Africa's future.",
          "Data science has become a key enabler in this transformation. With the growing accessibility of data, farmers can now analyze information to facilitate decision-making. Emerging technologies such as the Internet of Things (IoT) enable the collection and storage of farm and environmental data (e.g., soil moisture, water levels, weather conditions) in dedicated databases or data warehouses. These agricultural datasets can be combined with other sources—remote sensing, weather stations, satellites, web platforms, and social media—to address new challenges, including the ingestion and integration of heterogeneous data.",
          "Data science in agriculture aims to explore and mine agricultural data using a range of techniques, including machine learning, deep learning, computer vision, text mining, and large language models (LLMs). By leveraging these tools, agricultural professionals and decision-makers can generate actionable insights and knowledge to guide agricultural activities across Africa. This aligns with the focus of many African initiatives on digital agriculture: deploying low-cost, equitable digital tools to collect, manage, and analyze reliable data for decision-making, risk management, and support for the agro-ecological transition."
        ]
      },
      {
        title: "TOPICS OF INTEREST",
        type: "unordered-list",
        intro: "This workshop encompasses all aspects concerning the intersection of data science and AI for agriculture in Africa, including but not limited to:",
        items: [
          "Smart Farming",
          "Yield and Production",
          "Plant Species Identification",
          "Land Cover Monitoring",
          "Crop Recommendation",
          "Crop Monitoring and Forecasting",
          "Animal and Plant Health Monitoring",
          "Agroecology and Water Management",
          "Food Safety and Security",
          "Nutrition and Health",
          "Forests and Agroforests",
          "Soil Preservation",
          "Policy and Regulation"
        ]
      },
      {
        title: "SUBMISSIONS",
        type: "submissions",
        content: [
          "Researchers, academics, and students working on the field of data science with application in agriculture in Africa are invited to submit short papers for oral presentations or posters. Submitted abstracts must be in English and will be reviewed by the workshop committees for suitability and interest to the DAAfrica audience. The authors can submit papers of unpublished work reporting original and early results, introducing new ideas or describing prototypes.",
          "Every accepted submission must have at least one author registered for the workshop. All submitted extended abstracts must follow the LNCS format in latex with a page limit of up to 6 pages including the title page, figures, references, and an optional appendix. The abstracts should be submitted electronically in PDF format via EasyChair via the following link:",
          "Accepted extended abstract will be published as CEUR proceedings."
        ],
        links: [
          {
            url: "https://www.springer.com/gp/computer-science/lcs/conference-proceedings-guideline",
            label: "https://www.springer.com/gp/computer-science/lcs/conference-proceedings-guideline"
          },
          {
            url: "https://easychair.org/conferences/?conf=dafrica2026",
            label: "https://easychair.org/conferences/?conf=dafrica2026"
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
        title: "WORKSHOP CHAIRS",
        type: "chairs",
        chairs: [
          { name: "Paulin Melatagia", affiliation: "University of Yaoundé I, Cameroun" },
          { name: "Mathieu Roche", affiliation: "CIRAD, UMR TETIS, France" }
        ]
      }
    ]
  },
  navigation: {
    links: ["Home", "Calls", "Organization", "Program", "Registration", "Venue", "Sponsors", "Contact"]
  },
  copyright: "© Copyright CARI 2026"
};

const DAAfricaReadMore = () => {
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
              <p>
                {section.content[1]}{' '}
                <a 
                  href={section.links[0].url} 
                  className="text-blue-600 hover:text-blue-800 underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.links[0].label}
                </a>
                {' '} with a page limit of up to 6 pages including the title page, figures, references, and an optional appendix. The abstracts should be submitted electronically in PDF format via EasyChair via the following link:{' '}
                <a 
                  href={section.links[1].url} 
                  className="text-blue-600 hover:text-blue-800 underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.links[1].label}
                </a>
              </p>
              <p>{section.content[2]}</p>
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
          
          <h1 className="text-4xl md:text-4xl font-bold text-red-600 mb-4 uppercase">
            {daafricaData.title}
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
            {daafricaData.subtitle}
          </h2>

          <p className="text-xl font-semibold text-gray-700 mb-4">
            {daafricaData.date}
          </p>

          <div className="mb-8 space-y-1 text-gray-900">
            <p>{daafricaData.support.workshopSupported}</p>
            <p>
              {daafricaData.support.affiliation} ({' '}
              <a 
                href={daafricaData.support.affiliationUrl} 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {daafricaData.support.affiliationUrl}
              </a>
              {' '})
            </p>
            <p>{daafricaData.support.location}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4 border-b-2 border-red-600 pb-2">
              {daafricaData.callForShortPapers.title}
            </h3>

            {daafricaData.callForShortPapers.sections.map((section, index) => renderSection(section, index))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DAAfricaReadMore;