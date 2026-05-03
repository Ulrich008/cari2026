// src/pages/RegistrationCertificate.jsx (version avec confirmation manuelle)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';

const RegistrationCertificate = () => {
  const [registrationCompleted, setRegistrationCompleted] = useState(true);
  const [paymentCompleted, setPaymentCompleted] = useState(true);
  const [attendanceConfirmed, setAttendanceConfirmed] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCertificate = async () => {
    if (!registrationCompleted || !paymentCompleted || !attendanceConfirmed) {
      alert('Veuillez remplir toutes les conditions avant de télécharger le certificat.');
      return;
    }

    setIsDownloading(true);
    
    // Simuler un délai de téléchargement
    setTimeout(() => {
      console.log('Téléchargement du certificat...');
      alert('Votre certificat a été téléchargé avec succès !');
      setIsDownloading(false);
      
      // Ici, vous pouvez déclencher le téléchargement réel du PDF
      // window.location.href = '/api/certificate/download';
    }, 1500);
  };

  return (
    <RegistrationPortalLayout title="CERTIFICATE">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* En-tête avec icône */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-center">
          <div className="inline-block bg-white rounded-full p-3 mb-4">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Participation Certificate
          </h2>
          <p className="text-green-100">
            ‍18th African Conference on Research in Computer Science and Applied Mathematics
          </p>
        </div>

        {/* Message d'information */}
        <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-gray-700">
              Your certificate will be available after your participation in the conference.
              Please ensure all conditions are met before downloading.
            </p>
          </div>
        </div>

        {/* Liste des conditions */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Required Conditions</h3>
          
          <div className="space-y-4">
            {/* Condition 1: Registration */}
            <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200">
              <div className="flex-shrink-0 mt-0.5">
                {registrationCompleted ? (
                  <span className="text-green-600 text-xl">✔</span>
                ) : (
                  <span className="text-red-500 text-xl">✘</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-medium text-gray-800">Registration completed</span>
                  {!registrationCompleted && (
                    <Link 
                      to="/registration/portal/myinfo"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Complete now →
                    </Link>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Your registration information must be fully completed
                </p>
              </div>
            </div>

            {/* Condition 2: Payment */}
            <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200">
              <div className="flex-shrink-0 mt-0.5">
                {paymentCompleted ? (
                  <span className="text-green-600 text-xl">✔</span>
                ) : (
                  <span className="text-red-500 text-xl">✘</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-medium text-gray-800">Payment completed</span>
                  {!paymentCompleted && (
                    <Link 
                      to="/registration/portal/payment"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Make payment →
                    </Link>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Your registration fee must be fully paid
                </p>
              </div>
            </div>

            {/* Condition 3: Attendance */}
            <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200">
              <div className="flex-shrink-0 mt-0.5">
                {attendanceConfirmed ? (
                  <span className="text-green-600 text-xl">✔</span>
                ) : (
                  <span className="text-gray-400 text-xl">○</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-medium text-gray-800">Attendance confirmed</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={attendanceConfirmed}
                      onChange={(e) => setAttendanceConfirmed(e.target.checked)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-600">Confirm my attendance</span>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Confirm that you have attended/presented at the conference
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statut de préparation */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">Certificate Status:</span>
            <span className={`text-sm font-semibold px-2 py-1 rounded ${
              registrationCompleted && paymentCompleted && attendanceConfirmed
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {registrationCompleted && paymentCompleted && attendanceConfirmed
                ? '✓ Ready for download'
                : '⏳ Waiting for conditions'}
            </span>
          </div>
          
          {/* Barre de progression */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${((registrationCompleted ? 1 : 0) + (paymentCompleted ? 1 : 0) + (attendanceConfirmed ? 1 : 0)) * 33.33}%` 
              }}
            />
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            {((registrationCompleted ? 1 : 0) + (paymentCompleted ? 1 : 0) + (attendanceConfirmed ? 1 : 0))}/3 conditions completed
          </p>
        </div>

        {/* Bouton de téléchargement */}
        <div className="p-6 bg-white">
          <button
            onClick={handleDownloadCertificate}
            disabled={!registrationCompleted || !paymentCompleted || !attendanceConfirmed || isDownloading}
            className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              registrationCompleted && paymentCompleted && attendanceConfirmed && !isDownloading
                ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Certificate
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-400 text-center mt-3">
            * Certificate will be generated in PDF format and includes your participation details
          </p>
        </div>
      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationCertificate;