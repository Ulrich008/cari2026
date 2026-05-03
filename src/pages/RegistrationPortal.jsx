import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';

const RegistrationPortal = () => {
  return (
    <RegistrationPortalLayout title="HOME">
      {/* Card principale */}
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        
        {/* Titre de bienvenue */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 text-center">
          Welcome to CARI 2026 Registration Portal
        </h2>

        {/* Sous-titre */}
        <p className="text-gray-600 text-center text-lg mb-12">
          Manage your registration, complete your payment, and access your documents in one place.
        </p>

        {/* Statuts en ligne */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12 text-lg">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Profile Status :</span>
            <span className="text-green-600 flex items-center gap-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Complete
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Payment Status :</span>
            <span className="text-yellow-600 flex items-center gap-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              Pending
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Registration Status :</span>
            <span className="text-yellow-600 flex items-center gap-1">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              In Progress
            </span>
          </div>
        </div>

        {/* Boutons d'action verts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link 
            to="/registration/portal/myinfo"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Complete/  <br />Edit My Info
          </Link>

          <Link 
            to="/registration/portal/payment"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Make Payment
          </Link>

          <Link 
            to="/registration/portal/invitation"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Get Invitation Letter
          </Link>

          <Link 
            to="/registration/portal/certificate"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Certificate
          </Link>
        </div>
      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationPortal;