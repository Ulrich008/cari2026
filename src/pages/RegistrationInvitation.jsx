import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';
import participantApi from '../api/participantApi';

const nationalities = [
  'Béninoise', 'Française', 'Canadienne', 'Sénégalaise', 'Ivoirienne',
  'Marocaine', 'Tunisienne', 'Togolaise', 'Burkinabè', 'Camerounaise',
  'Nigériane', 'Ghanéenne', 'Autre',
];

const RegistrationInvitation = () => {
  const [loading, setLoading]                 = useState(true);
  const [registration, setRegistration]       = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const [invitationsRemaining, setRemaining]  = useState(3);

  const [formData, setFormData] = useState({ full_name: '', nationality: '', institution: '' });
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
          setRegistration(regRes.data);
          setRemaining(regRes.data.invitation_letter_remaining ?? 3);
        }
        const p = profileRes?.data ?? profileRes;
        const required = ['prenom', 'nom', 'email', 'telephone', 'institution', 'pays'];
        setProfileComplete(required.every((f) => p?.[f]?.trim?.()));
        setFormData({
          full_name:   `${p?.prenom ?? ''} ${p?.nom ?? ''}`.trim(),
          nationality: '',
          institution: p?.institution ?? '',
        });
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const paymentComplete = registration?.statut_paiement === 'paid';
  const canGenerate     = profileComplete && paymentComplete && invitationsRemaining > 0;

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleGenerate = async () => {
    if (!formData.full_name || !formData.nationality || !formData.institution) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    setError('');
    setGenerating(true);
    try {
      const content = await participantApi.generateInvitationLetter(formData);
      const blob = new Blob([content], { type: 'text/plain; charset=utf-8' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = 'invitation-letter-cari2026.txt';
      a.click();
      URL.revokeObjectURL(url);
      setRemaining((prev) => Math.max(0, prev - 1));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err?.message || 'Erreur lors de la génération.');
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
              <strong>Important:</strong> Your invitation letter is based on your registration information.
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
                          <Link to={link.to} className="ml-2 text-green-600 underline">
                            {link.text}
                          </Link>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulaire */}
              {canGenerate && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Your Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input name="full_name" value={formData.full_name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <select name="nationality" value={formData.nationality} onChange={handleChange} className={inputClass}>
                      <option value="">Select your nationality</option>
                      {nationalities.map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Institution <span className="text-red-500">*</span>
                    </label>
                    <input name="institution" value={formData.institution} onChange={handleChange} className={inputClass} />
                  </div>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">{error}</div>
              )}
              {success && (
                <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                  ✅ Votre lettre a été téléchargée ({3 - invitationsRemaining}/3 utilisées).
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={!canGenerate || generating}
                className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 font-semibold rounded transition text-sm"
              >
                {generating ? 'Génération en cours...' : 'Get Invitation Letter'}
              </button>

              {!canGenerate && (
                <p className="text-xs text-center text-gray-400">
                  {invitationsRemaining === 0
                    ? 'Limite de 3 téléchargements atteinte.'
                    : 'Remplissez les conditions ci-dessus pour continuer.'}
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
