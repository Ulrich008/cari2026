import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: 'HOME',
      link: '/',
    },
    {
      title: 'CALLS',
      link: '/calls',
      submenu: [
        { title: 'CALL FOR PAPERS', link: '/calls/papers' },
        { title: 'CALL FOR WORKSHOPS', link: '/calls/workshops' },
        { title: 'CALL FOR SATELLITE EVENTS', link: '/calls/satellite-events' },
        { title: 'CALL FOR TUTORIALS AND KEYNOTES', link: '/calls/tutorials-keynotes' },
        { title: 'CALL FOR TPC MEMBERS AND REVIEWERS', link: '/calls/tpc-reviewers' },
      ],
    },
    {
      title: 'ORGANIZATION',
      link: '/organization',
      submenu: [
        { title: 'ORGANIZATION COMMITTEE', link: '/organization/committee' },
        { title: 'TECHNICAL PROGRAM COMMITTEE', link: '/organization/tpc' },
      ],
    },
    {
      title: 'PROGRAM',
      link: '/program',
      submenu: [
        { title: 'MAIN CONFERENCE', link: '/program/main-conference' },
        { title: 'WORKSHOP ON DATA SCIENCE AND AI FOR AGRICULTURE IN AFRICA', link: '/program/data-science-ai-agriculture' },
        { title: 'WORKSHOP ON NATURAL LANGUAGE PROCESSING', link: '/program/nlp' },
        { title: 'WORKSHOP ON CYBER SECURITY', link: '/program/cyber-security' },
        { title: 'INTERNATIONAL COOPERATION SESSION', link: '/program/international-cooperation' },
        { title: 'SATELLITE EVENTS (CIMPA SCHOOL AND SUMMER SCHOOL)', link: '/program/satellite-events' },
      ],
    },
    {
      title: 'REGISTRATION',
      link: '/registration',
    },
    {
      title: 'VENUE',
      link: '/venue',
    },
    {
      title: 'SPONSORS',
      link: '/sponsors',
    },
    {
      title: 'CONTACT',
      link: '/contact',
    },
  ];

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white border-b-2 border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Menu items */}
          <div className="flex items-center gap-1">
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.submenu && handleMouseEnter(index)}
                onMouseLeave={() => item.submenu && handleMouseLeave()}
              >
                <Link
                  to={item.link}
                  className={`px-4 py-4 font-bold text-sm inline-block transition-colors ${
                    item.title === 'HOME'
                      ? 'text-red-600 hover:text-red-700'
                      : 'text-black hover:text-red-600'
                  }`}
                >
                  {item.title}
                </Link>

                {/* Dropdown submenu */}
                {item.submenu && (
                  <div
                    className={`absolute left-0 top-full w-80 bg-red-600 border border-red-700 shadow-lg z-50 transition-all duration-200 ${
                      openDropdown === index
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.link}
                        className="block px-4 py-3 text-sm text-white hover:bg-red-700 hover:text-white border-b border-red-500 last:border-b-0 transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language selector */}
          <div className="flex items-center gap-2 px-4">
            <img
              src="/path/to/uk-flag.png"
              alt="English"
              className="w-6 h-4"
              onError={(e) => {
                // Fallback to emoji or text if image fails
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline';
              }}
            />
            <span className="hidden">🇬🇧</span>
            <span className="text-sm font-medium">En</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;