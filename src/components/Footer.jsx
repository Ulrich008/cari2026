import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'CALLS', path: '/calls' },
    { name: 'ORGANIZATION', path: '/organization' },
    { name: 'PROGRAM', path: '/program' },
    { name: 'REGISTRATION', path: '/registration' },
    { name: 'VENUE', path: '/venue' },
    { name: 'SPONSORS', path: '/sponsors' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-800">
      {/* Barre de couleurs en haut */}
      <div className="flex h-1">
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>

      {/* Contenu du footer */}
      <div className="container mx-auto px-4 py-8">
        {/* Menu de navigation */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-white hover:text-gray-300 font-medium text-sm md:text-base transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © Copyright CARI 2026 all right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;