import React, { useState, useEffect } from 'react';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';
import participantApi from '../api/participantApi';
import publicApi from '../api/publicApi';

const registrationFees = [
  { id: 'africansStudents',  category: "Africans Students live in Africa",       early: 40,  late: 80,  onsite: 100 },
  { id: 'othersStudents',    category: "Others Students",                         early: 150, late: 200, onsite: 250 },
  { id: 'researchersAfrica', category: "Researchers affiliated living in Africa", early: 150, late: 200, onsite: 250 },
  { id: 'othersResearchers', category: "Others Researchers",                      early: 250, late: 300, onsite: 400 },
];

const galaDinnerFees = {
  africanStudent: { early: 10, late: 10, onsite: 10,  label: "Gala Dinner for African Students" },
  researcher:     { early: 20, late: 20, onsite: 10,  label: "Gala Dinner for Researchers" },
};

const inputClass =
  'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition bg-white';

const statusColor = { pending: 'text-yellow-600', paid: 'text-green-600', cancelled: 'text-red-500' };

const RegistrationPayment = () => {
  const [loading, setLoading]           = useState(true);
  const [registration, setRegistration] = useState(null);
  const [papiersDisponibles, setPapiers] = useState([]);

  const [registrantType, setRegistrantType]         = useState('individual');
  const [discountCode, setDiscountCode]             = useState('');
  const [discountResult, setDiscountResult]         = useState(null);
  const [applyingDiscount, setApplyingDiscount]     = useState(false);

  const [selectedCategory, setSelectedCategory]     = useState('');
  const [registrationPeriod, setRegistrationPeriod] = useState('early');

  const [galaForStudent, setGalaForStudent]             = useState(false);
  const [galaStudentPeriod, setGalaStudentPeriod]       = useState('early');
  const [galaStudentQuantity, setGalaStudentQuantity]   = useState(0);
  const [galaForResearcher, setGalaForResearcher]       = useState(false);
  const [galaResearcherPeriod, setGalaResearcherPeriod] = useState('early');
  const [galaResearcherQuantity, setGalaResearcherQuantity] = useState(0);

  const [registerSubmissions, setRegisterSubmissions] = useState(true);
  const [selectedSubmissions, setSelectedSubmissions] = useState([]);

  const [openCategories, setOpenCategories] = useState({
    africansStudents: true, othersStudents: true,
    researchersAfrica: true, othersResearchers: true,
    galaStudent: true, galaResearcher: true,
  });

  const [submitting, setSubmitting]   = useState(false);
  const [successMsg, setSuccessMsg]   = useState('');
  const [errorMsg, setErrorMsg]       = useState('');

  useEffect(() => {
    participantApi.getMyRegistration()
      .then((res) => {
        if (res?.has_registration) setRegistration(res.data);
        setPapiers(res?.papiers_disponibles ?? []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const toggleCategory = (cat) =>
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));

  const getPriceForCategory = (category, period) => {
    const fee = registrationFees.find(f => f.category === category);
    if (!fee) return 0;
    return fee[period] ?? fee.early;
  };

  const getGalaPrice = (type, period) => {
    const gala = galaDinnerFees[type];
    if (!gala) return 0;
    return gala[period] ?? gala.early;
  };

  const calculateTotal = () => {
    let total = getPriceForCategory(selectedCategory, registrationPeriod);
    if (galaForStudent && galaStudentQuantity > 0) {
      total += galaStudentQuantity * getGalaPrice('africanStudent', galaStudentPeriod);
    }
    if (galaForResearcher && galaResearcherQuantity > 0) {
      total += galaResearcherQuantity * getGalaPrice('researcher', galaResearcherPeriod);
    }
    if (discountResult?.valide) {
      total = total * (1 - parseFloat(discountResult.data.pourcentage) / 100);
    }
    return total.toFixed(2);
  };

  const handleCategorySelect = (category, period) => {
    setSelectedCategory(category);
    setRegistrationPeriod(period);
  };

  const handlePeriodChange = (period) => setRegistrationPeriod(period);

  const handleGalaStudentChange = (checked) => {
    setGalaForStudent(checked);
    if (!checked) setGalaStudentQuantity(0);
  };

  const handleGalaResearcherChange = (checked) => {
    setGalaForResearcher(checked);
    if (!checked) setGalaResearcherQuantity(0);
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

  const toggleSubmission = (id) =>
    setSelectedSubmissions(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );

  const handleSubmit = async () => {
    if (!selectedCategory) {
      setErrorMsg('Veuillez sélectionner une catégorie d\'inscription.');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');
    try {
      const data = {
        registrant_type:           registrantType,
        type_registration:         selectedCategory,
        periode_inscription:       registrationPeriod,
        participe_gala_etudiant:   galaForStudent,
        gala_etudiant_quantite:    galaStudentQuantity,
        gala_etudiant_periode:     galaStudentPeriod,
        participe_gala_chercheur:  galaForResearcher,
        gala_chercheur_quantite:   galaResearcherQuantity,
        gala_chercheur_periode:    galaResearcherPeriod,
        discount_code:             discountCode.trim() || null,
        papier_ids:                selectedSubmissions,
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

  return (
    <RegistrationPortalLayout title="PAYMENT">
      <div className="bg-gray-100 p-6">
        <div className="bg-white shadow rounded overflow-hidden">

          {/* Messages API */}
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
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> All payments are processed in US dollars.
                Please ensure your billing information is correct before proceeding.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : registration ? (
            /* ── Inscription existante ── */
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
              </div>

              {registration.statut_paiement !== 'paid' && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded text-sm text-blue-700">
                  Votre inscription est en attente de paiement. Le paiement sera disponible
                  dès que l'agrégateur sera configuré. Vous serez notifié par email.
                </div>
              )}

              {registration.papiers?.length > 0 && (
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
            /* ── Formulaire de création ── */
            <>
              {/* BILLING */}
              <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
                Billing information
              </div>

              <div className="p-6 text-sm text-gray-700">
                <p className="mb-3">Please select one of the two registrant types:</p>
                <ul className="list-disc ml-6 mb-4 space-y-1">
                  <li><b>Individual</b> – If you are registering as an individual, or the fee is paid personally</li>
                  <li><b>Company</b> – If the fee is paid by a company/organization/university</li>
                </ul>

                <div className="flex gap-6 mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" checked={registrantType === 'individual'} onChange={() => setRegistrantType('individual')} className="accent-green-700" />
                    Individual
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" checked={registrantType === 'company'} onChange={() => setRegistrantType('company')} className="accent-green-700" />
                    Company
                  </label>
                </div>

                <div className="space-y-4">
                  {['Name', 'Email', 'Country', 'Address', 'Postal Code'].map((field, i) => (
                    <div key={i}>
                      <label className="block mb-1 font-medium text-gray-700">
                        <span className="text-red-500">*</span> Billing {field}:
                      </label>
                      <input className={inputClass} />
                    </div>
                  ))}
                </div>
              </div>

              {/* FEES */}
              <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
                All fees will be collected in US dollars
              </div>

              <div className="p-6 text-sm">
                {/* Discount code + total */}
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="text-gray-700">If you have been granted a discount:</span>
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
                    Total:
                    <input
                      value={calculateTotal()}
                      readOnly
                      className="border border-gray-300 w-24 px-2 py-1 bg-gray-100 rounded text-right"
                    />
                  </span>
                </div>

                {/* Fee categories (collapsible) */}
                {registrationFees.map((fee, index) => (
                  <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleCategory(fee.id)}
                      className="w-full flex items-center justify-between bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-semibold text-gray-800">{fee.category}</span>
                      <svg
                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openCategories[fee.id] ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${openCategories[fee.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {['early', 'late', 'onsite'].map((period) => {
                            const isSelected = selectedCategory === fee.category && registrationPeriod === period;
                            const label = period === 'early' ? 'Early registration' : period === 'late' ? 'Late registration' : 'On-site registration';
                            return (
                              <label
                                key={period}
                                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition ${
                                  isSelected ? 'bg-green-100 border-2 border-green-600' : 'bg-gray-50 border border-gray-300 hover:border-green-400'
                                }`}
                              >
                                <span className="text-gray-700">{label}</span>
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-green-700">€{fee[period]}</span>
                                  <input
                                    type="radio"
                                    name={`registration-${index}`}
                                    checked={isSelected}
                                    onChange={() => handleCategorySelect(fee.category, period)}
                                    className="accent-green-600 w-4 h-4"
                                  />
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Résumé sélection */}
                {selectedCategory && (
                  <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">Selected registration:</p>
                    <p className="text-gray-700 mt-1">
                      {selectedCategory} —{' '}
                      {registrationPeriod === 'early' ? 'Early' : registrationPeriod === 'late' ? 'Late' : 'On-site'}
                      : <span className="font-bold">€{getPriceForCategory(selectedCategory, registrationPeriod)}</span>
                    </p>
                  </div>
                )}

                {/* Changer période */}
                {selectedCategory && (
                  <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200">
                    <p className="font-semibold mb-3 text-gray-800">Change registration period:</p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { val: 'early', label: 'Early registration (until July 15)' },
                        { val: 'late',  label: 'Late Registration' },
                        { val: 'onsite', label: 'On-site Registration' },
                      ].map(({ val, label }) => (
                        <label key={val} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="periodChange"
                            checked={registrationPeriod === val}
                            onChange={() => handlePeriodChange(val)}
                            className="accent-green-700"
                          />
                          {label} — €{getPriceForCategory(selectedCategory, val)}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* EXTRA — Gala dinner */}
              <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
                Extra
              </div>

              <div className="p-6 text-sm">
                {/* Gala Dinner for African Students */}
                <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleCategory('galaStudent')}
                    className="w-full flex items-center justify-between bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">Gala Dinner for African Students</span>
                    <svg className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openCategories.galaStudent ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${openCategories.galaStudent ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                        {['early', 'late', 'onsite'].map((period) => {
                          const label = period === 'early' ? 'Early registration' : period === 'late' ? 'Late registration' : 'On-site registration';
                          return (
                            <label key={period} className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition bg-gray-50 border border-gray-300 hover:border-green-400 ${galaForStudent && galaStudentPeriod === period ? 'ring-2 ring-green-500' : ''}`}>
                              <span className="text-gray-700">{label}</span>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-green-700">€{getGalaPrice('africanStudent', period)}</span>
                                <input
                                  type="radio"
                                  name="galaStudentPeriod"
                                  checked={galaForStudent && galaStudentPeriod === period}
                                  onChange={() => { setGalaForStudent(true); setGalaStudentPeriod(period); }}
                                  className="accent-green-600 w-4 h-4"
                                />
                              </div>
                            </label>
                          );
                        })}
                      </div>

                      {galaForStudent && (
                        <div className="mt-3 flex items-center gap-4 flex-wrap p-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Quantity:</span>
                            <input
                              type="number" min="0" max="10"
                              value={galaStudentQuantity}
                              onChange={(e) => setGalaStudentQuantity(parseInt(e.target.value) || 0)}
                              className="border border-gray-300 w-16 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600 text-center"
                            />
                          </div>
                          {galaStudentQuantity > 0 && (
                            <div className="text-sm text-gray-600">
                              Subtotal: <span className="font-bold">€{galaStudentQuantity * getGalaPrice('africanStudent', galaStudentPeriod)}</span>
                            </div>
                          )}
                          <button onClick={() => handleGalaStudentChange(false)} className="text-xs text-red-500 hover:underline">Remove</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Gala Dinner for Researchers */}
                <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleCategory('galaResearcher')}
                    className="w-full flex items-center justify-between bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">Gala Dinner for Researchers</span>
                    <svg className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openCategories.galaResearcher ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${openCategories.galaResearcher ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                        {['early', 'late', 'onsite'].map((period) => {
                          const label = period === 'early' ? 'Early registration' : period === 'late' ? 'Late registration' : 'On-site registration';
                          return (
                            <label key={period} className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition bg-gray-50 border border-gray-300 hover:border-green-400 ${galaForResearcher && galaResearcherPeriod === period ? 'ring-2 ring-green-500' : ''}`}>
                              <span className="text-gray-700">{label}</span>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-green-700">€{getGalaPrice('researcher', period)}</span>
                                <input
                                  type="radio"
                                  name="galaResearcherPeriod"
                                  checked={galaForResearcher && galaResearcherPeriod === period}
                                  onChange={() => { setGalaForResearcher(true); setGalaResearcherPeriod(period); }}
                                  className="accent-green-600 w-4 h-4"
                                />
                              </div>
                            </label>
                          );
                        })}
                      </div>

                      {galaForResearcher && (
                        <div className="mt-3 flex items-center gap-4 flex-wrap p-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Quantity:</span>
                            <input
                              type="number" min="0" max="10"
                              value={galaResearcherQuantity}
                              onChange={(e) => setGalaResearcherQuantity(parseInt(e.target.value) || 0)}
                              className="border border-gray-300 w-16 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600 text-center"
                            />
                          </div>
                          {galaResearcherQuantity > 0 && (
                            <div className="text-sm text-gray-600">
                              Subtotal: <span className="font-bold">€{galaResearcherQuantity * getGalaPrice('researcher', galaResearcherPeriod)}</span>
                            </div>
                          )}
                          <button onClick={() => handleGalaResearcherChange(false)} className="text-xs text-red-500 hover:underline">Remove</button>
                        </div>
                      )}
                    </div>
                  </div>
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
              <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
                Submission Registration
              </div>

              <div className="p-6 text-sm text-gray-700">
                <label className="flex items-center gap-2 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={registerSubmissions}
                    onChange={(e) => setRegisterSubmissions(e.target.checked)}
                    className="accent-green-700"
                  />
                  I am an author and/or wish to register my submissions
                </label>

                {registerSubmissions && papiersDisponibles.length > 0 && (
                  <div className="ml-6 space-y-3">
                    {papiersDisponibles.map((p) => (
                      <label key={p.id} className={`flex items-start gap-3 cursor-pointer transition ${selectedSubmissions.includes(p.id) ? 'text-gray-800' : 'text-gray-400'}`}>
                        <input
                          type="checkbox"
                          checked={selectedSubmissions.includes(p.id)}
                          onChange={() => toggleSubmission(p.id)}
                          className="mt-1 accent-green-700"
                        />
                        <span>
                          <span className="font-semibold">#{p.submission_id}</span> — {p.titre}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

                {registerSubmissions && papiersDisponibles.length === 0 && (
                  <p className="ml-6 text-gray-400 text-xs">Aucune soumission disponible pour votre compte.</p>
                )}
              </div>

              {/* BUTTON */}
              <div className="p-6">
                <button
                  onClick={handleSubmit}
                  disabled={submitting || !selectedCategory}
                  className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 font-semibold rounded transition text-sm"
                >
                  {submitting ? 'Enregistrement...' : 'Register & Proceed to Payment'}
                </button>
                {!selectedCategory && (
                  <p className="text-xs text-gray-400 text-center mt-2">Sélectionnez une catégorie pour continuer</p>
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
