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
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle au démontage
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
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden bg-gray-900">
        {/* Images du carrousel */}
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
                  // Image placeholder en cas d'erreur
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'%3E%3Crect fill='%23e2e8f0' width='1600' height='900'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='36' font-weight='bold' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ECampus Image ${index + 1}%3C/text%3E%3C/svg%3E`;
                }}
              />
              {/* Overlay très léger pour améliorer la lisibilité du header */}
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            </div>
          ))}
        </div>

        {/* Bouton précédent - centré verticalement sur l'image */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2.5 rounded-full shadow-xl transition-all duration-200 z-10 hover:scale-110"
          aria-label="Image précédente"
          style={{ marginTop: '60px' }} // Ajuste pour compenser le header
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
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

        {/* Bouton suivant - centré verticalement sur l'image */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2.5 rounded-full shadow-xl transition-all duration-200 z-10 hover:scale-110"
          aria-label="Image suivante"
          style={{ marginTop: '60px' }} // Ajuste pour compenser le header
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
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

        {/* Indicateurs de slides (points) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 w-10'
                  : 'bg-white bg-opacity-60 hover:bg-opacity-90 w-2.5'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* En-tête avec logos et titre - superposé au-dessus du carrousel */}
      <header className="absolute top-0 left-0 right-0 bg-white bg-opacity-95 shadow-md z-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo gauche - CARI 2026 */}
            <div className="flex-shrink-0 w-24 md:w-28">
              <img
                src="/assets/logo1.png"
                alt="Logo CARI 2026"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  console.error('Logo CARI non trouvé');
                  // Placeholder si le logo ne charge pas
                  e.target.parentElement.innerHTML = `
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-green-600 bg-white flex items-center justify-center shadow-lg mx-auto">
                      <div class="text-center">
                        <div class="text-sm md:text-base font-bold text-gray-700">CARI</div>
                        <div class="text-xs bg-green-600 text-white px-2 py-0.5 rounded mt-1">2026</div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Section centrale - Titre et détails */}
            <div className="flex-grow text-center px-4 md:px-6">
              <h1 className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight mb-1.5">
                <span className="text-red-600 text-xl md:text-3xl lg:text-4xl font-extrabold">
                  18<sup className="text-xs md:text-base align-super">th</sup>
                </span>
                <span className="text-gray-900"> African conference on Research in Computer Science</span>
                <br />
                <span className="text-gray-900">and Applied Mathematics - Digital Science in Africa</span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center mt-2 text-sm md:text-base lg:text-lg gap-2">
                <span className="text-red-600 font-bold">21 - 24 Octobre 2026</span>
                <span className="text-gray-900 hidden sm:inline font-bold">●</span>
                <span className="text-gray-900 font-semibold">Abomey-calavi, Cotonou</span>
              </div>
            </div>

            {/* Logos droite - Université et ASOS */}
            <div className="flex-shrink-0 w-24 md:w-28 flex flex-col items-center gap-2">
              {/* Logo Université */}
              <div className="w-16 h-16 md:w-20 md:h-20">
                <img
                  src="/assets/logo2.png"
                  alt="Logo Université"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error('Logo université non trouvé');
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                        <div class="text-xs text-center text-gray-600 font-semibold">University<br/>Logo</div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              {/* Logo ASOS */}
              <div className="w-20 h-12 md:w-24 md:h-14">
                <img
                  src="/assets/logo3.png"
                  alt="Logo ASOS Africa"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error('Logo ASOS non trouvé');
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-white rounded border border-gray-300 flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-base md:text-lg font-bold text-gray-800">asos</div>
                          <div class="text-xs text-gray-600">Africa</div>
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