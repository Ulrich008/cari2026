import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';
import { generateInvitationPDF } from '../utils/generateInvitationPDF';

const RegistrationInvitation = () => {
  const [userData] = useState({
    fullName: 'Marius AGOSSA',
    nationality: 'Beninese',
    affiliation: "University of Abomey-Calavi",
    profileCompleted: true,
    paymentCompleted: true,
  });
  const [formData, setFormData] = useState({
    fullName: '',
    nationality: '',
    affiliation: '',
    passportNumber: '',
  });
  const [generating, setGenerating] = useState(false);
  const [success, setSuccess]       = useState(false);
  const [error, setError]           = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('userRegistrationData');
    const base  = saved ? JSON.parse(saved) : userData;
    setFormData({
      fullName:       base.fullName       || userData.fullName,
      nationality:    base.nationality    || userData.nationality,
      affiliation:    base.affiliation    || userData.affiliation,
      passportNumber: base.passportNumber || '',
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGetInvitationLetter = async () => {
    setError('');
    if (!userData.profileCompleted || !userData.paymentCompleted) return;
    if (!formData.fullName || !formData.nationality || !formData.affiliation) {
      setError('Please fill in all required fields.');
      return;
    }
    setGenerating(true);
    try {
      generateInvitationPDF({
        fullName:       formData.fullName,
        affiliation:    formData.affiliation,
        nationality:    formData.nationality,
        passportNumber: formData.passportNumber || 'N/A',
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError('An error occurred while generating the PDF.');
    } finally {
      setGenerating(false);
    }
  };

  const allConditionsMet = userData.profileCompleted && userData.paymentCompleted;

  const inputClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 ' +
    'focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition bg-white';
  const selectClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 bg-white ' +
    'focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition appearance-none cursor-pointer';

  return (
    <RegistrationPortalLayout title="INVITATION LETTER">
      <style>{`
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .fade-in { animation: fadeIn 0.35s ease forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .select-wrap { position: relative; }
        .select-wrap::after {
          content: '';
          position: absolute;
          right: 12px; top: 50%;
          transform: translateY(-50%);
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #6b7280;
          pointer-events: none;
        }
      `}</style>

      <div className="bg-white shadow-md p-6 space-y-6">

        {/* Info banner */}
        <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-gray-700">
              Your invitation letter will be generated directly in your browser and downloaded as a PDF.
            </p>
          </div>
        </div>

        {/* Conditions */}
        <div>
          <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm mb-3">
            Required Conditions
          </div>
          <div className="space-y-2">
            {[
              { label: 'Profile completed',  done: userData.profileCompleted, link: '/registration/portal/myinfo',  linkLabel: 'Complete profile' },
              { label: 'Payment completed',  done: userData.paymentCompleted, link: '/registration/portal/payment', linkLabel: 'Make payment' },
            ].map(({ label, done, link, linkLabel }) => (
              <div key={label}
                className={`flex items-center gap-3 px-4 py-2.5 rounded border text-sm ${
                  done ? 'bg-green-50 border-green-200 text-green-800'
                       : 'bg-red-50  border-red-200  text-red-700'
                }`}>
                {done ? (
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                <span className="font-medium">{label}</span>
                {!done && (
                  <Link to={link} className="ml-auto text-blue-600 hover:underline text-xs font-medium">
                    {linkLabel} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm mb-4">
            Your Information
          </div>
          <div className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500">*</span> Full Name
              </label>
              <input type="text" name="fullName" value={formData.fullName}
                onChange={handleInputChange} className={inputClass}
                placeholder="As it will appear on the letter" />
              <p className="text-xs text-gray-400 mt-1">Your full name as it will appear on the invitation letter</p>
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500">*</span> Nationality
              </label>
              <div className="select-wrap">
                <select name="nationality" value={formData.nationality}
                  onChange={handleInputChange} className={selectClass}>
                  <option value="">Select your nationality</option>
                  {['Beninese', 'French', 'Canadian', 'Senegalese', 'Ivorian',
                    'Moroccan', 'Tunisian', 'Cameroonian', 'Togolese', 'Other'].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Affiliation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500">*</span> Affiliation
              </label>
              <input type="text" name="affiliation" value={formData.affiliation}
                onChange={handleInputChange} className={inputClass}
                placeholder="Your institution or organization" />
              <p className="text-xs text-gray-400 mt-1">Your institution or organization</p>
            </div>

            {/* Passport Number (optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Passport Number <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input type="text" name="passportNumber" value={formData.passportNumber}
                onChange={handleInputChange} className={inputClass}
                placeholder="e.g. BJ1234567" />
              <p className="text-xs text-gray-400 mt-1">Used for visa applications if required</p>
            </div>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="fade-in flex items-center gap-2 bg-red-50 border border-red-300 rounded px-4 py-3 text-sm text-red-800">
            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Success message */}
        {success && (
          <div className="fade-in flex items-center gap-2 bg-green-50 border border-green-300 rounded px-4 py-3 text-sm text-green-800">
            <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Your invitation letter has been successfully generated and downloaded!</span>
          </div>
        )}

        {/* Submit button */}
        <div>
          <button
            onClick={handleGetInvitationLetter}
            disabled={!allConditionsMet || generating}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded font-semibold text-sm transition ${
              allConditionsMet && !generating
                ? 'bg-green-700 hover:bg-green-800 text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {generating ? (
              <>
                <span className="spinner" />
                Generating…
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Invitation Letter
              </>
            )}
          </button>
          {!allConditionsMet && (
            <p className="text-xs text-red-500 text-center mt-2">
              Please complete your profile and make your payment first.
            </p>
          )}
          <p className="text-xs text-gray-400 text-center mt-2">
            The PDF will be generated and downloaded directly in your browser.
          </p>
        </div>

      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationInvitation;