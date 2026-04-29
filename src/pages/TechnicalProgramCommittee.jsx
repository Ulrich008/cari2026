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

  // MEMBERS - COMPUTER SCIENCE (source: CP_CARI2026_Info_Vers29042026.xlsx)
  const membersCS = [
    { name: 'Adjé Erick', fullText: "Université d'Abomey-Calavi, Université du Littoral Côte d'Opale, Benin" },
    { name: 'Ahouandjinou Sèmèvo Arnaud R. M.', fullText: 'University of Abomey-Calavi, Benin' },
    { name: 'Ait Omar Driss', fullText: 'University of Sultan Moulay Slimane, Morocco' },
    { name: 'Ait-Chellouche Soraya', fullText: 'University of Rennes, France' },
    { name: 'Alatrista-Salas Hugo', fullText: 'Pontificia Universidad Católica del Perú, Peru' },
    { name: 'Ametepe Adoté François-Xavier', fullText: 'IMSP, Benin' },
    { name: 'André Pascal', fullText: 'LS2N - University of Nantes, France' },
    { name: 'Aoga John Oscar Raoul', fullText: 'UCLouvain, Belgique' },
    { name: 'Apeke Sena', fullText: 'Universite de Lomé, LARSI, EPL-UL, Togo' },
    { name: 'Armant Vincent', fullText: 'Institut de Recherche Pour le Développement (IRD), France' },
    { name: 'Assogba Kokou', fullText: 'Université Abomey-Calavi (UAC), Benin' },
    { name: 'Atemezing Ghislain', fullText: 'ERA, France' },
    { name: 'Atig Mohamed Faouzi', fullText: 'Uppsala University, Sweden' },
    { name: 'Aza-Gnandji Maurel', fullText: 'University of Abomey-Calavi, Benin' },
    { name: 'Azehoun Pazou Mahugnon Géraud', fullText: 'UNSTIM, Benin' },
    { name: 'Ba Mouhamadou', fullText: 'INRAE, France' },
    { name: 'Barkaoui Kamel', fullText: 'CNAM, Paris, France' },
    { name: 'Béchet Nicolas', fullText: 'IRISA - Université Bretagne Sud, France' },
    { name: 'Belala Faiza', fullText: 'University Abdelhamid Mehri of Constantine 2, LIRE Laboratory, Algeria' },
    { name: 'Belhadef Hacene', fullText: 'University Abdelhamid Mehri of Constantine 2, Algeria' },
    { name: 'Belkahla Driss Olfa', fullText: 'University of Manouba, Tunisia' },
    { name: 'Ben Yahia Sadok', fullText: 'University of Southern Denmark, Denmark' },
    { name: 'Benamrane Nacéra', fullText: "Universite des Sciences et Technologies d'Oran USTO-MB, Laboratoire SIMPA, Algeria" },
    { name: 'Bonkano Moussa', fullText: 'ASDS, Niger' },
    { name: 'Boufaida Mahmoud', fullText: 'Université Abdelhamid Mehri -Constantine 2, Algeria' },
    { name: 'Boughanem Mohand', fullText: 'IRIT University Paul Sabatier Toulouse, France' },
    { name: 'Brice Ekane', fullText: 'IRISA - University Of Rennes, France' },
    { name: 'Camara Gaoussou', fullText: 'Université Alioune Diop de Bambey, Senegal' },
    { name: 'Chasseray Yohann', fullText: 'Centre Génie Industriel - IMT Mines Albi-Carmaux, France' },
    { name: 'Chaudron Michel', fullText: 'Eindhoven University of Technology, The Netherlands' },
    { name: 'Cokouvi Joyce Elvis', fullText: 'Université de Sherbrooke, Canada' },
    { name: 'Comlan Maurice', fullText: 'University of Abomey-Calavi, Benin' },
    { name: 'da Costa Pereira Célia', fullText: "Université Côte d'Azur, France" },
    { name: 'Dagba Theophile', fullText: 'University of Abomey-Calavi, Benin' },
    { name: 'Dembele Jean Marie', fullText: 'Université Gaston Berger, Saint-Louis, Senegal' },
    { name: 'Der Moustapha', fullText: 'ESMT, Senegal' },
    { name: 'Diallo Nafi', fullText: 'Amazon Web Services, USA' },
    { name: 'Diallo Mohamed Bobo', fullText: "Université Félix Houphouët-Boigny (Cocody, CAMES Côte d'Ivoire), Côte d'Ivoire" },
    { name: 'Diarra Mamadou', fullText: "Université Félix Houphouët-Boigny, Côte d'Ivoire" },
    { name: 'Djotio Ndie Thomas', fullText: 'University of Yaounde 1, LIRIMA, MASECNeSS, Cameroun' },
    { name: 'Erritali Mohammed', fullText: 'Laboratoire XLIM, Université de Poitiers, France' },
    { name: 'Etiegne Saly Martine', fullText: "Université Alassane Ouattara, Côte d'Ivoire" },
    { name: 'Fendji Louis', fullText: 'University of Ngaoundere, Cameroun' },
    { name: 'Fernandez Romain', fullText: 'CIRAD, AGAP, France' },
    { name: 'Fokou Pelap Géraud', fullText: 'University of Dschang, Cameroon' },
    { name: 'Frédéric Ouedraogo Tounwendyam', fullText: 'Université Norbert ZONGO, Burkina Faso' },
    { name: 'Gamatie Abdoulaye', fullText: 'LIRMM, CNRS, Université de Montpellier, France' },
    { name: 'Guermouche Abdou', fullText: 'Univ. Bordeaux1 / Inria Futurs, France' },
    { name: 'Gueye Bamba', fullText: 'Universite Cheikh Anta Diop de Dakar, Senegal' },
    { name: 'Hacid Mohand-Said', fullText: 'LIRIS-CNRS, Universtié Claude Bernard Lyon 1, France' },
    { name: 'Hadjadj-Aoul Yassine', fullText: 'University of Rennes 1, France' },
    { name: 'Halidou Aminou', fullText: 'Université de Yaoundé I (UYI), Cameroon' },
    { name: 'Hamza Lamia', fullText: 'University of Bejaia, Algeria' },
    { name: 'Hochon Jean-Claude', fullText: 'AIRBUS SAS, France' },
    { name: 'Houndji Vinasétan Ratheil', fullText: "Université d'Abomey-Calavi (UAC), Bénin" },
    { name: 'Hounguè Pélagie', fullText: "Université d'Abomey-Calavi (IMSP-UAC), Institut de Math. et de Sciences Physiques, Bénin" },
    { name: 'Hurfin Michel', fullText: 'INRIA, France' },
    { name: 'Idrissi Najlae', fullText: 'University Sultan Moulay Slimane, Faculty of Sciences and Techniques Beni Mellal, Morocco' },
    { name: 'Iloga Biyik Pierre Sylvain', fullText: 'University of Maroua, Cameroon' },
    { name: 'Interdonato Roberto', fullText: 'CIRAD, TETIS, France' },
    { name: 'Jmaiel Mohamed', fullText: 'University of Sfax, Tunisia' },
    { name: 'Jossou Thierry Rock', fullText: 'University Mohammed V of Rabat, Morocco' },
    { name: 'Kafando Rodrique', fullText: 'CITADEL, Burkina Faso' },
    { name: 'Kamla Vivient Corneille', fullText: 'University of Ngaoundere, Cameroun' },
    { name: 'Kasunzi Landry Mbale', fullText: 'Université Nouveaux Horizons, Lubumbashi, DRC' },
    { name: 'Kengne Tchendji Vianney', fullText: 'URIFIA, FS, University of Dschang, Cameroon' },
    { name: 'Kerre Deperias', fullText: 'Strathmore University, SCES, Kenya' },
    { name: 'Kiki Probus', fullText: "University of Abomey-Calavi, Ecole Doctorale des Sciences de l'Ingénieur, Benin" },
    { name: 'Kirchner Hélène', fullText: 'Inria, France' },
    { name: 'Konnon Abel M.', fullText: 'INSTI/UNSTIM University, Benin' },
    { name: 'Kouamou Georges Edouard', fullText: 'ENSPY, Cameroun' },
    { name: 'Laleye Frejus', fullText: 'Institut de Mathematiques et de Sciences Physiques, Benin' },
    { name: 'Larmande Pierre', fullText: 'IRD, France' },
    { name: 'Lawall Julia', fullText: 'Inria-Paris, France' },
    { name: 'Lemoisson Philippe', fullText: 'CIRAD, TETIS, France' },
    { name: 'Lentschat Martin', fullText: 'University of Toulouse Jean Jaurès - LERASS, France' },
    { name: 'Ma Thanh', fullText: 'Can Tho University, Viet Nam' },
    { name: 'Maaradji Abderrahmane', fullText: 'University of Doha for Science and Technology, Qatar' },
    { name: 'Maissa Mbaye', fullText: 'Gaston Berger University, Senegal' },
    { name: 'Marir Dr Naila', fullText: 'Effat College of Engineering Effat University, Jeddah, Saudi Arabia' },
    { name: 'Max Fréjus Owolabi Sanya', fullText: "Université d'Abomey-Calavi, Bénin" },
    { name: 'Melatagia Yonta Paulin', fullText: 'University of Yaounde I, Cameroun' },
    { name: 'Menya Edmond', fullText: 'Strathmore University, Kenya' },
    { name: 'Metongnon Lionel', fullText: 'UCLouvain, UAC, Belgique' },
    { name: 'Miary Andrianjaka Rapatsalahy', fullText: 'Université Mahajanga-ISSTM, Madagascar' },
    { name: 'Mili Ali', fullText: 'NJIT, USA' },
    { name: 'Mitton Nathalie', fullText: 'Inria, France' },
    { name: 'Mohameden Ahmed', fullText: 'Faculty of Sciences and Techniques, Nouakchott University, Mauritania' },
    { name: 'Mokhtar Sellami', fullText: 'Annaba University, Algeria' },
    { name: 'Mosbah Mohamed', fullText: 'LaBRI - University of Bordeaux, France' },
    { name: 'Mousse Ange Mikaël', fullText: 'Université de Parakou, Institut Universitaire de Technologie, Benin' },
    { name: 'Ndoundam Rene', fullText: 'University of Yaounde 1, Cameroon' },
    { name: 'Nguena Timo Omer', fullText: 'Université du Québec en Outaouais, Canada' },
    { name: 'Nkambou Roger', fullText: 'Université du Québec à Montréal, Canada' },
    { name: 'Nkenlifack Marcellin', fullText: 'URIFIA, DMI, FS, University of Dschang, Cameroun' },
    { name: 'Nouvel Damien', fullText: 'Inalco ERTIM, France' },
    { name: 'Nwaocha Vivian', fullText: 'National Open University of Nigeria, Nigeria' },
    { name: 'Nyamen Tato Ange Adrienne', fullText: 'Université Laval, Canada' },
    { name: 'Odumuyiwa Victor', fullText: 'University of Lagos, Nigeria' },
    { name: 'Olle Olle Daniel Claude Georges Delort', fullText: 'University of Yaoundé 1/ University of Ebolowa, Cameroon' },
    { name: 'Oluwade Bamidele', fullText: 'Nigeria' },
    { name: 'Oluwatope Ayodeji', fullText: 'Obafemi Awolowo University, Ile-Ife, Nigeria' },
    { name: 'Owuor Dickson', fullText: 'Strathmore University, Kenya' },
    { name: 'Pradal Christophe', fullText: 'CIRAD, INRIA, France' },
    { name: 'Rajaonarivo Landy', fullText: 'INRAE, UMR TETIS, France' },
    { name: 'Razafindrakoto Nicolas Raft', fullText: "Université de l'Itasy, Madagascar" },
    { name: 'Reynaud Justine', fullText: 'Université Caen Normandie, ENSICAEN, GREYC, Caen, France' },
    { name: 'Roche Mathieu', fullText: 'CIRAD, TETIS, France' },
    { name: 'Sabot Francois', fullText: 'IRD - DIADE UM, IRD, Cirad, France' },
    { name: 'Sadouanouan Malo', fullText: 'Universite Nazi BONI, Burkina Faso' },
    { name: 'Sall Ousmane', fullText: 'Université Virtuelle du Sénégal, Senegal' },
    { name: 'Sanda Mahama Amadou Tidjani', fullText: 'Institut de Mathématiques et de Sciences Physiques, Benin' },
    { name: 'Sere Abdoulaye', fullText: 'University of Nazi BONI, Burkina Faso' },
    { name: 'Seriai Abdelhak', fullText: 'LIRMM, University of Montpellier, France' },
    { name: 'Si-Mohammed Hakim', fullText: 'Univ. Lille, France' },
    { name: 'Sotindjo Coffi Patrick', fullText: 'UNSTIM, Benin' },
    { name: 'Soulie Jean-Christophe', fullText: 'CIRAD, UPR Recyclage & Risque, France (La Réunion)' },
    { name: 'Chede Akpaki Steaven', fullText: "Université d'Abomey-Calavi, Ecole Polytechnique d'Abomey-Calavi, Benin" },
    { name: 'Syed Mehtab Alam', fullText: 'CIRAD, TETIS, France' },
    { name: 'Tiogning Lauraine', fullText: 'University of Yaounde I, France' },
    { name: 'Toumani Farouk', fullText: 'Clermont Auvergne University, LIMOS, Clermont-Ferrand, France' },
    { name: 'Tsopze Norbert', fullText: 'Universite de Yaounde I, Cameroun' },
    { name: 'Valentin Sarah', fullText: 'CIRAD, TETIS, France' },
    { name: 'Viho César', fullText: 'IRISA/University of Rennes 1, France' },
    { name: 'Watson Bruce', fullText: 'National Security Centre of Excellent, Canada' },
    { name: 'Youcef Sklab', fullText: 'Institut de Recherche Pour le Développement (IRD), France' },
    { name: 'Ziou Djemel', fullText: 'Sherbrooke university, Canada' },
    { name: 'Zongo Meyo Minette', fullText: 'Concordia university, Canada' },
  ];

  // MEMBERS - APPLIED MATHEMATICS (source: CP_CARI2026_Math_Vers29042026.xlsx)
  const membersMath = [
    { name: 'Abdellatif Nahla', fullText: 'ENIT-UTM, Tunisia' },
    { name: 'Attan Sylvain', fullText: "Département de Mathématique, Université d'Abomey-Calavi, Benin" },
    { name: 'Aurelien Vanes Kambeu Youmbi', fullText: 'University of Dschang, Cameroon' },
    { name: 'Baldazzi Valentina', fullText: 'INRAE, France' },
    { name: 'Ben Hassen Mohamed Fahmi', fullText: 'Imam Abdulrahman Bin Faisal University, Saudi Arabia' },
    { name: 'Benbelgacem Faker', fullText: 'France' },
    { name: 'Bendali Abderrahmane', fullText: 'INSA, France' },
    { name: 'Bonnet Marc', fullText: 'POems, UMR 7231 CNRS-ENSTA-INRIA, France' },
    { name: 'Campillo Fabien', fullText: 'Inria, France' },
    { name: 'Dabo Sophie', fullText: 'University of Lille, France' },
    { name: 'Dansou Sègbégnon Cyrille', fullText: "Université Gama Abdel Nasser de Conakry (UGANC), Institut d'Optique et de Mathématiques Appliquées (IOAM), Guinea" },
    { name: 'Debrecen Laurent', fullText: 'INRIA, France' },
    { name: 'Bodega Severi Jean-Marie', fullText: 'IMSP, France' },
    { name: 'Dione Ethnie', fullText: 'Cheikh Anta Diop University, Senegal' },
    { name: 'Diongue Abdou Ka', fullText: 'UFR SAT Université Gaston Berger, Senegal' },
    { name: 'Diop Aliou', fullText: 'Université Gaston Berger, Senegal' },
    { name: 'Djibril Moussa Freedath', fullText: "FAST Université d'Abomey-Calavi, Benin" },
    { name: 'Djoukwe Tapi Myriam', fullText: 'University of Douala, Cameroon' },
    { name: 'Djuikem Clotilde', fullText: 'University of Manitoba, Canada' },
    { name: 'Dohemeto Fortuné', fullText: 'Ecole Normale Supérieure de Natitingou ENS/UNSTIM, Benin' },
    { name: 'Dossou-Olory Audace Amen V.', fullText: 'University of Abomey-Calavi (IMSP & INE), Benin' },
    { name: 'Doumate Têlé Jonas', fullText: 'University of Abomey-Calavi, Benin' },
    { name: 'Duquesne Sylvain', fullText: 'University Rennes 1, France' },
    { name: 'Fehrenbach Jerome', fullText: 'Institut de Mathematiques de Toulouse, France' },
    { name: 'Fotso Fotso Yves', fullText: 'University of Dschang, Cameroon' },
    { name: 'Gbenro Nathaniel', fullText: 'ENSEA, Cameroon' },
    { name: 'Gmati Nabil', fullText: 'ENIT, Tunisia' },
    { name: 'Grognard Frédéric', fullText: 'INRIA, France' },
    { name: 'Guilberteau Jules', fullText: 'INRAE (Institut Sophia Agrobiotech), France' },
    { name: 'Hazard Christophe', fullText: 'ENSTA, France' },
    { name: 'Jelassi Faten', fullText: 'LMAC-UTC, France' },
    { name: 'Louhichi Sana', fullText: 'Université Grenoble Alpes (UGA), France' },
    { name: 'Mailleret Ludovic', fullText: 'INRAE / Inria, France' },
    { name: 'Mammeri Youcef', fullText: 'Université Jean Monnet, France' },
    { name: 'Nguyen-Huu Tri', fullText: 'IRD, France' },
    { name: 'Nouaili Nejla', fullText: 'Université Paris Dauphine, France' },
    { name: 'Odjoumani Japhet', fullText: "Institut de Mathématiques et de Sciences Physiques (IMSP), Université d'Abomey-Calavi (UAC), Benin" },
    { name: 'Pardoux Etienne', fullText: 'Aix Marseille Université, France' },
    { name: 'Razafindrakoto Nicolas Raft', fullText: "Université d'Antananarivo, Madagascar" },
    { name: 'Touzeau Suzanne', fullText: 'INRAE, France' },
    { name: 'Yatat-Djeumen Ivric Valaire', fullText: 'University of Yaounde 1, Cameroon' },
    { name: 'AZA-GNANDJI Maurel Richy', fullText: "Université Nationale d'Agriculture, Benin" },
    { name: 'Baldazzi Valentina', fullText: 'INRAE/Inria, France' },
    { name: 'Jelassi Faten', fullText: 'Université de Technologie de Compiègne, France' },
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