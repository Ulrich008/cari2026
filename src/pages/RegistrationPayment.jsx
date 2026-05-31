import React, { useState, useEffect } from 'react';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';
import participantApi from '../api/participantApi';
import publicApi from '../api/publicApi';

const packages = [
  { label: '18th CARI CONF/Local Author',     value: '18th CARI CONF/Local Author',     price: 479 },
  { label: '18th CARI CONF/Non-local',         value: '18th CARI CONF/Non-local',         price: 635 },
  { label: '18th CARI CONF/Local/ONLINE',      value: '18th CARI CONF/Local/ONLINE',      price: 348 },
  { label: '18th CARI CONF/Non-Local/ONLINE',  value: '18th CARI CONF/Non-Local/ONLINE',  price: 468 },
  { label: 'CARI CONF LATE NON/AUTHOR (Free)', value: 'CARI CONF LATE NON/AUTHOR',        price: 0 },
];

const inputClass =
  'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition bg-white';

const RegistrationPayment = () => {
  const [loading, setLoading]                 = useState(true);
  const [registration, setRegistration]       = useState(null);
  const [papiersDisponibles, setPapiers]      = useState([]);

  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedPackagePrice, setPrice]      = useState(0);
  const [participeGala, setGala]              = useState(false);
  const [galaQuantity, setGalaQty]            = useState(1);
  const [invoiceAmendment, setInvoice]        = useState(false);
  const [selectedPapierIds, setSelectedPapiers] = useState([]);
  const [showSubmissions, setShowSubmissions] = useState(false);

  const [discountCode, setDiscountCode]       = useState('');
  const [discountResult, setDiscountResult]   = useState(null);
  const [applyingDiscount, setApplyingDiscount] = useState(false);

  const [submitting, setSubmitting]           = useState(false);
  const [successMsg, setSuccessMsg]           = useState('');
  const [errorMsg, setErrorMsg]               = useState('');

  useEffect(() => {
    participantApi.getMyRegistration()
      .then((res) => {
        if (res?.has_registration) {
          setRegistration(res.data);
        }
        setPapiers(res?.papiers_disponibles ?? []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const montantTotal = () => {
    let total = selectedPackagePrice;
    if (participeGala) total += galaQuantity * 60;
    if (invoiceAmendment) total += 20;
    if (discountResult?.valide) {
      total = total * (1 - parseFloat(discountResult.data.pourcentage) / 100);
    }
    return total.toFixed(2);
  };

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;
    setApplyingDiscount(true);
    setDiscountResult(null);
    try {
      const res = await publicApi.verifyDiscountCode(discountCode.trim());
      setDiscountResult(res);
    } catch (_) {
      setDiscountResult({ valide: false, message: 'Erreur lors de la vérification.' });
    } finally {
      setApplyingDiscount(false);
    }
  };

  const togglePapier = (id) => {
    setSelectedPapiers((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    if (!selectedPackage) {
      setErrorMsg('Veuillez sélectionner un package de registration.');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');
    try {
      const data = {
        type_registration: selectedPackage,
        participe_gala:    participeGala,
        discount_code:     discountCode.trim() || null,
        papier_ids:        selectedPapierIds,
      };
      const res = await participantApi.createRegistration(data);
      setRegistration(res.data);
      setSuccessMsg('Votre inscription a été enregistrée. Statut : En attente de paiement.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setErrorMsg(err?.message || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  const statusColor = {
    pending:    'text-yellow-600',
    paid:       'text-green-600',
    cancelled:  'text-red-500',
  };

  return (
    <RegistrationPortalLayout title="PAYMENT">
      <div className="bg-gray-100 p-6">
        <div className="bg-white shadow rounded overflow-hidden">

          {/* Messages */}
          {successMsg && (
            <div className="m-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 text-sm">
              ✅ {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="m-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
              ❌ {errorMsg}
            </div>
          )}

          {/* Info banner */}
          <div className="p-4 m-6 bg-yellow-50 border-l-4 border-yellow-500">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> All payments are processed in US dollars.
              Please ensure your billing information is correct before proceeding.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : registration ? (
            /* ── Registration existante — affichage du statut ── */
            <div className="p-6">
              <h3 className="text-lg font-bold text-green-700 mb-4">Votre inscription</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div><span className="font-semibold">Type :</span> {registration.type_registration}</div>
                <div>
                  <span className="font-semibold">Statut paiement :</span>{' '}
                  <span className={`font-semibold ${statusColor[registration.statut_paiement] ?? 'text-gray-600'}`}>
                    {registration.statut_paiement?.toUpperCase()}
                  </span>
                </div>
                {registration.montant_total && (
                  <div><span className="font-semibold">Montant :</span> {registration.montant_reduit ?? registration.montant_total} USD</div>
                )}
                {registration.participe_gala && (
                  <div className="text-green-600">✅ Gala dinner inclus</div>
                )}
              </div>

              {registration.statut_paiement !== 'paid' && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded text-sm text-blue-700">
                  Votre inscription est en attente de paiement. Le paiement sera disponible
                  dès que l'agrégateur sera configuré. Vous serez notifié par email.
                </div>
              )}

              {registration.papiers && registration.papiers.length > 0 && (
                <div className="mt-4">
                  <p className="font-semibold text-sm text-gray-700 mb-2">Papiers inscrits :</p>
                  <ul className="list-disc ml-4 text-sm text-gray-600 space-y-1">
                    {registration.papiers.map((p) => (
                      <li key={p.id}>{p.titre} <span className="text-gray-400">(ID: {p.submission_id})</span></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            /* ── Formulaire de création de registration ── */
            <>
              {/* PACKAGES */}
              <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
                Registration Packages
              </div>

              <div className="p-6 text-sm">
                {/* Discount code */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-gray-700">If you have a discount code:</span>
                  <input
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="CODE..."
                    className="border border-gray-300 bg-white px-2 py-1 w-32 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <button
                    onClick={handleApplyDiscount}
                    disabled={applyingDiscount}
                    className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-3 py-1 rounded transition text-sm"
                  >
                    {applyingDiscount ? '...' : 'Apply'}
                  </button>
                  {discountResult && (
                    <span className={`text-sm font-semibold ${discountResult.valide ? 'text-green-600' : 'text-red-500'}`}>
                      {discountResult.valide
                        ? `✅ ${discountResult.data.pourcentage}% de réduction`
                        : `❌ ${discountResult.message}`}
                    </span>
                  )}
                  <span className="ml-auto flex items-center gap-2 text-gray-700">
                    Total: <span className="font-bold text-green-700">{montantTotal()} USD</span>
                  </span>
                </div>

                <p className="font-semibold mb-2 text-gray-800">Select your package:</p>
                <div className="space-y-2">
                  {packages.map((pkg) => (
                    <label key={pkg.value} className="flex items-center gap-2 text-gray-700">
                      <input
                        type="radio"
                        checked={selectedPackage === pkg.value}
                        onChange={() => { setSelectedPackage(pkg.value); setPrice(pkg.price); }}
                        className="accent-green-700"
                      />
                      {pkg.label} — <span className="font-semibold">{pkg.price} USD</span>
                    </label>
                  ))}
                </div>

                {/* Extras */}
                <div className="mt-6">
                  <p className="font-semibold mb-2 text-gray-800">Extras</p>
                  <div className="flex items-center gap-2 mb-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={participeGala}
                      onChange={(e) => setGala(e.target.checked)}
                      className="accent-green-700"
                    />
                    Extra Gala Dinner Ticket (60 USD × qty)
                    {participeGala && (
                      <input
                        type="number"
                        min={1}
                        value={galaQuantity}
                        onChange={(e) => setGalaQty(Math.max(1, parseInt(e.target.value) || 1))}
                        className="border border-gray-300 w-16 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    )}
                  </div>
                  <label className="flex items-center gap-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={invoiceAmendment}
                      onChange={(e) => setInvoice(e.target.checked)}
                      className="accent-green-700"
                    />
                    Invoice Amendment (20 USD)
                  </label>
                </div>
              </div>

              {/* GENERAL INFO */}
              <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
                General Information
              </div>
              <div className="p-6 text-sm text-gray-700">
                <ul className="list-disc ml-6 space-y-1">
                  <li>Participation in all sessions</li>
                  <li>Paper submission</li>
                  <li>Meals</li>
                  <li>Gala dinner</li>
                </ul>
              </div>

              {/* SUBMISSIONS */}
              {papiersDisponibles.length > 0 && (
                <>
                  <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
                    Submission Registration
                  </div>
                  <div className="p-6 text-sm text-gray-700">
                    <label className="flex items-center gap-2 mb-4">
                      <input
                        type="checkbox"
                        checked={showSubmissions}
                        onChange={(e) => setShowSubmissions(e.target.checked)}
                        className="accent-green-700"
                      />
                      I am an author and wish to register my submissions
                    </label>
                    {showSubmissions && (
                      <div className="ml-6 space-y-3">
                        {papiersDisponibles.map((p) => (
                          <label key={p.id} className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedPapierIds.includes(p.id)}
                              onChange={() => togglePapier(p.id)}
                              className="mt-1 accent-green-700"
                            />
                            <span>
                              <span className="font-semibold">#{p.submission_id}</span> — {p.titre}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* BUTTON */}
              <div className="p-6">
                <button
                  onClick={handleSubmit}
                  disabled={submitting || !selectedPackage}
                  className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 font-semibold rounded transition text-sm"
                >
                  {submitting ? 'Enregistrement...' : 'Register & Proceed to Payment'}
                </button>
                {!selectedPackage && (
                  <p className="text-xs text-gray-400 text-center mt-2">Sélectionnez un package pour continuer</p>
                )}
              </div>
            </>
          )}

        </div>
      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationPayment;
