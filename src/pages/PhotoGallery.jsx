import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PhotoGallery = () => {
  const photos = [
    '/assets/gallery/photo1.JPG',
    '/assets/gallery/photo2.JPG',
    '/assets/gallery/photo3.JPG',
    '/assets/gallery/photo4.JPG',
    '/assets/gallery/photo5.JPG',
    '/assets/gallery/photo6.JPG',
    '/assets/gallery/photo7.JPG',
    '/assets/gallery/photo8.JPG',
    '/assets/gallery/photo9.JPG',
    '/assets/gallery/photo10.JPG',
    '/assets/gallery/photo11.JPG',
    '/assets/gallery/photo12.JPG',
    '/assets/gallery/photo13.JPG',
    '/assets/gallery/photo14.JPG',
    '/assets/gallery/photo15.jpg',
    '/assets/gallery/photo16.jpg',
    '/assets/gallery/photo17.jpg',
    '/assets/gallery/photo18.jpg',
    '/assets/gallery/photo19.jpg',
    '/assets/gallery/photo20.jpg',
    '/assets/gallery/photo21.jpg',
    '/assets/gallery/photo22.jpg',
    '/assets/gallery/photo23.JPG',
    '/assets/gallery/photo24.JPG',
    '/assets/gallery/photo25.JPG',
    '/assets/gallery/photo26.JPG',
    '/assets/gallery/photo27.JPG',
    '/assets/gallery/photo28.JPG',
    '/assets/gallery/photo29.JPG',
    '/assets/gallery/photo30.JPG',
    '/assets/gallery/photo31.JPG',
    '/assets/gallery/photo32.JPG',
    '/assets/gallery/photo33.JPG',
    '/assets/gallery/photo34.JPG',
    '/assets/gallery/photo35.JPG',
    '/assets/gallery/photo36.JPG',
    '/assets/gallery/photo37.JPG',
    '/assets/gallery/photo38.JPG',
    '/assets/gallery/photo39.JPG',
    '/assets/gallery/photo40.JPG',
    '/assets/gallery/photo41.JPG',
    '/assets/gallery/photo42.JPG',
    '/assets/gallery/photo43.JPG',
    '/assets/gallery/photo44.JPG',
    '/assets/gallery/photo45.JPG',
    '/assets/gallery/photo46.JPG',
    '/assets/gallery/photo47.JPG',
    '/assets/gallery/photo48.JPG',
    '/assets/gallery/photo49.JPG',
    '/assets/gallery/photo50.JPG',
    '/assets/gallery/photo51.JPG',
    '/assets/gallery/photo52.JPG',
    '/assets/gallery/photo53.JPG',
    '/assets/gallery/photo54.JPG',
  ];

  // État pour suivre le chargement de chaque image
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <Header />
      <Navigation />

      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 uppercase">
            PHOTO GALLERY
          </h1>

          <p className="text-gray-900 leading-relaxed mb-8 text-base">
            We are pleased to share with you some photos taken during the CARI 2024
            conference. Attached are images of these enjoyable and enriching moments.
            We hope they will bring back fond memories of this 17th edition.
          </p>

          {/* Grille optimisée avec images réduites */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-gray-200"
                style={{ aspectRatio: '4 / 3' }} // Ratio 4:3 pour réduire la hauteur
              >
                {/* Skeleton loader animé */}
                {!loadedImages[index] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
                )}

                <img
                  src={photo}
                  alt={`CARI 2024 Conference Photo ${index + 1}`}
                  loading="lazy" // Lazy loading natif
                  decoding="async" // Décodage asynchrone
                  width="400" // Taille réduite
                  height="300" // Taille réduite (ratio 4:3)
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    loadedImages[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                  onError={(e) => {
                    setLoadedImages((prev) => ({ ...prev, [index]: true }));
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e2e8f0' width='400' height='300'/%3E%3Ctext fill='%23718096' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPhoto ${
                      index + 1
                    }%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PhotoGallery;