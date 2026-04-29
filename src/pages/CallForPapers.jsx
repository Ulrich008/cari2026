import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const content = {
  title: "CALL FOR PAPERS",
  subtitle: {
    conference: "The 18th African Conference on Research in Computer Science and Applied Mathematics (CARI'2026)",
    dates: "October 21-24, 2026 University of Abomey-Calavi, Cotonou – Benin",
  },
  sections: {
    overview: {
      title: "OVERVIEW",
      paragraphs: [
        {
          text: "CARI, the African Conference on Research in Computer Science and Applied Mathematics, is the flagship event of ASDS – African Society in Digital Science (",
          link: { label: "https://asds.africa/", url: "https://asds.africa/" },
          textAfter: "). It brings together researchers and practitioners from Africa and beyond to present and discuss advances in computer science and applied mathematics, aiming to strengthen collaboration, international cooperation, and the visibility of African research while fostering innovation to address the continent's challenges.",
        },
        {
          text: "CARI'2026 will be held on October 21-24, 2026. The program will feature keynote talks, technical sessions, poster presentations, and panel discussions, preceded by workshops and tutorials on October 22, 2026.",
        },
      ],
    },
    scope: {
      title: "SCOPE AND TOPICS OF INTEREST",
      intro: "CARI 2026 invites submissions in English of full papers presenting original research results and short papers reporting work in progress or position papers.",
      tracksIntro: "The conference is structured around two main tracks: Computer Science and Applied Mathematics. Topics of interest include, but are not limited to:",
      tracks: [
        {
          name: "Track: Computer Science",
          topics: [
            "Algorithms and optimisation",
            "Artificial Intelligence, machine learning, and data science",
            "Distributed systems and cloud computing",
            "Networking and the Internet of Things",
            "Security, privacy, and dependable systems",
            "Digital sovereignty and computing for Africa",
          ],
        },
        {
          name: "Track: Applied Mathematics",
          topics: [
            "Analysis of dynamical Systems",
            "Partial differential equations and their applications",
            "High-performance scientific computing",
            "Mathematical foundations of artificial intelligence",
            "Mathematical Modelling",
            "Stochastic Systems",
          ],
        },
      ],
      note: "CARI'2026 especially welcomes applied research addressing African contexts and challenges, with application domains including agriculture, healthcare, education, environmental systems, transportation, and logistics.",
    },
    dates: {
      title: "IMPORTANT DATES (All deadlines are at 23:59 GMT)",
      items: [
        {
          label: "Paper submission:",
          value: "10 April, 2026",
          strikethrough: "30 March, 2026",
          extended: true,
        },
        {
          label: "Notification to authors:",
          value: "22 June, 2026",
        },
        {
          label: "Camera-ready deadline:",
          value: "6 July, 2026",
        },
      ],
    },
    submission: {
      title: "PAPER SUBMISSION AND PUBLICATION",
      intro: "CARI'2026 accepts submissions (in English) in three categories:",
      categories: [
        "Full papers describing original research (up to 14 pages excluding references).",
        "Work-in-progress papers on early results (up to 7 pages in length excluding references).",
        "Position papers proposing novel or unconventional ideas - preferably supported by empirical data and measurements - that differ from prior published work (up to 7 pages excluding references).",
      ],
      paragraphs: [
        "All submissions must be original, unpublished, and not under consideration elsewhere. All submissions will be reviewed based on relevance, originality, significance, and clarity.",
        "The use of AI systems to generate text (e.g. LLM) for inclusion in a CARI submission is only allowed for improving language and readability and if its role is properly documented in the paper (in the acknowledgements section).",
        "CARI 2026 employs a single-blind review process, with authors' names included in submissions.",
        "As CARI'2024, all accepted papers should be published in Springer's book series Communications in Computer and Information Science (CCIS) or Trends in Mathematics and made available through the SpringerLink Digital Library (indexed in Scopus, ACM Digital Library, DBLP, and Google Scholar). Selected papers from CARI'2026 will be invited to submit extended versions for possible publication in ARIMA.",
      ],
      easychair: {
        text: "Papers should follow the Lecture Notes in Computer Science (LNCS) format (Springer) and be submitted via",
        linkLabel: "EasyChair",
        linkUrl: "https://easychair.org/conferences/?conf=cari2026",
      },
    },
    moreInfo: {
      title: "FOR MORE INFORMATION",
      email: {
        label: "E-mail:",
        address: "Cari2026bj@gmail.com",
      },
    },
  },
};

const CallForPapers = () => {
  const [openSections, setOpenSections] = useState({
    overview: true,
    scope: true,
    dates: true,
    submission: true,
  });

  const location = useLocation();
  const datesRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#important-dates') {
      setOpenSections(prev => ({ ...prev, dates: true }));
      setTimeout(() => {
        if (datesRef.current) {
          datesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const SectionButton = ({ sectionKey, title }) => (
    <button
      onClick={() => toggleSection(sectionKey)}
      className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
    >
      <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">{title}</h2>
      <svg
        className={`w-6 h-6 text-green-600 transition-transform duration-300 ${openSections[sectionKey] ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  const CollapseWrapper = ({ sectionKey, children }) => (
    <div className={`overflow-hidden transition-all duration-300 ${openSections[sectionKey] ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="bg-gray-100 p-6">{children}</div>
    </div>
  );

  const { sections } = content;

  return (
    <>
      <Header />
      <Navigation />
      <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white min-h-screen">

        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
          {content.title}
        </h1>

        <div className="mb-8">
          <p className="text-gray-900 leading-relaxed">
            <span className="font-semibold">{content.subtitle.conference}</span>
            <br />
            {content.subtitle.dates}
          </p>
        </div>

        {/* OVERVIEW */}
        <section className="mb-4">
          <SectionButton sectionKey="overview" title={sections.overview.title} />
          <CollapseWrapper sectionKey="overview">
            <div className="space-y-4 text-gray-900 leading-relaxed">
              {sections.overview.paragraphs.map((p, i) =>
                p.link ? (
                  <p key={i}>
                    {p.text}
                    <a href={p.link.url} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                      {p.link.label}
                    </a>
                    {p.textAfter}
                  </p>
                ) : (
                  <p key={i}>{p.text}</p>
                )
              )}
            </div>
          </CollapseWrapper>
        </section>

        {/* SCOPE */}
        <section className="mb-4">
          <SectionButton sectionKey="scope" title={sections.scope.title} />
          <CollapseWrapper sectionKey="scope">
            <div className="space-y-4 text-gray-900 leading-relaxed">
              <p>
                {sections.scope.intro.split('in English').map((part, i, arr) =>
                  i < arr.length - 1
                    ? <span key={i}>{part}<span className="font-semibold">in English</span></span>
                    : <span key={i}>{part}</span>
                )}
              </p>
              <p>
                {sections.scope.tracksIntro
                  .split(/(Computer Science|Applied Mathematics)/)
                  .map((part, i) =>
                    part === 'Computer Science' || part === 'Applied Mathematics'
                      ? <span key={i} className="font-bold">{part}</span>
                      : <span key={i}>{part}</span>
                  )}
              </p>
              {sections.scope.tracks.map((track, i) => (
                <div key={i} className="mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">{track.name}</h3>
                  <ul className="space-y-2 ml-4">
                    {track.topics.map((topic, j) => (
                      <li key={j} className="flex items-start">
                        <span className="mr-2">-</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="mt-6 italic">
                {sections.scope.note.split('application domains').map((part, i, arr) =>
                  i < arr.length - 1
                    ? <span key={i}>{part}<span className="font-bold">application domains</span></span>
                    : <span key={i}>{part}</span>
                )}
              </p>
            </div>
          </CollapseWrapper>
        </section>

        {/* IMPORTANT DATES */}
        <section id="important-dates" ref={datesRef} className="mb-4 scroll-mt-24">
          <SectionButton sectionKey="dates" title={sections.dates.title} />
          <CollapseWrapper sectionKey="dates">
            <div className="space-y-2 text-gray-900 leading-relaxed">
              {sections.dates.items.map((item, i) => (
                <p key={i}>
                  <span className="mr-2">-</span>
                  <span className="font-bold">{item.label}</span>{' '}
                  {item.extended && (
                    <>
                      <span className="font-bold line-through mr-2">{item.strikethrough}</span>
                      <span> → </span>
                      <span className="font-bold"> EXTENDED DEADLINE : </span>
                    </>
                  )}
                  <span className="font-bold text-red-600">{item.value}</span>
                </p>
              ))}
            </div>
          </CollapseWrapper>
        </section>

        {/* PAPER SUBMISSION AND PUBLICATION */}
        <section className="mb-4">
          <SectionButton sectionKey="submission" title={sections.submission.title} />
          <CollapseWrapper sectionKey="submission">
            <div className="space-y-4 text-gray-900 leading-relaxed">
              <p>{sections.submission.intro}</p>
              <ul className="space-y-2 ml-4">
                {sections.submission.categories.map((cat, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>
              <p>{sections.submission.paragraphs[0]}</p>
              <p>{sections.submission.paragraphs[1]}</p>
              <p>
                {sections.submission.easychair.text}{' '}
                <a href={sections.submission.easychair.linkUrl} className="text-blue-600 hover:text-blue-800 underline font-bold" target="_blank" rel="noopener noreferrer">
                  {sections.submission.easychair.linkLabel}
                </a>{' '}
                (<a href={sections.submission.easychair.linkUrl} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                  {sections.submission.easychair.linkUrl}
                </a>).
              </p>
              <p>{sections.submission.paragraphs[2]}</p>
              <p>{sections.submission.paragraphs[3]}</p>
            </div>
          </CollapseWrapper>
        </section>

        {/* FOR MORE INFORMATION */}
        <section className="mb-8 mt-8">
          <div className="border-t-4 border-b-4 border-green-600 py-4">
            <h2 className="text-center text-lg md:text-xl font-bold text-gray-900 uppercase mb-4">
              {sections.moreInfo.title}
            </h2>
            <div className="text-center space-y-2">
              <p className="text-gray-900">
                <span className="font-bold">{sections.moreInfo.email.label}</span>{' '}
                <a href={`mailto:${sections.moreInfo.email.address}`} className="text-blue-600 hover:text-blue-800 underline">
                  {sections.moreInfo.email.address}
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