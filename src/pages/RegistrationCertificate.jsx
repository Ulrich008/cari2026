// src/pages/RegistrationCertificate.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';
import { generateCertificatePDF } from '../utils/generateCertificatePDF';

const RegistrationCertificate = () => {
  const [registrationCompleted] = useState(true);
  const [paymentCompleted]      = useState(true);
  const [attendanceConfirmed, setAttendanceConfirmed] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [success, setSuccess]   = useState(false);
  const [error, setError]       = useState('');

  // ── Replace with real user data from your auth/context ──
  const participantName = 'Marius AGOSSA';

  const allMet = registrationCompleted && paymentCompleted && attendanceConfirmed;
  const progress = (
    (registrationCompleted ? 1 : 0) +
    (paymentCompleted      ? 1 : 0) +
    (attendanceConfirmed   ? 1 : 0)
  );

  const handleDownload = async () => {
    setError('');
    if (!allMet) return;
    setIsDownloading(true);
    try {
      generateCertificatePDF({ fullName: participantName });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError('An error occurred while generating the certificate. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <RegistrationPortalLayout title="CERTIFICATE">
      <style>{`
        .fade-in {
          animation: fadeIn 0.35s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-center">
          <div className="inline-block bg-white rounded-full p-3 mb-4">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Participation Certificate
          </h2>
          <p className="text-green-100">
            18th African Conference on Research in Computer Science and Applied Mathematics
          </p>
        </div>

        {/* Info banner */}
        <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-gray-700">
              Your certificate will be generated directly in your browser and downloaded as a PDF.
              Please ensure all conditions are met before downloading.
            </p>
          </div>
        </div>

        {/* Conditions */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Required Conditions</h3>
          <div className="space-y-3">

            {/* Registration */}
            <div className={`flex items-start gap-3 p-3 rounded-lg border text-sm ${
              registrationCompleted ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex-shrink-0 mt-0.5">
                {registrationCompleted
                  ? <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                  : <svg className="w-4 h-4 text-red-500"   fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
                }
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-medium text-gray-800">Registration completed</span>
                  {!registrationCompleted && (
                    <Link to="/registration/portal/myinfo" className="text-xs text-blue-600 hover:underline font-medium">
                      Complete now →
                    </Link>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">Your registration information must be fully completed</p>
              </div>
            </div>

            {/* Payment */}
            <div className={`flex items-start gap-3 p-3 rounded-lg border text-sm ${
              paymentCompleted ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex-shrink-0 mt-0.5">
                {paymentCompleted
                  ? <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                  : <svg className="w-4 h-4 text-red-500"   fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
                }
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-medium text-gray-800">Payment completed</span>
                  {!paymentCompleted && (
                    <Link to="/registration/portal/payment" className="text-xs text-blue-600 hover:underline font-medium">
                      Make payment →
                    </Link>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">Your registration fee must be fully paid</p>
              </div>
            </div>

            {/* Attendance */}
            <div className={`flex items-start gap-3 p-3 rounded-lg border text-sm ${
              attendanceConfirmed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex-shrink-0 mt-0.5">
                {attendanceConfirmed
                  ? <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                  : <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.5}/></svg>
                }
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
                    <span className="text-xs text-gray-600">Confirm my attendance</span>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">Confirm that you have attended / presented at the conference</p>
              </div>
            </div>

          </div>
        </div>

        {/* Progress */}
        <div className="px-6 pb-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2 pt-4">
            <span className="text-sm font-medium text-gray-700">Certificate Status:</span>
            <span className={`text-xs font-semibold px-2 py-1 rounded ${
              allMet ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
              {allMet ? '✓ Ready for download' : '⏳ Waiting for conditions'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(progress / 3) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 text-center">{progress}/3 conditions completed</p>
        </div>

        {/* Error */}
        {error && (
          <div className="fade-in mx-6 mb-2 flex items-center gap-2 bg-red-50 border border-red-300 rounded px-4 py-3 text-sm text-red-800">
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="fade-in mx-6 mb-2 flex items-center gap-2 bg-green-50 border border-green-300 rounded px-4 py-3 text-sm text-green-800">
            <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Your certificate has been successfully generated and downloaded!</span>
          </div>
        )}

        {/* Download button */}
        <div className="p-6 bg-white">
          <button
            onClick={handleDownload}
            disabled={!allMet || isDownloading}
            className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm ${
              allMet && !isDownloading
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Generating…
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Certificate
              </>
            )}
          </button>

          {!allMet && (
            <p className="text-xs text-red-500 text-center mt-2">
              Please complete all conditions before downloading.
            </p>
          )}
          <p className="text-xs text-gray-400 text-center mt-2">
            * The PDF will be generated and downloaded directly in your browser
          </p>
        </div>

      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationCertificate;