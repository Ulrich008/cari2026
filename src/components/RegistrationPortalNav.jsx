// src/components/RegistrationPortalNav.jsx (version explicite)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCreditCard, FaFileInvoice, FaTrophy, FaSignOutAlt } from 'react-icons/fa';

const RegistrationPortalNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    return currentPath === path;
  };

  const linkClass = (path) => {
    return `flex items-center gap-2 transition-colors text-base md:text-lg ${
      isActive(path)
        ? 'text-red-600 font-semibold'
        : 'text-gray-600 hover:text-red-600'
    }`;
  };

  return (
    <div className="bg-white rounded-t-xl shadow-md border-b-2 border-red-500 mb-8">
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 py-4 px-6 text-base md:text-lg font-medium">
        {/* HOME */}
        <Link 
          to="/registration/portal"
          className={linkClass('/registration/portal')}
        >
          <FaHome className="text-lg md:text-xl" /> HOME
        </Link>
        
        <span className="text-gray-300 text-lg">|</span>
        
        {/* MY INFO */}
        <Link 
          to="/registration/portal/myinfo"
          className={linkClass('/registration/portal/myinfo')}
        >
          <FaUser className="text-lg md:text-xl" /> my info
        </Link>
        
        <span className="text-gray-300 text-lg">|</span>
        
        {/* PAYMENT */}
        <Link 
          to="/registration/portal/payment"
          className={linkClass('/registration/portal/payment')}
        >
          <FaCreditCard className="text-lg md:text-xl" /> payment
        </Link>
        
        <span className="text-gray-300 text-lg">|</span>
        
        {/* INVITATION LETTER */}
        <Link 
          to="/registration/portal/invitation"
          className={linkClass('/registration/portal/invitation')}
        >
          <FaFileInvoice className="text-lg md:text-xl" /> invitation letter
        </Link>
        
        <span className="text-gray-300 text-lg">|</span>
        
        {/* CERTIFICATE */}
        <Link 
          to="/registration/portal/certificate"
          className={linkClass('/registration/portal/certificate')}
        >
          <FaTrophy className="text-lg md:text-xl" /> certificate
        </Link>
        
        <span className="text-gray-300 text-lg">|</span>
        
        {/* LOGOUT - toujours gris, pas d'état actif */}
        <Link 
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors text-base md:text-lg"
        >
          <FaSignOutAlt className="text-lg md:text-xl" /> logout
        </Link>
      </div>
    </div>
  );
};

export default RegistrationPortalNav;