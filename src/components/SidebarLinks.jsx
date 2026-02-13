import React, { useState } from 'react';

const SidebarLinks = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscription:', { name, email });
    setName('');
    setEmail('');
  };

  const links = [
    {
      title: 'PROGRAM BOOK',
      bg: 'bg-green-600',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
        </svg>
      )
    },
    {
      title: 'PHOTO GALLERY',
      bg: 'bg-red-600',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
      )
    },
    {
      title: 'IMPORTANT DATES',
      bg: 'bg-red-500',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14v11zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
        </svg>
      )
    },
    {
      title: 'PROCEEDINGS',
      bg: 'bg-red-500',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-6h8v2H8v-2zm0 4h8v2H8v-2zm0-8h5v2H8v-2z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="space-y-3 pt-16">
      {/* Boutons de liens rapides - Pleine largeur */}
      <div className="space-y-3">
        {links.map((link, index) => (
          <button
            key={index}
            className={`
              ${link.bg} text-white 
              w-full
              p-3 sm:p-4 
              rounded-lg cursor-pointer hover:opacity-90 transition-opacity 
              flex items-center gap-3 shadow-md
            `}
          >
            <div className="flex-shrink-0">
              {link.icon}
            </div>
            <h3 className="font-bold text-sm md:text-base uppercase">
              {link.title}
            </h3>
          </button>
        ))}
      </div>

      {/* Abonnement à la newsletter - Pleine largeur */}
      <div className="w-full bg-green-600 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-white text-sm sm:text-base mb-4 uppercase">
          NEWSLETTERS SUBSCRIPTION
        </h3>

        <form onSubmit={handleSubscribe} className="space-y-3">
          <input
            type="text"
            placeholder="Name & surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 sm:p-3 rounded-lg border-2 border-white bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 sm:p-3 rounded-lg border-2 border-white bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            type="submit"
            className="w-full bg-white text-green-600 py-2 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-sm uppercase text-sm"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default SidebarLinks;