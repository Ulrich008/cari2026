import React, { useState } from 'react';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';

const RegistrationPayment = () => {
  const [registrantType, setRegistrantType] = useState('individual');
  const [discountCode, setDiscountCode] = useState('');
  const [total, setTotal] = useState('0.00');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [galaQuantity, setGalaQuantity] = useState(0);
  const [invoiceAmendment, setInvoiceAmendment] = useState(false);
  const [registerSubmissions, setRegisterSubmissions] = useState(true);
  const [selectedSubmissions, setSelectedSubmissions] = useState([]);

  const packages = [
    { label: '18th CARI CONF/Local Author (USD 479.00)', price: 479 },
    { label: '18th CARI CONF/Non-local (USD 635.00)', price: 635 },
    { label: '18th CARI CONF/Local Author/ONLINE (USD 348.00)', price: 348 },
    { label: '18th CARI CONF/Non-Local Author/ONLINE (USD 468.00)', price: 468 },
    { label: 'CARI CONF LATE NON/AUTHOR (USD 0.00)', price: 0 },
  ];

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

  const toggleSubmission = (id) => {
    setSelectedSubmissions((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  const calculateTotal = (pkgPrice) => {
    let totalValue = pkgPrice;
    if (galaQuantity > 0) totalValue += galaQuantity * 60;
    if (invoiceAmendment) totalValue += 20;
    setTotal(totalValue.toFixed(2));
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg.label);
    calculateTotal(pkg.price);
  };

  const inputClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition bg-white';

  const selectClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition appearance-none cursor-pointer';

  return (
    <RegistrationPortalLayout title="PAYMENT">
      <div className="bg-gray-100 p-6">
        <div className="bg-white shadow rounded overflow-hidden">

          {/* Info banner - Style jaune avec bordure gauche */}
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

          {/* PACKAGES */}
          <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm">
            Registration Packages
          </div>

          <div className="p-6 text-sm">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
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
                  className="border border-gray-300 w-20 px-2 py-1 bg-gray-100 rounded text-right" 
                />
              </span>
            </div>

            <p className="font-semibold mb-2 text-gray-800">All fees will be collected in US dollars</p>

            <div className="space-y-2">
              {packages.map((pkg, i) => (
                <label key={i} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    checked={selectedPackage === pkg.label}
                    onChange={() => handlePackageSelect(pkg)}
                    className="accent-green-700"
                  />
                  {pkg.label}
                </label>
              ))}
            </div>

            {/* Extras */}
            <div className="mt-6">
              <p className="font-semibold mb-2 text-gray-800">Extras</p>

              <label className="flex items-center gap-2 mb-2 text-gray-700">
                <input type="checkbox" className="accent-green-700" />
                Extra page Upload (USD 20.00)
              </label>

              <div className="flex items-center gap-2 mb-2 text-gray-700">
                <input type="checkbox" className="accent-green-700" />
                Extra Gala Dinner Ticket (USD 60.00)
                <input
                  type="number"
                  value={galaQuantity}
                  onChange={(e) => setGalaQuantity(parseInt(e.target.value) || 0)}
                  className="border border-gray-300 w-16 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={invoiceAmendment}
                  onChange={(e) => setInvoiceAmendment(e.target.checked)}
                  className="accent-green-700"
                />
                Invoice Amendment (USD 20.00)
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