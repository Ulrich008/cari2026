import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images du carrousel
  const slides = [
    '/assets/carou1.webp',
    '/assets/carou2.png',
    '/assets/carou3.png',
    '/assets/carou4.jpg',
    '/assets/carou5.jpg',
  ];

  // Auto-défilement du carrousel toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      {/* Carrousel d'images - en arrière-plan plein écran */}
      <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[600px] overflow-hidden bg-gray-900">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Campus view ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Image ${index + 1} non trouvée:`, slide);
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'%3E%3Crect fill='%23e2e8f0' width='1600' height='900'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='36' font-weight='bold' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ECampus Image ${index + 1}%3C/text%3E%3C/svg%3E`;
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            </div>
          ))}
        </div>

        {/* Bouton précédent - position ajustée selon la hauteur du header */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-[calc(50%+40px)] sm:top-[calc(50%+45px)] md:top-[calc(50%+50px)] lg:top-[calc(50%+60px)] -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 sm:p-2.5 rounded-full shadow-xl transition-all duration-200 z-10 hover:scale-110"
          aria-label="Image précédente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-7 sm:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Bouton suivant */}
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-[calc(50%+40px)] sm:top-[calc(50%+45px)] md:top-[calc(50%+50px)] lg:top-[calc(50%+60px)] -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 sm:p-2.5 rounded-full shadow-xl transition-all duration-200 z-10 hover:scale-110"
          aria-label="Image suivante"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-7 sm:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicateurs de slides */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2.5 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 w-6 sm:w-10'
                  : 'bg-white bg-opacity-60 hover:bg-opacity-90 w-2 sm:w-2.5'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* En-tête avec logos et titre - superposé */}
      <header className="absolute top-0 left-0 right-0 bg-white bg-opacity-70 shadow-md z-20">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo gauche - CARI 2026 */}
            <div className="flex-shrink-0 w-16 max-[400px]:w-12 sm:w-20 md:w-24 lg:w-28">
              <img
                src="/assets/logo1.png"
                alt="Logo CARI 2026"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  console.error('Logo CARI non trouvé');
                  e.target.parentElement.innerHTML = `
                    <div class="w-16 h-16 max-[400px]:w-12 max-[400px]:h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-green-600 bg-white flex items-center justify-center shadow-lg mx-auto">
                      <div class="text-center">
                        <div class="text-xs sm:text-sm md:text-base font-bold text-gray-700">CARI</div>
                        <div class="text-[10px] sm:text-xs bg-green-600 text-white px-1 sm:px-2 py-0.5 rounded mt-0.5 sm:mt-1">2026</div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Section centrale - Titre et détails */}
            <div className="flex-grow text-center px-1 sm:px-4 md:px-6">
              <h1 className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold leading-tight mb-0.5 sm:mb-1.5">
                <span className="text-red-600 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl font-extrabold">
                  18<sup className="text-[8px] sm:text-xs md:text-sm lg:text-base align-super">th</sup>
                </span>
                <span className="text-gray-900"> African conference on Research in Computer Science</span>
                <br className="hidden sm:block" />
                <span className="text-gray-900 text-[10px] sm:text-xs md:text-sm lg:text-base">and Applied Mathematics - Digital Science in Africa</span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm lg:text-base gap-1 sm:gap-2">
                <span className="text-red-600 font-bold whitespace-nowrap">21 - 24 Octobre 2026</span>
                <span className="text-gray-900 hidden xs:inline font-bold">●</span>
                <span className="text-gray-900 font-semibold whitespace-nowrap">Abomey-calavi, Cotonou</span>
              </div>
            </div>

            {/* Logos droite - Université et ASOS sur la même ligne */}
            <div className="flex-shrink-0 flex flex-row items-center justify-end gap-1 sm:gap-2 md:gap-3">
              {/* Logo Université */}
              <div className="w-10 h-10 max-[400px]:w-8 max-[400px]:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                <img
                  src="/assets/logo2.png"
                  alt="Logo Université"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error('Logo université non trouvé');
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                        <div class="text-[8px] sm:text-[10px] md:text-xs text-center text-gray-600 font-semibold">University<br/>Logo</div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              {/* Logo ASOS */}
              <div className="w-12 h-8 max-[400px]:w-10 max-[400px]:h-6 sm:w-16 sm:h-10 md:w-20 md:h-12 lg:w-24 lg:h-14">
                <img
                  src="/assets/logo3.png"
                  alt="Logo ASOS Africa"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error('Logo ASOS non trouvé');
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-white rounded border border-gray-300 flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800">asos</div>
                          <div class="text-[8px] sm:text-[10px] md:text-xs text-gray-600">Africa</div>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;