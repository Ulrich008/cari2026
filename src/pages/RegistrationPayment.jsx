import React, { useState } from 'react';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';

const RegistrationPayment = () => {
  const [registrantType, setRegistrantType] = useState('individual');
  const [discountCode, setDiscountCode] = useState('');
  const [total, setTotal] = useState('0.00');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [registrationPeriod, setRegistrationPeriod] = useState('early');
  const [galaForStudent, setGalaForStudent] = useState(false);
  const [galaForResearcher, setGalaForResearcher] = useState(false);
  const [galaStudentPeriod, setGalaStudentPeriod] = useState('early');
  const [galaResearcherPeriod, setGalaResearcherPeriod] = useState('early');
  const [galaStudentQuantity, setGalaStudentQuantity] = useState(0);
  const [galaResearcherQuantity, setGalaResearcherQuantity] = useState(0);
  const [registerSubmissions, setRegisterSubmissions] = useState(true);
  const [selectedSubmissions, setSelectedSubmissions] = useState([]);
  
  // État pour les toggles des catégories
  const [openCategories, setOpenCategories] = useState({
    africansStudents: true,
    othersStudents: true,
    researchersAfrica: true,
    othersResearchers: true,
    galaStudent: true,
    galaResearcher: true,
  });

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Tableau des frais d'inscription
  const registrationFees = [
    { 
      id: 'africansStudents',
      category: "Africans Students live in Africa", 
      early: 40, 
      late: 80, 
      onsite: 100
    },
    { 
      id: 'othersStudents',
      category: "Others Students", 
      early: 150, 
      late: 200, 
      onsite: 250
    },
    { 
      id: 'researchersAfrica',
      category: "Researchers affiliated living in Africa", 
      early: 150, 
      late: 200, 
      onsite: 250
    },
    { 
      id: 'othersResearchers',
      category: "Others Researchers", 
      early: 250, 
      late: 300, 
      onsite: 400
    },
  ];

  // Tarifs Gala Dinner selon le fichier image
  const galaDinnerFees = {
    africanStudent: { early: 10, late: 10, onsite: 10, label: "Gala Dinner for African Students" },
    researcher: { early: 20, late: 20, onsite: 10, label: "Gala Dinner for Researchers" }
  };

  const submissions = [
    {
      id: 352394,
      title: 'Leveraging Network Reconfiguration to Mitigate Stealthy FDI Attacks in Smart Grid SC Attacker Uncertainty',
    },
    {
      id: 351409,
      title: 'Towards an efficient framework for risk assessment of personal data protect',
    },
  ];

  // Fonction pour obtenir le prix selon la période d'inscription
  const getPriceForCategory = (category, period) => {
    const fee = registrationFees.find(f => f.category === category);
    if (!fee) return 0;
    switch(period) {
      case 'early': return fee.early;
      case 'late': return fee.late;
      case 'onsite': return fee.onsite;
      default: return fee.early;
    }
  };

  // Fonction pour obtenir le prix du gala dinner
  const getGalaPrice = (type, period) => {
    const gala = galaDinnerFees[type];
    if (!gala) return 0;
    switch(period) {
      case 'early': return gala.early;
      case 'late': return gala.late;
      case 'onsite': return gala.onsite;
      default: return gala.early;
    }
  };

  const toggleSubmission = (id) => {
    setSelectedSubmissions((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let totalValue = 0;
    
    // Ajouter le prix de la catégorie sélectionnée
    if (selectedCategory) {
      totalValue += getPriceForCategory(selectedCategory, registrationPeriod);
    }
    
    // Ajouter les tickets de gala pour les étudiants africains
    if (galaForStudent && galaStudentQuantity > 0) {
      totalValue += galaStudentQuantity * getGalaPrice('africanStudent', galaStudentPeriod);
    }
    
    // Ajouter les tickets de gala pour les chercheurs
    if (galaForResearcher && galaResearcherQuantity > 0) {
      totalValue += galaResearcherQuantity * getGalaPrice('researcher', galaResearcherPeriod);
    }
    
    setTotal(totalValue.toFixed(2));
  };

  const handleCategorySelect = (category, period) => {
    setSelectedCategory(category);
    setRegistrationPeriod(period);
    setTimeout(() => calculateTotal(), 0);
  };

  const handlePeriodChange = (period) => {
    setRegistrationPeriod(period);
    setTimeout(() => calculateTotal(), 0);
  };

  const handleGalaStudentChange = (checked) => {
    setGalaForStudent(checked);
    if (!checked) setGalaStudentQuantity(0);
    setTimeout(() => calculateTotal(), 0);
  };

  const handleGalaResearcherChange = (checked) => {
    setGalaForResearcher(checked);
    if (!checked) setGalaResearcherQuantity(0);
    setTimeout(() => calculateTotal(), 0);
  };

  const inputClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition bg-white';

  return (
    <RegistrationPortalLayout title="PAYMENT">
      <div className="bg-gray-100 p-6">
        <div className="bg-white shadow rounded overflow-hidden">

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

          {/* BILLING */}
          <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
            Billing information
          </div>

          <div className="p-6 text-sm text-gray-700">
            <p className="mb-3">
              Please select one of the two registrant types:
            </p>

            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>
                <b>Individual</b> - If you are registering to this conference as an Individual, please select this option and fill in the required fields. In case the conference fee is paid for you by a company, please select the "Company" option below
              </li>
              <li>
                <b>Company</b> - If you are registering to this conference as a Company/Organization/University or the conference fee is paid for you by a company, please select this option and fill in the billing information of the company
              </li>
            </ul>

            <div className="flex gap-6 mb-6">
              <label className="flex items-center gap-2">
                <input 
                  type="radio" 
                  checked={registrantType === 'individual'} 
                  onChange={() => setRegistrantType('individual')}
                  className="accent-green-700"
                />
                Individual
              </label>

              <label className="flex items-center gap-2">
                <input 
                  type="radio" 
                  checked={registrantType === 'company'} 
                  onChange={() => setRegistrantType('company')}
                  className="accent-green-700"
                />
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

          {/* PREMIERE SECTION - All fees will be collected in US dollars */}
          <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
            All fees will be collected in US dollars
          </div>

          <div className="p-6 text-sm">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-gray-700">If you have been granted a discount:</span>

              <input
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="border border-gray-300 bg-white px-2 py-1 w-32 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition text-sm">
                Apply
              </button>

              <span className="ml-auto flex items-center gap-2 text-gray-700">
                Total:
                <input 
                  value={total} 
                  readOnly 
                  className="border border-gray-300 w-24 px-2 py-1 bg-gray-100 rounded text-right" 
                />
              </span>
            </div>

            {/* Catégories avec toggles */}
            {registrationFees.map((fee, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                {/* Bouton toggle */}
                <button
                  onClick={() => toggleCategory(fee.id)}
                  className="w-full flex items-center justify-between bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{fee.category}</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      openCategories[fee.id] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Contenu avec toggle */}
                <div className={`overflow-hidden transition-all duration-300 ${openCategories[fee.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-4 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <label 
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition ${
                          selectedCategory === fee.category && registrationPeriod === 'early' 
                            ? 'bg-green-100 border-2 border-green-600' 
                            : 'bg-gray-50 border border-gray-300 hover:border-green-400'
                        }`}
                      >
                        <span className="text-gray-700">Early registration</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-green-700">€{fee.early}</span>
                          <input
                            type="radio"
                            name={`registration-${index}`}
                            checked={selectedCategory === fee.category && registrationPeriod === 'early'}
                            onChange={() => handleCategorySelect(fee.category, 'early')}
                            className="accent-green-600 w-4 h-4"
                          />
                        </div>
                      </label>

                      <label 
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition ${
                          selectedCategory === fee.category && registrationPeriod === 'late' 
                            ? 'bg-green-100 border-2 border-green-600' 
                            : 'bg-gray-50 border border-gray-300 hover:border-green-400'
                        }`}
                      >
                        <span className="text-gray-700">Late registration</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-green-700">€{fee.late}</span>
                          <input
                            type="radio"
                            name={`registration-${index}`}
                            checked={selectedCategory === fee.category && registrationPeriod === 'late'}
                            onChange={() => handleCategorySelect(fee.category, 'late')}
                            className="accent-green-600 w-4 h-4"
                          />
                        </div>
                      </label>

                      <label 
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition ${
                          selectedCategory === fee.category && registrationPeriod === 'onsite' 
                            ? 'bg-green-100 border-2 border-green-600' 
                            : 'bg-gray-50 border border-gray-300 hover:border-green-400'
                        }`}
                      >
                        <span className="text-gray-700">On-site registration</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-green-700">€{fee.onsite}</span>
                          <input
                            type="radio"
                            name={`registration-${index}`}
                            checked={selectedCategory === fee.category && registrationPeriod === 'onsite'}
                            onChange={() => handleCategorySelect(fee.category, 'onsite')}
                            className="accent-green-600 w-4 h-4"
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Affichage du résumé de la sélection */}
            {selectedCategory && (
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="font-semibold text-green-800">Selected registration:</p>
                <p className="text-gray-700 mt-1">
                  {selectedCategory} - {registrationPeriod === 'early' ? 'Early registration' : registrationPeriod === 'late' ? 'Late registration' : 'On-site registration'} 
                  : <span className="font-bold">€{getPriceForCategory(selectedCategory, registrationPeriod)}</span>
                </p>
              </div>
            )}

            {/* Change registration period */}
            {selectedCategory && (
              <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200">
                <p className="font-semibold mb-3 text-gray-800">Change registration period:</p>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="periodChange"
                      checked={registrationPeriod === 'early'}
                      onChange={() => handlePeriodChange('early')}
                      className="accent-green-700"
                    />
                    Early registration (until July 15) - €{getPriceForCategory(selectedCategory, 'early')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="periodChange"
                      checked={registrationPeriod === 'late'}
                      onChange={() => handlePeriodChange('late')}
                      className="accent-green-700"
                    />
                    Late Registration - €{getPriceForCategory(selectedCategory, 'late')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="periodChange"
                      checked={registrationPeriod === 'onsite'}
                      onChange={() => handlePeriodChange('onsite')}
                      className="accent-green-700"
                    />
                    On-site Registration - €{getPriceForCategory(selectedCategory, 'onsite')}
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* SECONDE SECTION - Extra */}
          <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
            Extra
          </div>

          <div className="p-6 text-sm">
            {/* Gala Dinner for African Students avec toggle */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory('galaStudent')}
                className="w-full flex items-center justify-between bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">Gala Dinner for African Students</span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    openCategories.galaStudent ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openCategories.galaStudent ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                    <label className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition bg-gray-50 border border-gray-300 hover:border-green-400 ${galaForStudent && galaStudentPeriod === 'early' ? 'ring-2 ring-green-500' : ''}`}>
                      <span className="text-gray-700">Early registration</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-green-700">€{getGalaPrice('africanStudent', 'early')}</span>
                        <input
                          type="radio"
                          name="galaStudentPeriod"
                          checked={galaForStudent && galaStudentPeriod === 'early'}
                          onChange={() => {
                            setGalaForStudent(true);
                            setGalaStudentPeriod('early');
                            setTimeout(() => calculateTotal(), 0);
                          }}
                          className="accent-green-600 w-4 h-4"
                        />
                      </div>
                    </label>

                    <label className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition bg-gray-50 border border-gray-300 hover:border-green-400 ${galaForStudent && galaStudentPeriod === 'late' ? 'ring-2 ring-green-500' : ''}`}>
                      <span className="text-gray-700">Late registration</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-green-700">€{getGalaPrice('africanStudent', 'late')}</span>
                        <input
                          type="radio"
                          name="galaStudentPeriod"
                          checked={galaForStudent && galaStudentPeriod === 'late'}
                          onChange={() => {
                            setGalaForStudent(true);
                            setGalaStudentPeriod('late');
                            setTimeout(() => calculateTotal(), 0);
                          }}
                          className="accent-green-600 w-4 h-4"
                        />
                      </div>
                    </label>

                    <label className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition bg-gray-50 border border-gray-300 hover:border-green-400 ${galaForStudent && galaStudentPeriod === 'onsite' ? 'ring-2 ring-green-500' : ''}`}>
                      <span className="text-gray-700">On-site registration</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-green-700">€{getGalaPrice('africanStudent', 'onsite')}</span>
                        <input
                          type="radio"
                          name="galaStudentPeriod"
                          checked={galaForStudent && galaStudentPeriod === 'onsite'}
                          onChange={() => {
                            setGalaForStudent(true);
                            setGalaStudentPeriod('onsite');
                            setTimeout(() => calculateTotal(), 0);
                          }}
                          className="accent-green-600 w-4 h-4"
                        />
                      </div>
                    </label>
                  </div>

                  {galaForStudent && (
                    <div className="mt-3 flex items-center gap-4 flex-wrap p-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Quantity:</span>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={galaStudentQuantity}
                          onChange={(e) => {
                            setGalaStudentQuantity(parseInt(e.target.value) || 0);
                            setTimeout(() => calculateTotal(), 0);
                          }}
                          className="border border-gray-300 w-16 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600 text-center"
                        />
                      </div>
                      {galaStudentQuantity > 0 && (
                        <div className="text-sm text-gray-600">
                          Subtotal: <span className="font-bold">€{galaStudentQuantity * getGalaPrice('africanStudent', galaStudentPeriod)}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Gala Dinner for Researchers avec toggle */}
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory('galaResearcher')}
                className="w-full flex items-center justify-between bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">Gala Dinner for Researchers</span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    openCategories.galaResearcher ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openCategories.galaResearcher ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                    <label className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition bg-gray-50 border border-gray-300 hover:border-green-400 ${galaForResearcher && galaResearcherPeriod === 'early' ? 'ring-2 ring-green-500' : ''}`}>
                      <span className="text-gray-700">Early registration</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-green-700">€{getGalaPrice('researcher', 'early')}</span>
                        <input
                          type="radio"
                          name="galaResearcherPeriod"
                          checked={galaForResearcher && galaResearcherPeriod === 'early'}
                          onChange={() => {
                            setGalaForResearcher(true);
                            setGalaResearcherPeriod('early');
                            setTimeout(() => calculateTotal(), 0);
                          }}
                          className="accent-green-600 w-4 h-4"
                        />
                      </div>
                    </label>

                    <label className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition bg-gray-50 border border-gray-300 hover:border-green-400 ${galaForResearcher && galaResearcherPeriod === 'late' ? 'ring-2 ring-green-500' : ''}`}>
                      <span className="text-gray-700">Late registration</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-green-700">€{getGalaPrice('researcher', 'late')}</span>
                        <input
                          type="radio"
                          name="galaResearcherPeriod"
                          checked={galaForResearcher && galaResearcherPeriod === 'late'}
                          onChange={() => {
                            setGalaForResearcher(true);
                            setGalaResearcherPeriod('late');
                            setTimeout(() => calculateTotal(), 0);
                          }}
                          className="accent-green-600 w-4 h-4"
                        />
                      </div>
                    </label>

                    <label className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition bg-gray-50 border border-gray-300 hover:border-green-400 ${galaForResearcher && galaResearcherPeriod === 'onsite' ? 'ring-2 ring-green-500' : ''}`}>
                      <span className="text-gray-700">On-site registration</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-green-700">€{getGalaPrice('researcher', 'onsite')}</span>
                        <input
                          type="radio"
                          name="galaResearcherPeriod"
                          checked={galaForResearcher && galaResearcherPeriod === 'onsite'}
                          onChange={() => {
                            setGalaForResearcher(true);
                            setGalaResearcherPeriod('onsite');
                            setTimeout(() => calculateTotal(), 0);
                          }}
                          className="accent-green-600 w-4 h-4"
                        />
                      </div>
                    </label>
                  </div>

                  {galaForResearcher && (
                    <div className="mt-3 flex items-center gap-4 flex-wrap p-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Quantity:</span>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={galaResearcherQuantity}
                          onChange={(e) => {
                            setGalaResearcherQuantity(parseInt(e.target.value) || 0);
                            setTimeout(() => calculateTotal(), 0);
                          }}
                          className="border border-gray-300 w-16 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600 text-center"
                        />
                      </div>
                      {galaResearcherQuantity > 0 && (
                        <div className="text-sm text-gray-600">
                          Subtotal: <span className="font-bold">€{galaResearcherQuantity * getGalaPrice('researcher', galaResearcherPeriod)}</span>
                        </div>
                      )}
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
            <p className="mb-2">Your upload limit is: 1</p>

            <label className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={registerSubmissions}
                onChange={(e) => setRegisterSubmissions(e.target.checked)}
                className="accent-green-700"
              />
              I am an author and/or wish to register submissions
            </label>

            {registerSubmissions && (
              <div className="ml-6 space-y-3">
                {submissions.map((sub) => {
                  const isChecked = selectedSubmissions.includes(sub.id);

                  return (
                    <label
                      key={sub.id}
                      className={`flex items-start gap-3 cursor-pointer transition ${
                        isChecked ? 'text-gray-800' : 'text-gray-400'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleSubmission(sub.id)}
                        className="mt-1 accent-green-700"
                      />

                      <span>
                        <span className="font-semibold">[REGISTERED]</span>{' '}
                        {sub.title} (Submission ID: {sub.id})
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* BUTTON */}
          <div className="p-6">
            <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 font-semibold rounded transition text-sm">
              Make payment
            </button>
          </div>

        </div>
      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationPayment;