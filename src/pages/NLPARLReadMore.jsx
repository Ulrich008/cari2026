import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const nlpArlData = {
  title: "NLP FOR AFRICAN AND LOW-RESOURCE LANGUAGES",
  dateLocation: "22 October 2026, Cotonou, Benin",
  sections: [
    {
      title: "SCOPE",
      type: "paragraph",
      content: "Natural language processing has made significant progress driven by advances in artificial intelligence and the advent of Large Language Models. However, these improvements still concern dominant languages such as English and French. For low-resourced languages, including many languages and dialects of Africa, this lack of usable data limits model performance, increases the risk of overfitting, and complicates their integration into operational tools. NLP-ARL Workshop aims to explore the current stakes and future research areas to address the challenges posed by the under-represented languages."
    },
    {
      title: "TOPICS OF INTEREST",
      type: "unordered-list",
      intro: "Topics are expected to cover:",
      items: [
        "Data collection (web scraping, social media, radio, spoken language, etc.)",
        "Modelling/learning (multilingual approaches, transfer learning, LLMs, linguistic, etc.)",
        "Evaluation (creation of benchmarks, evaluation metrics, etc.)",
        "Applications (speech-to-text, media monitoring, specialised chatbots, education, etc.)"
      ]
    },
    {
      title: "CALL FOR PARTICIPATION",
      type: "paragraph",
      content: "We welcome all innovative contributions on these topics, regardless of the field of application (health, agriculture, social sciences, digital humanities, etc.). Participation is open to all academics, researchers, students and professionals."
    },
    {
      title: "SUBMISSIONS",
      type: "submissions",
      content: [
        "Detailed abstracts must be in English and follow the LNCS format (template), with a limit of 6 pages (including the title page, figures, references and optional appendix). Submissions must be sent in PDF format via EasyChair :",
        "Each accepted submission must have at least one author registered for the workshop."
      ],
      submissionLink: "https://easychair.org/conferences/?conf=nlparl2026",
      linkLabel: "submission link"
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
      content: "The workshop will take place in Cotonou, Benin, and will be a hybrid event, combining in-person and online participation."
    },
    {
      title: "WORKSHOP CHAIRS",
      type: "chairs",
      chairs: [
        { 
          name: "Rodrique Kafando", 
          affiliation: "CITADEL - Univ. Virtuelle du Burkina Faso",
          email: "kafando.rodrique@gmail.com"
        },
        { 
          name: "Sarah Valentin", 
          affiliation: "UMR TETIS, Cirad, France",
          email: "sarah.valentin@cirad.fr"
        }
      ]
    }
  ],
  navigation: {
    links: ["Home", "Calls", "Organization", "Program", "Registration", "Venue", "Sponsors", "Contact"]
  },
  copyright: "© Copyright CARI 2026"
};

const NLPARLReadMore = () => {
  const renderSection = (section, index) => {
    switch (section.type) {
      case "paragraph":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <p className="text-gray-900 leading-relaxed text-justify">{section.content}</p>
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
              <p>
                {section.content[0]}{' '}
                <a 
                  href={section.submissionLink} 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.linkLabel}
                </a>
                .
              </p>
              <p>{section.content[1]}</p>
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

      case "chairs":
        return (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">{section.title}</h4>
            <ul className="list-none text-gray-900 leading-relaxed space-y-2">
              {section.chairs.map((chair, idx) => (
                <li key={idx}>
                  • {chair.name} ({chair.affiliation}) -{' '}
                  <a href={`mailto:${chair.email}`} className="text-blue-600 hover:text-blue-800 underline">
                    {chair.email}
                  </a>
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
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 uppercase">
            {nlpArlData.title}
          </h1>

          {/* Date et lieu */}
          <p className="text-xl font-semibold text-gray-700 mb-8">
            {nlpArlData.dateLocation}
          </p>

          {/* Rendu dynamique des sections */}
          {nlpArlData.sections.map((section, index) => renderSection(section, index))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NLPARLReadMore;