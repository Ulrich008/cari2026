import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const TechnicalProgramCommittee = () => {
  const [openChairsSection, setOpenChairsSection] = useState(true);
  const [openCSSection, setOpenCSSection] = useState(true);
  const [openMathSection, setOpenMathSection] = useState(true);

  // CHAIR
  const chairs = [
    {
      name: 'Mathieu ROCHE',
      title: 'CIRAD, UMR TETIS, France',
      image: '/assets/roche.jpeg',
    },
  ];

  // TRACK CO-CHAIRS COMPUTER SCIENCE
  const trackCSCoChairs = [
    {
      name: 'César VIHO',
      title: 'IRISA/Université de Rennes, France',
      image: '/assets/VIHO.jpeg',
    },
    {
      name: 'Paulin MELATAGIA',
      title: 'Univ. Yaoundé & ASDS, Cameroun',
      image: '/assets/paulin.png',
    },
  ];

  // TRACK CO-CHAIRS APPLIED MATHEMATICS
  const trackMathCoChairs = [
    {
      name: 'Nabil GMATI',
      title: 'ENIT, Université de Tunis El Manar, Tunisie',
      image: '/assets/nabil.webp',
    },
    {
      name: 'Suzanne TOUZEAU',
      title: 'INRAE, France',
      image: '/assets/suz.jpeg',
    },
  ];

  // MEMBERS - COMPUTER SCIENCE
  const membersCS = [
    { name: 'Adjé Erick', fullText: "Université d'Abomey-Calavi, Université du Littoral Côte d'Opale, Bénin, Computer Vision, Deep Learning, Machine learning" },
    { name: 'Ahouandjinou Sèmèvo Arnaud R. M.', fullText: "institut de formation et de recherche en informatique de l'université d'abomey-calavi" },
    { name: 'Ait Omar Driss', fullText: "University of Sultan Moulay Slimane, Morocco, Network Security, Communication Network, Artificial Intelligence, Optimization, Game Theory" },
    { name: 'Ait-Chellouche Soraya', fullText: "University of Rennes, France, Network optimization, IoT, AI for networking" },
    { name: 'Alatrista-Salas Hugo', fullText: "Pontificia Universidad Católica del Perú" },
    { name: 'Ametepe Adoté', fullText: "IMSP" },
    { name: 'André Pascal', fullText: "LS2N - University of Nantes, France, Software Engineering, Model & Language Driven Engineering, Information Systems, Manufacturing Systems" },
    { name: 'Aoga John Oscar Raoul', fullText: "UCLouvain, Belgique, Data Mining, Artificial intelligence, Combinatorial optimization, Natural language Processing" },
    { name: 'Apeke Sena', fullText: "Laboratoire de Recherche en Science de l'Ingénieur (LARSI), Universite de Lomé, Togo, Computer Vision, AI (Machine learning, Deep Learning, NLP, Transformers)" },
    { name: 'Armant Vincent', fullText: "Institut de Recherche pour le Développement, France" },
    { name: 'Assogba Kokou', fullText: "Université Abomey-Calavi (UAC)" },
    { name: 'Atemezing Ghislain', fullText: "ERA" },
    { name: 'Atig Mohamed Faouzi', fullText: "Uppsala University" },
    { name: 'Aza-Gnandji Maurel', fullText: "University of Abomey-Calavi" },
    { name: 'Azehoun Pazou Mahugnon Géraud', fullText: "UNSTIM" },
    { name: 'Ba Mouhamadou', fullText: "INRAE, France, Knowledge Engineering, Semantic Web, Text and Data Mining" },
    { name: 'Barkaoui Kamel', fullText: "CNAM, Paris" },
    { name: 'Béchet Nicolas', fullText: "IRISA - Université Bretagne Sud, France, Deep Learning, Machine learning, NLP" },
    { name: 'Belala Faiza', fullText: "LIRE Laboratory, University Abdelhamid Mehri of Constantine 2, Algeria" },
    { name: 'Belhadef Hacene', fullText: "University Abdelhamid Mehri of Constantine 2, Algeria, Quantum Computing, Natural Language Processing" },
    { name: 'Belkahla Driss Olfa', fullText: "University of Manouba, Tunisia" },
    { name: 'Ben Yahia Sadok', fullText: "University of Southern Denmark, Denmark, Computer Vision, Deep Learning, Machine learning, Ontology engineering" },
    { name: 'Benamrane Nacéra', fullText: "Laboratoire SIMPA, Universite des Sciences et Technologies d'Oran USTO-MB, Algeria, Computer Vision, Image processing, Medical Imaging, Artificial Intelligence" },
    { name: 'Bonkano Moussa', fullText: "ASDS" },
    { name: 'Boufaida Mahmoud', fullText: "Université Abdelhamid Mehri -Constantine 2, Algeria, Information Systems, Advanced Data Bases, Business Process Management, Multi-agent Systems" },
    { name: 'Boughanem Mohand', fullText: "IRIT University Paul Sabatier Toulouse" },
    { name: 'Brice Ekane', fullText: "IRISA - University Of Rennes" },
    { name: 'Camara Gaoussou', fullText: "Université Alioune Diop de Bambey - Sénégal" },
    { name: 'Chasseray Yohann', fullText: "Centre Génie Industriel - IMT Mines Albi-Carmaux" },
    { name: 'Chaudron Michel', fullText: "Eindhoven University of Technology, The Netherlands, Software Engineering, Software Architecture, Modeling and Design, Digital Twins" },
    { name: 'Cokouvi Joyce Elvis', fullText: "Université de Sherbrooke" },
    { name: 'Comlan Maurice', fullText: "University of Abomey-Calavi" },
    { name: 'da Costa Pereira Célia', fullText: "Université Côte d'Azur" },
    { name: 'Dagba Theophile', fullText: "University of Abomey-Calavi, Benin, Artificial Intelligence, Natural Language Processing, Data Mining" },
    { name: 'Dembele Jean Marie', fullText: "Université Gaston Berger, Saint-Louis, Sénégal, Machine Learning, Artificial Intelligence, Modeling and Simulation" },
    { name: 'Der Moustapha', fullText: "ESMT, Senegal, Computer Vision, AI (Machine learning, Deep Learning, NLP, Transformers)" },
    { name: 'Diallo Nafi', fullText: "Amazon Web Services" },
    { name: 'Diallo Mohamed Bobo', fullText: "UFHB" },
    { name: 'Diarra Mamadou', fullText: "Université Félix Houphouët-Boigny" },
    { name: 'Djotio Ndie Thomas', fullText: "LIRIMA, MASECNeSS Team leader, University of Yaounde 1" },
    { name: 'Erritali Mohammed', fullText: "Faculté des sciences et techniques" },
    { name: 'Etiegne Saly Martine', fullText: "Université Alassane Ouattara" },
    { name: 'Fendji Louis', fullText: "University of Ngaoundere" },
    { name: 'Fernandez Romain', fullText: "CIRAD, France, Image processing, Deep learning, Plant phenotyping" },
    { name: 'Fokou Pelap Géraud', fullText: "University of Dschang, Cameroon, Artificial Intelligence, Knowledge Graph, Semantic Web" },
    { name: 'Frédéric Ouedraogo Tounwendyam', fullText: "Université Norbert ZONGO" },
    { name: 'Gamatie Abdoulaye', fullText: "LIRMM, CNRS, Université de Montpellier, France, Embedded systems, Software engineering" },
    { name: 'Guermouche Abdou', fullText: "Univ. Bordeaux1 / INRIA Futurs" },
    { name: 'Gueye Bamba', fullText: "Universite Cheikh Anta Diop de Dakar, Senegal, Sustainable communication networks, Sensor-based epidemiology detection" },
    { name: 'Hacid Mohand-Said', fullText: "LIRIS-CNRS, Universtié Claude Bernard Lyon 1" },
    { name: 'Hadjadj-Aoul Yassine', fullText: "University of Rennes 1" },
    { name: 'Halidou Aminou', fullText: "Université de Yaoundé I (UYI), Cameroon, AI-Computer Vision" },
    { name: 'Hamza Lamia', fullText: "University of bejaia, Algeria, Computer Security, Formal Techniques, Artificiel Intelligence" },
    { name: 'Hochon Jean-Claude', fullText: "AIRBUS SAS, France, Artificial Intelligence, Data Science, Business Process Management" },
    { name: 'Houndji Vinasétan Ratheil', fullText: "Université d'Abomey-Calavi (UAC), Bénin, Machine Learning, Constraint Programming, Optimization" },
    { name: 'Hounguè Pélagie', fullText: "Institut de Mathématiques et de Sciences Physiques, Université d'Abomey-Calavi (IMSP-UAC), Bénin, Computer Security, Artificiel Intelligence, E-learning" },
    { name: 'Hurfin Michel', fullText: "INRIA, Morocco" },
    { name: 'Idrissi Najlae', fullText: "FACULTY OF SCIENCES AND TECHNIQUES BENI MELLAL" },
    { name: 'Iloga Biyik Pierre Sylvain', fullText: "University of Maroua, Cameroon, Machine learning, Stochastic learning, Sequential data modeling" },
    { name: 'Interdonato Roberto', fullText: "CIRAD - UMR TETIS" },
    { name: 'Jmaiel Mohamed', fullText: "University of Sfax" },
    { name: 'Jossou Thierry Rock', fullText: "University Mohammed V of Rabat" },
    { name: 'Kafando Rodrique', fullText: "CITADEL" },
    { name: 'Kamla Vivient Corneille', fullText: "University of Ngaoundere" },
    { name: 'Kasunzi Landry Mbale', fullText: "Université Nouveaux Horizons, Lubumbashi, DRC, Machine learning, Federated Machine learning, AI & healthcare, Cybersecurity" },
    { name: 'Kengne Tchendji Vianney', fullText: "University of Dschang" },
    { name: 'Kerre Deperias', fullText: "Strathmore University, Kenya, Artificial Intelligence, Machine Learning, Information Extraction, Semantic Web" },
    { name: 'Kiki Probus', fullText: "Ecole Doctorale des Sciences de l'Ingénieur, University of Abomey-Calavi, Benin" },
    { name: 'Kirchner Hélène', fullText: "INRIA, Formal specifications, logical framework, program verification, cybersecurity" },
    { name: 'Konnon Abel M.', fullText: "INSTI/ UNSTIM University" },
    { name: 'Kouamou Georges Edouard', fullText: "ENSPY" },
    { name: 'Laleye Frejus', fullText: "Institut de Mathematiques et de Sciences Physiques" },
    { name: 'Larmande Pierre', fullText: "IRD" },
    { name: 'Lawall Julia', fullText: "Inria-Paris, France, Operating systems, Software engineering, Programming languages" },
    { name: 'Lemoisson Philippe', fullText: "Cirad, France, Knowledge management" },
    { name: 'Lentschat Martin', fullText: "LERASS - University of Toulouse Jean Jaurès" },
    { name: 'Ma Thanh', fullText: "Can Tho University" },
    { name: 'Maaradji Abderrahmane', fullText: "UDST" },
    { name: 'Maissa Mbaye', fullText: "Gaston Berger University, Senegal" },
    { name: 'Marir Dr Naila', fullText: "Effat College of Engineering Effat University, Jeddah, Saudi Arabia" },
    { name: 'Max Fréjus Owolabi Sanya', fullText: "Université d'Abomey-Calavi, Bénin, Machine learning, Signal Processing, Optical communications, IoT" },
    { name: 'Melatagia Yonta Paulin', fullText: "University of Yaounde I" },
    { name: 'Menya Edmond', fullText: "Strathmore University" },
    { name: 'Metongnon Lionel', fullText: "UCLouvain, UAC, Belgique, Network Security, Cybersecurity, Internet of Things" },
    { name: 'Miary Andrianjaka Rapatsalahy', fullText: "Université Mahajanga-ISSTM, Madagascar, Software Engineering, Model-Driven Engineering, DevOps, Machine Learning, Distributed Systems" },
    { name: 'Mili Ali', fullText: "NJIT" },
    { name: 'Mitton Nathalie', fullText: "INRIA" },
    { name: 'Mohameden Ahmed', fullText: "Faculty of Sciences and Techniques, Nouakchott University, Mauritania, Machine learning, Deep Learning, Computer Vision, VLM" },
    { name: 'Mokhtar Sellami', fullText: "Annaba University" },
    { name: 'Mosbah Mohamed', fullText: "LaBRI - University of Bordeaux" },
    { name: 'Mousse Ange Mikaël', fullText: "Institut Universitaire de Technologie, Université de Parakou" },
    { name: 'Ndoundam Rene', fullText: "University of Yaounde 1, Cameroon, Cryptography, Security" },
    { name: 'Nguena Timo Omer', fullText: "Université du Québec en Outaouais" },
    { name: 'Nkambou Roger', fullText: "Université du Québec à Montréal" },
    { name: 'Nkenlifack Marcellin', fullText: "URIFIA, DMI, FS, University of Dschang" },
    { name: 'Nouvel Damien', fullText: "INaLCO" },
    { name: 'Nwaocha Vivian', fullText: "National Open University of Nigeria" },
    { name: 'Nyamen Tato Ange Adrienne', fullText: "Université Laval, Canada, Artificial intelligence in education, Machine learning, datamining, Experts systems, User modeling" },
    { name: 'Odumuyiwa Victor', fullText: "University of Lagos" },
    { name: 'Olle Olle Daniel Claude Georges Delort', fullText: "Huazhong University of Sciences and Technology (HUST)" },
    { name: 'Oluwade Bamidele', fullText: "Dewade Systems Limited, Ibadan, Nigeria" },
    { name: 'Oluwatope Ayodeji', fullText: "Obafemi Awolowo University, Ile-Ife, Nigeria" },
    { name: 'Owuor Dickson', fullText: "Strathmore University" },
    { name: 'Pradal Christophe', fullText: "CIRAD, INRIA, France, 3D Plant Modeling, Distributed computing, Software engineering, Topology/Geometry, Simulation" },
    { name: 'Rajaonarivo Landy', fullText: "INRAE, UMR TETIS" },
    { name: 'Razafindrakoto Nicolas Raft', fullText: "Université de l'Itasy, Madagascar, Network & telecom, Software engineering" },
    { name: 'Reynaud Justine', fullText: "Université Caen Normandie, ENSICAEN, CNRS, GREYC UMR 6072" },
    { name: 'Roche Mathieu', fullText: "CIRAD, TETIS, France, Text-mining, NLP, Information Retrieval, AI" },
    { name: 'Sabot Francois', fullText: "IRD" },
    { name: 'Sadouanouan Malo', fullText: "Universite Nazi BONI, Burkina Faso, DL, NLP, Information Retrieval, AI" },
    { name: 'Sall Ousmane', fullText: "Université Virtuelle du Sénégal" },
    { name: 'Sanda Mahama Amadou Tidjani', fullText: "Institut de Mathématiques et de Sciences Physiques" },
    { name: 'Sere Abdoulaye', fullText: "University of Nazi BONI, Burkina Faso, Image Processing, Pattern Recognition, Computer vision, CNN, Hough Transform, AI" },
    { name: 'Seriai Abdelhak', fullText: "Lirmm/University of Montpellier" },
    { name: 'Si-Mohammed Hakim', fullText: "Univ. Lille" },
    { name: 'Sotindjo Coffi Patrick', fullText: "UNSTIM, Bénin, Signal Processing, Optical communications, IoT, IA" },
    { name: 'Soulie Jean-Christophe', fullText: "CIRAD - UPR Recyclage & Risque" },
    { name: 'Chede Akpaki Steaven', fullText: "Ecole Polytechnique d'Abomey-Calavi / Université d'Abomey-Calavi, Bénin, Wireless Communications, Cognitive Radio, Signal Processing, IoT, AI" },
    { name: 'Syed Mehtab Alam', fullText: "CIRAD" },
    { name: 'Tiogning Lauraine', fullText: "University of Yaounde I" },
    { name: 'Toumani Farouk', fullText: "Limos, Clermont Auvergne University, Clermont-Ferrand" },
    { name: 'Tsopze Norbert', fullText: "Universite de Yaounde I" },
    { name: 'Valentin Sarah', fullText: "CIRAD" },
    { name: 'Viho César', fullText: "IRISA/University of Rennes 1" },
    { name: 'Watson Bruce', fullText: "National Security Centre of Excellent (Canada)" },
    { name: 'Youcef Sklab', fullText: "Institut de Recherche Pour le Développement (IRD)" },
    { name: 'Ziou Djemel', fullText: "Sherbrooke university" },
    { name: 'Zongo Meyo Minette', fullText: "Concordia university" },
  ];

  // MEMBERS - APPLIED MATHEMATICS (NOUVEAU - issu du fichier Excel)
  const membersMath = [
    { name: 'Abdellatif Nahla', fullText: "ENIT-UTM, Tunisia" },
    { name: 'Attan Sylvain', fullText: "Département de Mathématique, Université d'Abomey-Calavi, Benin" },
    { name: 'Aurelien Vanes Kambeu Youmbi', fullText: "University of Dschang, Cameroon" },
    { name: 'Baldazzi Valentina', fullText: "INRAE, France" },
    { name: 'Ben Hassen Mohamed Fahmi', fullText: "Imam Abdulrahman Bin Faisal University, Saudi Arabia" },
    { name: 'Benbelgacem Faker', fullText: "France" },
    { name: 'Bendali Abderrahmane', fullText: "INSA, France" },
    { name: 'Bonnet Marc', fullText: "POems, UMR 7231 CNRS-ENSTA-INRIA, France" },
    { name: 'Campillo Fabien', fullText: "Inria, France" },
    { name: 'Dabo Sophie', fullText: "University of Lille, France" },
    { name: 'Dansou Sègbégnon Cyrille', fullText: "Université Gama Abdel Nasser de Conakry (UGANC), Institut d'Optique et de Mathématiques Appliquées (IOAM), Guinée, Guinea" },
    { name: 'Debrecen Laurent', fullText: "INRIA, France" },
    { name: 'Bodega Severi Jean-Marie', fullText: "IMSP, France" },
    { name: 'Dione Ethnie', fullText: "Cheikh Anta Diop University, Senegal" },
    { name: 'Diongue Abdou Ka', fullText: "UFR SAT Université Gaston Berger, Senegal" },
    { name: 'Diop Aliou', fullText: "Université Gaston Berger, Senegal" },
    { name: 'Djibril Moussa Freedath', fullText: "FAST Université d'Abomey-Calavi, Benin" },
    { name: 'Djoukwe Tapi Myriam', fullText: "University of Douala, Cameroon" },
    { name: 'Djuikem Clotilde', fullText: "University of Manitoba, Canada" },
    { name: 'Dohemeto Fortuné', fullText: "Ecole Normale Supérieure de Natitingou ENS/UNSTIM, Benin" },
    { name: 'Dossou-Olory Audace Amen V.', fullText: "University of Abomey-Calavi (IMSP & INE), Benin — Discrete Mathematics (Graph Theory, Combinatorial Optimization), Quantitative Hydrology, HydroInformatics, Numerical Simulation" },
    { name: 'Doumate Têlé Jonas', fullText: "University of Abomey-Calavi, Benin — Discrete Mathematics (Graph Theory, Combinatorial Optimization), Quantitative Hydrology, HydroInformatics, Numerical Simulation" },
    { name: 'Duquesne Sylvain', fullText: "University Rennes 1, France" },
    { name: 'Fehrenbach Jerome', fullText: "Institut de Mathematiques de Toulouse, France" },
    { name: 'Fotso Fotso Yves', fullText: "University of Dschang, France" },
    { name: 'Gbenro Nathaniel', fullText: "ENSEA, Cameroon — Plant Pest Management Modelling, Infectious Disease Modelling, Population Dynamics" },
    { name: 'Gmati Nabil', fullText: "ENIT, Tunisia" },
    { name: 'Grognard Frédéric', fullText: "INRIA, France" },
    { name: 'Guilberteau Jules', fullText: "INRAE (Institut Sophia Agrobiotech), France" },
    { name: 'Hazard Christophe', fullText: "ENSTA, France" },
    { name: 'Jelassi Faten', fullText: "LMAC-UTC, France" },
    { name: 'Louhichi Sana', fullText: "Université Grenoble Alpes (UGA), France — Geometric statistics · Statistical learning · Stochastic modeling · Dependence in data science" },
    { name: 'Mailleret Ludovic', fullText: "INRAE / Inria, France" },
    { name: 'Mammeri Youcef', fullText: "Université Jean Monnet, France" },
    { name: 'Nguyen-Huu Tri', fullText: "IRD, France" },
    { name: 'Nouaili Nejla', fullText: "Université Paris Dauphine, France" },
    { name: 'Odjoumani Japhet', fullText: "Institut de Mathématiques et de Sciences Physiques (IMSP), Université d'Abomey-Calavi (UAC), Benin — Algèbre commutative · Théorie des nombres · Cryptographie" },
    { name: 'Pardoux Etienne', fullText: "Aix Marseille Université, Benin" },
    { name: 'Razafindrakoto Nicolas Raft', fullText: "Université d'Antananarivo, Madagascar" },
    { name: 'Touzeau Suzanne', fullText: "INRAE, France" },
    { name: 'Yatat-Djeumen Ivric Valaire', fullText: "University of Yaounde 1, Cameroon — Infectious disease modeling/Bio-economic modeling/Landscape modeling/One health modeling" },
    { name: 'AZA-GNANDJI Maurel Richy', fullText: "Université Nationale d'Agriculture, Benin — optimisation/decision problem/Energy/renewable energy" },
    { name: 'Baldazzi Valentina', fullText: "INRAE/Inria, France — dynamical systems, ecophysiological modelling, population dynamics" },
    { name: 'Jelassi Faten', fullText: "Université de Technologie de Compiègne, France — Numerical analysis, Optimisation, Thermal contact resistance, Thermal energy" },
  ];

  const SectionToggle = ({ title, isOpen, onToggle }) => (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
    >
      <h2 className="text-base md:text-lg font-bold text-green-600 uppercase text-left">
        {title}
      </h2>
      <svg
        className={`w-6 h-6 text-green-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  return (
    <>
      <Header />
      <Navigation />
      <div className="max-w-7xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
        {/* Titre principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 uppercase">
          TECHNICAL PROGRAM COMMITTEE
        </h1>

        {/* SECTION ACCORDÉON - TECHNICAL PROGRAM COMMITTEE CHAIRS */}
        <section className="mb-4">
          <SectionToggle
            title="TECHNICAL PROGRAM COMMITTEE CHAIRS"
            isOpen={openChairsSection}
            onToggle={() => setOpenChairsSection(!openChairsSection)}
          />

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openChairsSection ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              {/* CHAIR */}
              <div className="mb-8">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 uppercase">CHAIR</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {chairs.map((chair, index) => (
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
                      <p className="font-bold text-gray-900 text-base mb-1">{chair.name}</p>
                      <p className="text-gray-700 text-sm leading-relaxed px-2">{chair.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRACK CO-CHAIRS COMPUTER SCIENCE */}
              <div className="mb-8">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 uppercase">TRACK CO-CHAIRS COMPUTER SCIENCE</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trackCSCoChairs.map((chair, index) => (
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
                      <p className="font-bold text-gray-900 text-base mb-1">{chair.name}</p>
                      <p className="text-gray-700 text-sm leading-relaxed px-2">{chair.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRACK CO-CHAIRS APPLIED MATHEMATICS */}
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 uppercase">TRACK CO-CHAIRS APPLIED MATHEMATICS</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trackMathCoChairs.map((chair, index) => (
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
                      <p className="font-bold text-gray-900 text-base mb-1">{chair.name}</p>
                      <p className="text-gray-700 text-sm leading-relaxed px-2">{chair.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEMBERS - COMPUTER SCIENCE */}
        <section className="mb-4">
          <SectionToggle
            title="MEMBERS - COMPUTER SCIENCE"
            isOpen={openCSSection}
            onToggle={() => setOpenCSSection(!openCSSection)}
          />
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openCSSection ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <ul className="list-disc pl-5 space-y-1">
                {membersCS.map((member, index) => (
                  <li key={index} className="text-gray-900">
                    <span className="font-bold">{member.name}</span>
                    <span> — {member.fullText}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* MEMBERS - APPLIED MATHEMATICS */}
        <section className="mb-4">
          <SectionToggle
            title="MEMBERS - APPLIED MATHEMATICS"
            isOpen={openMathSection}
            onToggle={() => setOpenMathSection(!openMathSection)}
          />
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openMathSection ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-100 p-6">
              <ul className="list-disc pl-5 space-y-1">
                {membersMath.map((member, index) => (
                  <li key={index} className="text-gray-900">
                    <span className="font-bold">{member.name}</span>
                    <span> — {member.fullText}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TechnicalProgramCommittee;