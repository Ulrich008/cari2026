import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';
import participantApi from '../api/participantApi';
import { generateInvitationPDF } from '../utils/generateInvitationPDF';

const nationalities = [
  'Béninoise', 'Française', 'Canadienne', 'Sénégalaise', 'Ivoirienne',
  'Marocaine', 'Tunisienne', 'Togolaise', 'Burkinabè', 'Camerounaise',
  'Nigériane', 'Ghanéenne', 'Autre',
];

const RegistrationInvitation = () => {
  const [loading, setLoading]                 = useState(true);
  const [profileComplete, setProfileComplete] = useState(false);
  const [invitationsRemaining, setRemaining]  = useState(3);

  const [formData, setFormData] = useState({
    full_name:       '',
    nationality:     '',
    passport_number: '',
  });
  const [generating, setGenerating] = useState(false);
  const [error, setError]           = useState('');
  const [success, setSuccess]       = useState(false);

  useEffect(() => {
    Promise.all([
      participantApi.getMyRegistration(),
      participantApi.getProfile(),
    ])
      .then(([regRes, profileRes]) => {
        if (regRes?.has_registration) {
          setRemaining(regRes.data?.invitation_letter_remaining ?? 3);
        }
        const p = profileRes?.data ?? profileRes;
        const required = ['prenom', 'nom', 'email', 'telephone', 'institution', 'pays'];
        setProfileComplete(required.every((f) => p?.[f]?.trim?.()));
        setFormData((prev) => ({
          ...prev,
          full_name: `${p?.prenom ?? ''} ${p?.nom ?? ''}`.trim(),
        }));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const canGenerate = profileComplete && invitationsRemaining > 0;

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleGenerate = async () => {
    if (!formData.full_name || !formData.nationality) {
      setError('Veuillez remplir le nom complet et la nationalité.');
      return;
    }
    setError('');
    setGenerating(true);
    try {
      // 1. Récupérer les données du backend (vérifie paiement + compteur)
      const res  = await participantApi.getInvitationData();
      const data = res.data;

      // 2. Générer le PDF côté client avec jsPDF
      await generateInvitationPDF({
        fullName:       formData.full_name || data.full_name,
        affiliation:    data.institution,
        nationality:    formData.nationality,
        passportNumber: formData.passport_number || 'N/A',
      });

      // 3. Envoyer l'email + incrémenter le compteur côté serveur
      await participantApi.sendInvitationEmail({
        full_name:       formData.full_name || data.full_name,
        nationality:     formData.nationality,
        passport_number: formData.passport_number || '',
      });

      setRemaining(Math.max(0, (data.invitation_letter_remaining ?? 3) - 1));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      setError(err?.message || 'Erreur lors de la génération. Vérifiez que votre paiement est validé.');
    } finally {
      setGenerating(false);
    }
  };

  const inputClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white';

  return (
    <RegistrationPortalLayout title="INVITATION LETTER">
      <div className="bg-gray-100 p-6">
        <div className="bg-white shadow rounded p-6 space-y-6">

          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> Your invitation letter is generated as a PDF on your device.
              An email confirmation is also sent to your registered address.
              Maximum <strong>3 downloads</strong> allowed. Requires validated payment.
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
                      ok: invitationsRemaining > 0,
                      label: `Downloads remaining: ${invitationsRemaining}/3`,
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

              {/* Formulaire */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Your Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="As it appears on your passport"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select your nationality</option>
                    {nationalities.map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Passport Number <span className="text-gray-400 text-xs">(optional)</span>
                  </label>
                  <input
                    name="passport_number"
                    value={formData.passport_number}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. AB123456"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">{error}</div>
              )}
              {success && (
                <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                  ✅ PDF téléchargé sur votre appareil + email de confirmation envoyé.
                  ({3 - invitationsRemaining}/3 utilisés)
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={!canGenerate || generating}
                className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 font-semibold rounded transition text-sm"
              >
                {generating ? 'Generating PDF...' : 'Get Invitation Letter (PDF)'}
              </button>

              {!canGenerate && (
                <p className="text-xs text-center text-gray-400">
                  {invitationsRemaining === 0
                    ? 'Limite de 3 téléchargements atteinte.'
                    : 'Complétez votre profil et validez votre paiement pour continuer.'}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationInvitation;
