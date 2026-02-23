import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();

  // Fermer le menu mobile quand la route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdowns({});
  }, [location]);

  const menuItems = [
    {
      title: 'HOME',
      link: '/',
    },
    {
      title: 'CALLS',
      submenu: [
        { title: 'CALL FOR PAPERS', link: '/calls/papers' },
        { title: 'CALL FOR PAPERS FOR CARI WORKSHOPS', link: '/calls/cari-workshops' },
        { title: 'CALL FOR PAPERS FOR SATELLITE EVENTS', link: '/calls/satellite-events' },
      ],
    },
    {
      title: 'ORGANIZATION',
      submenu: [
        { title: 'LOCAL ORGANIZATION COMMITTEE', link: '/organization/local-committee' },
        { title: 'TECHNICAL PROGRAM COMMITTEE', link: '/organization/tpc' },
        { title: 'CARI STEERING COMMITTEE', link: '/organization/cari-steering' },
      ],
    },
    {
      title: 'PROGRAM',
      link: '/program',
      submenu: [
        { title: 'MAIN CONFERENCE', link: '/program/main-conference' },
        { title: 'WORKSHOP ON DATA SCIENCE AND AI FOR AGRICULTURE IN AFRICA', link: '/program/data-science-ai-agriculture' },
        { title: 'WORKSHOP ON NLP FOR AFRICAN AND LOW-RESOURCE LANGUAGES', link: '/program/nlp-african-languages' },
        { title: 'WORKSHOP ON CYBERSECURITY IN AFRICA', link: '/program/cybersecurity-africa' },
        { title: 'INTERNATIONAL COOPERATION SESSION', link: '/program/international-cooperation' },
        { title: 'SATELLITE EVENTS: CIMPA SCHOOL AND SUMMER SCHOOL', link: '/program/satellite-events' },
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
      title: 'PARTNERS',
      link: '/partners',
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

  // Vérifie si un item est actif
  const isItemActive = (item) => {
    if (item.link === '/') {
      return location.pathname === '/';
    }
    // Pour les items avec sous-menus, on vérifie si le chemin commence par le lien de l'item
    // ou si un sous-menu est actif
    if (item.submenu) {
      return (
        location.pathname.startsWith(item.link + '/') ||
        location.pathname === item.link ||
        item.submenu.some(sub => location.pathname === sub.link)
      );
    }
    return location.pathname === item.link;
  };

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <nav className="bg-white border-b-2 border-gray-200 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo ou espace réservé - à adapter selon votre besoin */}
          <div className="flex items-center lg:hidden">
            {/* Bouton menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-red-600 focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu desktop - caché en mobile */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
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
                    isItemActive(item)
                      ? 'text-red-600'
                      : 'text-black hover:text-red-600'
                  }`}
                >
                  {item.title}
                </Link>

                {/* Dropdown desktop */}
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

          {/* Language selector - toujours visible */}
          <div className="flex items-center gap-2 px-4">
            <img
              src="/path/to/uk-flag.png"
              alt="English"
              className="w-6 h-4"
              onError={(e) => {
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

        {/* Menu mobile - affiché quand mobileMenuOpen est vrai */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'max-h-[80vh] opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-1">
            {menuItems.map((item, index) => (
              <div key={item.title} className="border-b border-gray-200 last:border-0">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left font-bold text-sm hover:bg-gray-50"
                    >
                      <span className={isItemActive(item) ? 'text-red-600' : 'text-black'}>
                        {item.title}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          mobileDropdowns[index] ? 'rotate-180' : ''
                        }`}
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
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        mobileDropdowns[index]
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="bg-gray-50 py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.link}
                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className={`block px-4 py-3 font-bold text-sm ${
                      isItemActive(item)
                        ? 'text-red-600'
                        : 'text-black hover:text-red-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;