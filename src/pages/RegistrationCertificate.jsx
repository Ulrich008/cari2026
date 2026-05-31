import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';
import participantApi from '../api/participantApi';

const RegistrationCertificate = () => {
  const [loading, setLoading]                = useState(true);
  const [registration, setRegistration]      = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const [certificatesRemaining, setRemaining] = useState(3);

  const [downloading, setDownloading]        = useState(false);
  const [error, setError]                    = useState('');
  const [success, setSuccess]                = useState(false);

  useEffect(() => {
    Promise.all([
      participantApi.getMyRegistration(),
      participantApi.getProfile(),
    ])
      .then(([regRes, profileRes]) => {
        if (regRes?.has_registration) {
          setRegistration(regRes.data);
          setRemaining(regRes.data.certificate_remaining ?? 3);
        }
        const p = profileRes?.data ?? profileRes;
        const required = ['prenom', 'nom', 'email', 'telephone', 'institution', 'pays'];
        setProfileComplete(required.every((f) => p?.[f]?.trim?.()));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const paymentComplete = registration?.statut_paiement === 'paid';
  const canDownload     = profileComplete && paymentComplete && certificatesRemaining > 0;

  const conditionsCount = [profileComplete, paymentComplete, certificatesRemaining > 0].filter(Boolean).length;
  const progressPct     = Math.round((conditionsCount / 3) * 100);

  const handleDownload = async () => {
    setError('');
    setDownloading(true);
    try {
      const content = await participantApi.downloadCertificate();
      const blob = new Blob([content], { type: 'text/plain; charset=utf-8' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = 'certificate-cari2026.txt';
      a.click();
      URL.revokeObjectURL(url);
      setRemaining((prev) => Math.max(0, prev - 1));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err?.message || 'Erreur lors du téléchargement. Veuillez réessayer.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <RegistrationPortalLayout title="CERTIFICATE">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white px-6 py-8 text-center">
        <h2 className="text-2xl font-bold mb-1">Participation Certificate</h2>
        <p className="text-green-100 text-sm">18th African Conference on Research in Computer Science and Applied Mathematics</p>
      </div>

      <div className="bg-gray-100 p-6">
        <div className="bg-white shadow rounded p-6 space-y-6">

          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> Your participation certificate is available once your payment is validated.
              Maximum <strong>3 downloads</strong> allowed.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {/* Conditions */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Required Conditions</h3>
                <div className="space-y-2">
                  {[
                    {
                      ok: profileComplete,
                      label: 'Profile completed',
                      link: !profileComplete ? { to: '/registration/portal/myinfo', text: 'Complete my info' } : null,
                    },
                    {
                      ok: paymentComplete,
                      label: 'Payment validated',
                      link: !paymentComplete ? { to: '/registration/portal/payment', text: 'Make payment' } : null,
                    },
                    {
                      ok: certificatesRemaining > 0,
                      label: `Downloads remaining: ${certificatesRemaining}/3`,
                      link: null,
                    },
                  ].map(({ ok, label, link }, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className={`font-bold text-lg ${ok ? 'text-green-600' : 'text-red-500'}`}>
                        {ok ? '✓' : '✗'}
                      </span>
                      <span className={ok ? 'text-gray-700' : 'text-red-500'}>
                        {label}
                        {link && (
                          <Link to={link.to} className="ml-2 text-green-600 underline">{link.text}</Link>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Barre de progression */}
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{conditionsCount}/3 conditions met</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${canDownload ? 'bg-green-600' : 'bg-yellow-400'}`}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Statut */}
              <div className={`text-center py-3 rounded font-semibold text-sm ${canDownload ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                {canDownload ? '✅ Ready for download' : '⏳ Waiting for conditions'}
              </div>

              {/* Erreur / Succès */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">{error}</div>
              )}
              {success && (
                <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                  ✅ Votre certificat a été téléchargé ({3 - certificatesRemaining}/3 utilisés).
                </div>
              )}

              {/* Bouton */}
              <button
                onClick={handleDownload}
                disabled={!canDownload || downloading}
                className={`w-full py-3 font-semibold rounded transition text-sm text-white ${
                  canDownload
                    ? 'bg-green-700 hover:bg-green-800 hover:scale-[1.01]'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {downloading ? 'Generating...' : 'Download Certificate'}
              </button>

              <p className="text-xs text-center text-gray-400">Certificate will be provided in text format (PDF generation coming soon)</p>
            </>
          )}
        </div>
      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationCertificate;
