import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-white py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl">
        {/* Titre principal en rouge */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
          WELCOME TO CARI2026
        </h2>
        
        {/* Contenu du texte — justifié */}
        <div className="space-y-4 text-gray-900 text-base leading-relaxed text-justify">
          <p className="font-medium">
            Dear CARI colleagues and friends,
          </p>
          
          <p>
            CARI, the African Conference on Research in Computer Science and Applied Mathematics, 
            is the flagship event of ASDS – African Society in Digital Science (
            <a 
              href="https://asds.africa/" 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://asds.africa/
            </a>
            ). It brings together researchers and practitioners from Africa and beyond to present and 
            discuss advances in computer science and applied mathematics, aiming to strengthen 
            collaboration, international cooperation, and the visibility of African research while fostering 
            innovation to address the continent's challenges.
          </p>
          
          <p>
            CARI'2026 will be held on October 21–24, 2026 at the University of Abomey-Calavi, Cotonou, 
            Benin. Cotonou is Benin's economic capital, known for its beautiful Atlantic coastline, 
            colourful traditions, rich history, bustling markets and warm hospitality. The city blends 
            modern energy with local culture, offering visitors a dynamic atmosphere, delicious cuisine, 
            and easy access to nearby historical sites.
          </p>
          
          <p>
            The program will feature keynote talks, technical sessions, poster presentations, and panel 
            discussions, preceded by workshops and tutorials on October 22, 2026.
          </p>
          
          <p>
            CARI 2026 invites submissions of full papers presenting original research results and short 
            papers reporting work in progress or position papers. CARI'2026 especially welcomes 
            applied research addressing African contexts and challenges, with application domains 
            including agriculture, healthcare, education, environmental systems, transportation, and 
            logistics.
          </p>
          
          <p>
            In the months to follow, we will send out many emails announcing what is planned and 
            providing more details. Watch out for those as we share even more exciting news about 
            CARI 2026! On behalf of the entire organizing committee, we look forward to meeting each 
            one of you in person. See you all in Cotonou!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;