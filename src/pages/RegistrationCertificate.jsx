import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';
import participantApi from '../api/participantApi';
import { generateCertificatePDF } from '../utils/generateCertificatePDF';

const RegistrationCertificate = () => {
  const [loading, setLoading]               = useState(true);
  const [certData, setCertData]             = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const [remaining, setRemaining]           = useState(3);
  const [errorFetch, setErrorFetch]         = useState('');

  const [generating, setGenerating] = useState(false);
  const [error, setError]           = useState('');
  const [success, setSuccess]       = useState(false);

  useEffect(() => {
    Promise.all([
      participantApi.getMyRegistration(),
      participantApi.getProfile(),
    ])
      .then(([regRes, profileRes]) => {
        const p = profileRes?.data ?? profileRes;
        const required = ['prenom', 'nom', 'email', 'telephone', 'institution', 'pays'];
        setProfileComplete(required.every((f) => p?.[f]?.trim?.()));

        if (regRes?.has_registration) {
          const reg = regRes.data;
          if (reg?.statut_registration === 'checked_in') {
            // Charger les données du certificat depuis le backend
            participantApi.getCertificateData()
              .then((res) => {
                const d = res?.data ?? res;
                setCertData(d);
                setRemaining(d.certificate_remaining ?? 3);
              })
              .catch((err) => {
                setErrorFetch(err?.message || 'Erreur de chargement des données du certificat.');
              });
          } else {
            setErrorFetch(
              reg?.statut_paiement === 'paid'
                ? 'Votre présence à la conférence doit être confirmée par un administrateur. Le certificat sera disponible après le check-in.'
                : 'Votre paiement doit être validé avant de pouvoir accéder au certificat.'
            );
          }
        } else {
          setErrorFetch('Vous n\'avez pas encore d\'inscription.');
        }
      })
      .catch(() => {
        setErrorFetch('Erreur lors du chargement. Veuillez réessayer.');
      })
      .finally(() => setLoading(false));
  }, []);

  const canDownload = !!certData && profileComplete && remaining > 0;
  const conditionsCount = [profileComplete, !!certData, remaining > 0].filter(Boolean).length;
  const progressPct = Math.round((conditionsCount / 3) * 100);

  const handleDownload = async () => {
    setError('');
    setGenerating(true);
    try {
      // 1. Générer et télécharger le PDF côté client
      await generateCertificatePDF({ fullName: certData.full_name });

      // 2. Notifier le backend (envoi email + incrément compteur)
      await participantApi.sendCertificateEmail();

      setRemaining((prev) => Math.max(0, prev - 1));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 7000);
    } catch (err) {
      setError(err?.message || 'Erreur lors du téléchargement. Veuillez réessayer.');
    } finally {
      setGenerating(false);
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
              <strong>Important:</strong> Your certificate is generated as a PDF directly in your browser
              and sent to your email address. Maximum <strong>3 downloads</strong> allowed.
              Your attendance must be confirmed by an administrator first.
            </p>
          </div>

          {loading && (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {!loading && (
            <>
              {/* Conditions */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Required Conditions</h3>
                <div className="space-y-2">
                  {[
                    { ok: profileComplete, label: 'Profile completed',          link: '/registration/portal/myinfo' },
                    { ok: !!certData,      label: 'Attendance confirmed (admin)', link: null },
                    { ok: remaining > 0,   label: `Downloads remaining: ${remaining}/3`, link: null },
                  ].map(({ ok, label, link }, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className={`font-bold text-lg ${ok ? 'text-green-600' : 'text-red-500'}`}>{ok ? '✓' : '✗'}</span>
                      <span className={ok ? 'text-gray-700' : 'text-red-500'}>
                        {label}
                        {!ok && link && <Link to={link} className="ml-2 text-green-600 underline">Complete my info</Link>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message d'erreur chargement */}
              {errorFetch && !certData && (
                <div className="p-4 bg-orange-50 border-l-4 border-orange-400 text-orange-700 text-sm">
                   {errorFetch}
                </div>
              )}

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
                  ✅ Certificate downloaded and email sent ({3 - remaining}/3 utilisés).
                </div>
              )}

              {/* Bouton */}
              <button
                onClick={handleDownload}
                disabled={!canDownload || generating}
                className={`w-full py-3 font-semibold rounded transition text-sm text-white ${
                  canDownload ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {generating ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Generating PDF...
                  </span>
                ) : 'Download Certificate (PDF)'}
              </button>

              <p className="text-xs text-center text-gray-400">
                Certificate generated in your browser using jsPDF — A4 landscape format
              </p>
            </>
          )}
        </div>
      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationCertificate;
