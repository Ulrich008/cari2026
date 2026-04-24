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
    { name: 'Adjé Erick', fullText: "Adjé Erick Université d'Abomey-Calavi, Université du Littoral Côte d'Opale, Bénin, Computer Vision, Deep Learning, Machine learning" },
    { name: 'Ahouandjinou Sèmèvo Arnaud R. M.', fullText: "Ahouandjinou Sèmèvo Arnaud R. M. institut de formation et de recherche en informatique de l'université d'abomey-calavi" },
    { name: 'Ait Omar Driss', fullText: "Ait Omar Driss University of Sultan Moulay Slimane, Morocco, Network Security, Communication Network, Artificial Intelligence, Optimization, Game Theory" },
    { name: 'Ait-Chellouche Soraya', fullText: "Ait-Chellouche Soraya University of Rennes, France, Network optimization, IoT, AI for networking" },
    { name: 'Alatrista-Salas Hugo', fullText: "Alatrista-Salas Hugo Pontificia Universidad Católica del Perú" },
    { name: 'Ametepe Adoté', fullText: "Ametepe Adoté IMSP" },
    { name: 'André Pascal', fullText: "André Pascal LS2N - University of Nantes, France, Software Engineering, Model & Language Driven Engineering, Information Systems, Manufacturing Systems" },
    { name: 'Aoga John Oscar Raoul', fullText: "Aoga John Oscar Raoul UCLouvain, Belgique, Data Mining, Artificial intelligence, Combinatorial optimization, Natural language Processing" },
    { name: 'Apeke Sena', fullText: "Apeke Sena Laboratoire de Recherche en Science de l'Ingénieur (LARSI), Universite de Lomé, Togo, Computer Vision, AI (Machine learning, Deep Learning, NLP, Transformers)" },
    { name: 'Armant Vincent', fullText: "Armant Vincent Institut de Recherche pour le Développement, France" },
    { name: 'Assogba Kokou', fullText: "Assogba Kokou Université Abomey-Calavi (UAC)" },
    { name: 'Atemezing Ghislain', fullText: "Atemezing Ghislain ERA" },
    { name: 'Atig Mohamed Faouzi', fullText: "Atig Mohamed Faouzi Uppsala University" },
    { name: 'Aza-Gnandji Maurel', fullText: "Aza-Gnandji Maurel University of Abomey-Calavi" },
    { name: 'Azehoun Pazou Mahugnon Géraud', fullText: "Azehoun Pazou Mahugnon Géraud UNSTIM" },
    { name: 'Ba Mouhamadou', fullText: "Ba Mouhamadou INRAE, France, Knowledge Engineering, Semantic Web, Text and Data Mining" },
    { name: 'Barkaoui Kamel', fullText: "Barkaoui Kamel CNAM, Paris" },
    { name: 'Béchet Nicolas', fullText: "Béchet Nicolas IRISA - Université Bretagne Sud, France, Deep Learning, Machine learning, NLP" },
    { name: 'Belala Faiza', fullText: "Belala Faiza LIRE Laboratory, University Abdelhamid Mehri of Constantine 2, Algeria" },
    { name: 'Belhadef Hacene', fullText: "Belhadef Hacene University Abdelhamid Mehri of Constantine 2, Algeria, Quantum Computing, Natural Language Processing" },
    { name: 'Belkahla Driss Olfa', fullText: "Belkahla Driss Olfa University of Manouba, Tunisia" },
    { name: 'Ben Yahia Sadok', fullText: "Ben Yahia Sadok University of Southern Denmark, Denmark, Computer Vision, Deep Learning, Machine learning, Ontology engineering" },
    { name: 'Benamrane Nacéra', fullText: "Benamrane Nacéra Laboratoire SIMPA, Universite des Sciences et Technologies d'Oran USTO-MB, Algeria, Computer Vision, Image processing, Medical Imaging, Artificial Intelligence" },
    { name: 'Bonkano Moussa', fullText: "Bonkano Moussa ASDS" },
    { name: 'Boufaida Mahmoud', fullText: "Boufaida Mahmoud Université Abdelhamid Mehri -Constantine 2, Algeria, Information Systems, Advanced Data Bases, Business Process Management, Multi-agent Systems" },
    { name: 'Boughanem Mohand', fullText: "Boughanem Mohand IRIT University Paul Sabatier Toulouse" },
    { name: 'Brice Ekane', fullText: "Brice Ekane IRISA - University Of Rennes" },
    { name: 'Camara Gaoussou', fullText: "Camara Gaoussou Université Alioune Diop de Bambey - Sénégal" },
    { name: 'Chasseray Yohann', fullText: "Chasseray Yohann Centre Génie Industriel - IMT Mines Albi-Carmaux" },
    { name: 'Chaudron Michel', fullText: "Chaudron Michel Eindhoven University of Technology, The Netherlands, Software Engineering, Software Architecture, Modeling and Design, Digital Twins" },
    { name: 'Cokouvi Joyce Elvis', fullText: "Cokouvi Joyce Elvis Université de Sherbrooke" },
    { name: 'Comlan Maurice', fullText: "Comlan Maurice University of Abomey-Calavi" },
    { name: 'da Costa Pereira Célia', fullText: "da Costa Pereira Célia Université Côte d'Azur" },
    { name: 'Dagba Theophile', fullText: "Dagba Theophile University of Abomey-Calavi, Benin, Artificial Intelligence, Natural Language Processing, Data Mining" },
    { name: 'Dembele Jean Marie', fullText: "Dembele Jean Marie Université Gaston Berger, Saint-Louis, Sénégal, Machine Learning, Artificial Intelligence, Modeling and Simulation" },
    { name: 'Der Moustapha', fullText: "Der Moustapha ESMT, Senegal, Computer Vision, AI (Machine learning, Deep Learning, NLP, Transformers)" },
    { name: 'Diallo Nafi', fullText: "Diallo Nafi Amazon Web Services" },
    { name: 'Diallo Mohamed Bobo', fullText: "Diallo Mohamed Bobo UFHB" },
    { name: 'Diarra Mamadou', fullText: "Diarra Mamadou Université Félix Houphouët-Boigny" },
    { name: 'Djotio Ndie Thomas', fullText: "Djotio Ndie Thomas LIRIMA, MASECNeSS Team leader, University of Yaounde 1" },
    { name: 'Erritali Mohammed', fullText: "Erritali Mohammed Faculté des sciences et techniques" },
    { name: 'Etiegne Saly Martine', fullText: "Etiegne Saly Martine Université Alassane Ouattara" },
    { name: 'Fendji Louis', fullText: "Fendji Louis University of Ngaoundere" },
    { name: 'Fernandez Romain', fullText: "Fernandez Romain CIRAD, France, Image processing, Deep learning, Plant phenotyping" },
    { name: 'Fokou Pelap Géraud', fullText: "Fokou Pelap Géraud University of Dschang, Cameroon, Artificial Intelligence, Knowledge Graph, Semantic Web" },
    { name: 'Frédéric Ouedraogo Tounwendyam', fullText: "Frédéric Ouedraogo Tounwendyam Université Norbert ZONGO" },
    { name: 'Gamatie Abdoulaye', fullText: "Gamatie Abdoulaye LIRMM, CNRS, Université de Montpellier, France, Embedded systems, Software engineering" },
    { name: 'Guermouche Abdou', fullText: "Guermouche Abdou Univ. Bordeaux1 / INRIA Futurs" },
    { name: 'Gueye Bamba', fullText: "Gueye Bamba Universite Cheikh Anta Diop de Dakar, Senegal, Sustainable communication networks, Sensor-based epidemiology detection" },
    { name: 'Hacid Mohand-Said', fullText: "Hacid Mohand-Said LIRIS-CNRS, Universtié Claude Bernard Lyon 1" },
    { name: 'Hadjadj-Aoul Yassine', fullText: "Hadjadj-Aoul Yassine University of Rennes 1" },
    { name: 'Halidou Aminou', fullText: "Halidou Aminou Université de Yaoundé I (UYI), Cameroon, AI-Computer Vision" },
    { name: 'Hamza Lamia', fullText: "Hamza Lamia University of bejaia, Algeria, Computer Security, Formal Techniques, Artificiel Intelligence" },
    { name: 'Hochon Jean-Claude', fullText: "Hochon Jean-Claude AIRBUS SAS, France, Artificial Intelligence, Data Science, Business Process Management" },
    { name: 'Houndji Vinasétan Ratheil', fullText: "Houndji Vinasétan Ratheil Université d'Abomey-Calavi (UAC), Bénin, Machine Learning, Constraint Programming, Optimization" },
    { name: 'Hounguè Pélagie', fullText: "Hounguè Pélagie Institut de Mathématiques et de Sciences Physiques, Université d'Abomey-Calavi (IMSP-UAC), Bénin, Computer Security, Artificiel Intelligence, E-learning" },
    { name: 'Hurfin Michel', fullText: "Hurfin Michel INRIA, Morocco" },
    { name: 'Idrissi Najlae', fullText: "Idrissi Najlae FACULTY OF SCIENCES AND TECHNIQUES BENI MELLAL" },
    { name: 'Iloga Biyik Pierre Sylvain', fullText: "Iloga Biyik Pierre Sylvain University of Maroua, Cameroon, Machine learning, Stochastic learning, Sequential data modeling" },
    { name: 'Interdonato Roberto', fullText: "Interdonato Roberto CIRAD - UMR TETIS" },
    { name: 'Jmaiel Mohamed', fullText: "Jmaiel Mohamed University of Sfax" },
    { name: 'Jossou Thierry Rock', fullText: "Jossou Thierry Rock University Mohammed V of Rabat" },
    { name: 'Kafando Rodrique', fullText: "Kafando Rodrique CITADEL" },
    { name: 'Kamla Vivient Corneille', fullText: "Kamla Vivient Corneille University of Ngaoundere" },
    { name: 'Kasunzi Landry Mbale', fullText: "Kasunzi Landry Mbale Université Nouveaux Horizons, Lubumbashi, DRC, Machine learning, Federated Machine learning, AI & healthcare, Cybersecurity" },
    { name: 'Kengne Tchendji Vianney', fullText: "Kengne Tchendji Vianney University of Dschang" },
    { name: 'Kerre Deperias', fullText: "Kerre Deperias Strathmore University, Kenya, Artificial Intelligence, Machine Learning, Information Extraction, Semantic Web" },
    { name: 'Kiki Probus', fullText: "Kiki Probus Ecole Doctorale des Sciences de l'Ingénieur, University of Abomey-Calavi, Benin" },
    { name: 'Kirchner Hélène', fullText: "Kirchner Hélène INRIA, Formal specifications, logical framework, program verification, cybersecurity" },
    { name: 'Konnon Abel M.', fullText: "Konnon Abel M. INSTI/ UNSTIM University" },
    { name: 'Kouamou Georges Edouard', fullText: "Kouamou Georges Edouard ENSPY" },
    { name: 'Laleye Frejus', fullText: "Laleye Frejus Institut de Mathematiques et de Sciences Physiques" },
    { name: 'Larmande Pierre', fullText: "Larmande Pierre IRD" },
    { name: 'Lawall Julia', fullText: "Lawall Julia Inria-Paris, France, Operating systems, Software engineering, Programming languages" },
    { name: 'Lemoisson Philippe', fullText: "Lemoisson Philippe Cirad, France, Knowledge management" },
    { name: 'Lentschat Martin', fullText: "Lentschat Martin LERASS - University of Toulouse Jean Jaurès" },
    { name: 'Ma Thanh', fullText: "Ma Thanh Can Tho University" },
    { name: 'Maaradji Abderrahmane', fullText: "Maaradji Abderrahmane UDST" },
    { name: 'Maissa Mbaye', fullText: "Maissa Mbaye Gaston Berger University, Senegal" },
    { name: 'Marir Dr Naila', fullText: "Marir Dr Naila Effat College of Engineering Effat University, Jeddah, Saudi Arabia" },
    { name: 'Max Fréjus Owolabi Sanya', fullText: "Max Fréjus Owolabi Sanya Université d'Abomey-Calavi, Bénin, Machine learning, Signal Processing, Optical communications, IoT" },
    { name: 'Melatagia Yonta Paulin', fullText: "Melatagia Yonta Paulin University of Yaounde I" },
    { name: 'Menya Edmond', fullText: "Menya Edmond Strathmore University" },
    { name: 'Metongnon Lionel', fullText: "Metongnon Lionel UCLouvain, UAC, Belgique, Network Security, Cybersecurity, Internet of Things" },
    { name: 'Miary Andrianjaka Rapatsalahy', fullText: "Miary Andrianjaka Rapatsalahy Université Mahajanga-ISSTM, Madagascar, Software Engineering, Model-Driven Engineering, DevOps, Machine Learning, Distributed Systems" },
    { name: 'Mili Ali', fullText: "Mili Ali NJIT" },
    { name: 'Mitton Nathalie', fullText: "Mitton Nathalie INRIA" },
    { name: 'Mohameden Ahmed', fullText: "Mohameden Ahmed Faculty of Sciences and Techniques, Nouakchott University, Mauritania, Machine learning, Deep Learning, Computer Vision, VLM" },
    { name: 'Mokhtar Sellami', fullText: "Mokhtar Sellami Annaba University" },
    { name: 'Mosbah Mohamed', fullText: "Mosbah Mohamed LaBRI - University of Bordeaux" },
    { name: 'Mousse Ange Mikaël', fullText: "Mousse Ange Mikaël Institut Universitaire de Technologie, Université de Parakou" },
    { name: 'Ndoundam Rene', fullText: "Ndoundam Rene University of Yaounde 1, Cameroon, Cryptography, Security" },
    { name: 'Nguena Timo Omer', fullText: "Nguena Timo Omer Université du Québec en Outaouais" },
    { name: 'Nkambou Roger', fullText: "Nkambou Roger Université du Québec à Montréal" },
    { name: 'Nkenlifack Marcellin', fullText: "Nkenlifack Marcellin URIFIA, DMI, FS, University of Dschang" },
    { name: 'Nouvel Damien', fullText: "Nouvel Damien INaLCO" },
    { name: 'Nwaocha Vivian', fullText: "Nwaocha Vivian National Open University of Nigeria" },
    { name: 'Nyamen Tato Ange Adrienne', fullText: "Nyamen Tato Ange Adrienne Université Laval, Canada, Artificial intelligence in education, Machine learning, datamining, Experts systems, User modeling" },
    { name: 'Odumuyiwa Victor', fullText: "Odumuyiwa Victor University of Lagos" },
    { name: 'Olle Olle Daniel Claude Georges Delort', fullText: "Olle Olle Daniel Claude Georges Delort Huazhong University of Sciences and Technology (HUST)" },
    { name: 'Oluwade Bamidele', fullText: "Oluwade Bamidele Dewade Systems Limited, Ibadan, Nigeria" },
    { name: 'Oluwatope Ayodeji', fullText: "Oluwatope Ayodeji Obafemi Awolowo University, Ile-Ife, Nigeria" },
    { name: 'Owuor Dickson', fullText: "Owuor Dickson Strathmore University" },
    { name: 'Pradal Christophe', fullText: "Pradal Christophe CIRAD, INRIA, France, 3D Plant Modeling, Distributed computing, Software engineering, Topology/Geometry, Simulation" },
    { name: 'Rajaonarivo Landy', fullText: "Rajaonarivo Landy INRAE, UMR TETIS" },
    { name: 'Razafindrakoto Nicolas Raft', fullText: "Razafindrakoto Nicolas Raft Université de l'Itasy, Madagascar, Network & telecom, Software engineering" },
    { name: 'Reynaud Justine', fullText: "Reynaud Justine Université Caen Normandie, ENSICAEN, CNRS, GREYC UMR 6072" },
    { name: 'Roche Mathieu', fullText: "Roche Mathieu CIRAD, TETIS, France, Text-mining, NLP, Information Retrieval, AI" },
    { name: 'Sabot Francois', fullText: "Sabot Francois IRD" },
    { name: 'Sadouanouan Malo', fullText: "Sadouanouan Malo Universite Nazi BONI, Burkina Faso, DL, NLP, Information Retrieval, AI" },
    { name: 'Sall Ousmane', fullText: "Sall Ousmane Université Virtuelle du Sénégal" },
    { name: 'Sanda Mahama Amadou Tidjani', fullText: "Sanda Mahama Amadou Tidjani Institut de Mathématiques et de Sciences Physiques" },
    { name: 'Sere Abdoulaye', fullText: "Sere Abdoulaye University of Nazi BONI, Burkina Faso, Image Processing, Pattern Recognition, Computer vision, CNN, Hough Transform, AI" },
    { name: 'Seriai Abdelhak', fullText: "Seriai Abdelhak Lirmm/University of Montpellier" },
    { name: 'Si-Mohammed Hakim', fullText: "Si-Mohammed Hakim Univ. Lille" },
    { name: 'Sotindjo Coffi Patrick', fullText: "Sotindjo Coffi Patrick UNSTIM, Bénin, Signal Processing, Optical communications, IoT, IA" },
    { name: 'Soulie Jean-Christophe', fullText: "Soulie Jean-Christophe CIRAD - UPR Recyclage & Risque" },
    { name: 'Chede Akpaki Steaven', fullText: "Chede Akpaki Steaven Ecole Polytechnique d'Abomey-Calavi / Université d'Abomey-Calavi, Bénin, Wireless Communications, Cognitive Radio, Signal Processing, IoT, AI" },
    { name: 'Syed Mehtab Alam', fullText: "Syed Mehtab Alam CIRAD" },
    { name: 'Tiogning Lauraine', fullText: "Tiogning Lauraine University of Yaounde I" },
    { name: 'Toumani Farouk', fullText: "Toumani Farouk Limos, Clermont Auvergne University, Clermont-Ferrand" },
    { name: 'Tsopze Norbert', fullText: "Tsopze Norbert Universite de Yaounde I" },
    { name: 'Valentin Sarah', fullText: "Valentin Sarah CIRAD" },
    { name: 'Viho César', fullText: "Viho César IRISA/University of Rennes 1" },
    { name: 'Watson Bruce', fullText: "Watson Bruce National Security Centre of Excellent (Canada)" },
    { name: 'Youcef Sklab', fullText: "Youcef Sklab Institut de Recherche Pour le Développement (IRD)" },
    { name: 'Ziou Djemel', fullText: "Ziou Djemel Sherbrooke university" },
    { name: 'Zongo Meyo Minette', fullText: "Zongo Meyo Minette Concordia university" },
  ];

  // MEMBERS - APPLIED MATHEMATICS
  const membersMath = [
    { name: 'Abdellatif Nahla', fullText: "Abdellatif Nahla ENIT-UTM" },
    { name: 'Ahouandjinou Sèmèvo Arnaud R. M.', fullText: "Ahouandjinou Sèmèvo Arnaud R. M. institut de formation et de recherche en informatique de l'université d'abomey-calavi" },
    { name: 'Attan Sylvain', fullText: "Attan Sylvain Département de Mathématique, Université d'Abomey-Calavi" },
    { name: 'Aurelien Vanes Kambeu Youmbi', fullText: "Aurelien Vanes Kambeu Youmbi University of Dschang" },
    { name: 'Baldazzi Valentina', fullText: "Baldazzi Valentina INRAE" },
    { name: 'Ben Hassen Mohamed Fahmi', fullText: "Ben Hassen Mohamed Fahmi Imam Abdulrahman Bin Faisal University" },
    { name: 'Benbelgacem Faker', fullText: "Benbelgacem Faker" },
    { name: 'Bendali Abderrahmane', fullText: "Bendali Abderrahmane INSA" },
    { name: 'Bonnet Marc', fullText: "Bonnet Marc POems, UMR 7231 CNRS-ENSTA-INRIA" },
    { name: 'Campillo Fabien', fullText: "Campillo Fabien Inria" },
    { name: 'Dabo Sophie', fullText: "Dabo Sophie University of Lille" },
    { name: 'Dansou Sègbégnon Cyrille', fullText: "Dansou Sègbégnon Cyrille Université Gamal Abdel Nasser de Conakry (UGANC), Institut d'Optique et de Mathématiques Appliquées (IOAM), Guinée" },
    { name: 'Debreu Laurent', fullText: "Debreu Laurent INRIA" },
    { name: 'Degbo Seyive Jean-Marie', fullText: "Degbo Seyive Jean-Marie IMSP" },
    { name: 'Dione Dethie', fullText: "Dione Dethie Cheikh Anta Diop University" },
    { name: 'Diongue Abdou Ka', fullText: "Diongue Abdou Ka UFR SAT Université Gaston Berger" },
    { name: 'Diop Aliou', fullText: "Diop Aliou Université Gaston Berger" },
    { name: 'Djibril Moussa Freedath', fullText: "Djibril Moussa Freedath FAST Université d'Abomey-Calavi" },
    { name: 'Djoukwe Tapi Myriam', fullText: "Djoukwe Tapi Myriam University of Douala" },
    { name: 'Djuikem Clotilde', fullText: "Djuikem Clotilde University of Manitoba" },
    { name: 'Dohemeto Fortuné', fullText: "Dohemeto Fortuné Ecole Normale Supérieure de Natitingou ENS/UNSTIM" },
    { name: 'Dossou-Olory Audace Amen V.', fullText: "Dossou-Olory Audace Amen V. University of Abomey-Calavi (IMSP & INE), Benin, Discrete Mathematics (Graph Theory, Combinatorial Optimization), Quantitative Hydrology, HydroInformatics, Numerical Simulation" },
    { name: 'Doumate Têlé Jonas', fullText: "Doumate Têlé Jonas University of Abomey-Calavi" },
    { name: 'Duquesne Sylvain', fullText: "Duquesne Sylvain University Rennes 1" },
    { name: 'Fehrenbach Jerome', fullText: "Fehrenbach Jerome Institut de Mathematiques de Toulouse, France" },
    { name: 'Fotso Fotso Yves', fullText: "Fotso Fotso Yves University of Dschang, Cameroon, Plant Pest Management Modelling, Infectious Disease Modelling, Population Dynamics" },
    { name: 'Gbenro Nathaniel', fullText: "Gbenro Nathaniel ENSEA" },
    { name: 'Gmati Nabil', fullText: "Gmati Nabil ENIT" },
    { name: 'Grognard Frédéric', fullText: "Grognard Frédéric INRIA" },
    { name: 'Guilberteau Jules', fullText: "Guilberteau Jules INRAE (Institut Sophia Agrobiotech)" },
    { name: 'Hazard Christophe', fullText: "Hazard Christophe ENSTA" },
    { name: 'Jelassi Faten', fullText: "Jelassi Faten LMAC-UTC" },
    { name: 'Louhichi Sana', fullText: "Louhichi Sana Université Grenoble Alpes (UGA), France, Geometric statistics, Statistical learning, Stochastic modeling, Dependence in data science" },
    { name: 'Mailleret Ludovic', fullText: "Mailleret Ludovic INRAE / Inria" },
    { name: 'Mammeri Youcef', fullText: "Mammeri Youcef Université Jean Monnet" },
    { name: 'Nguyen-Huu Tri', fullText: "Nguyen-Huu Tri IRD" },
    { name: 'Nouaili Nejla', fullText: "Nouaili Nejla Université Paris Dauphine" },
    { name: 'Odjoumani Japhet', fullText: "Odjoumani Japhet Institut de Mathématiques et de Sciences Physiques (IMSP), Université d'Abomey-Calavi (UAC), Bénin, Algèbre commutative, Théorie des nombres, Cryptographie" },
    { name: 'Pardoux Etienne', fullText: "Pardoux Etienne Aix Marseille Université" },
    { name: 'Razafindrakoto Nicolas Raft', fullText: "Razafindrakoto Nicolas Raft Université d'Antananarivo" },
    { name: 'Touzeau Suzanne', fullText: "Touzeau Suzanne INRAE" },
    { name: 'Yatat-Djeumen Ivric Valaire', fullText: "Yatat-Djeumen Ivric Valaire University of Yaounde 1, Cameroon, Infectious disease modeling, Bio-economic modeling, Landscape modeling, One health modeling" },
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

  const MemberCard = ({ member }) => (
    <li className="py-2 border-b border-gray-200 last:border-0">
      <span className="font-bold text-gray-900">{member.name}</span>
      <span className="text-gray-700">, {member.fullText.substring(member.name.length + 2)}</span>
    </li>
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
                    <span> {member.fullText.substring(member.name.length)}</span>
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
                    <span> {member.fullText.substring(member.name.length)}</span>
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