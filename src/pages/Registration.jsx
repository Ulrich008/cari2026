import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Registration = () => {
  const [openSections, setOpenSections] = useState({
    information: true,
    general: true,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const registrationFees = [
    {
      category: 'Africans Students live in Africa',
      early: '40 €',
      late: '80 €',
      onsite: '100 €'
    },
    {
      category: 'Others Students',
      early: '150 €',
      late: '200 €',
      onsite: '250 €'
    },
    {
      category: 'Researchers affiliated lice in Africa',
      early: '150 €',
      late: '200 €',
      onsite: '250 €'
    },
    {
      category: 'Others Researchers',
      early: '250 €',
      late: '300 €',
      onsite: '400 €'
    },
    {
      category: 'Gala Dinner fees for Africans Students',
      early: '10 €',
      late: '10 €',
      onsite: '10 €'
    },
    {
      category: 'Gala Dinner fees for Researchers',
      early: '20 €',
      late: '20 €',
      onsite: '10 €'
    },
  ];

  return (
    <>
      <Header />
      <Navigation />
      
      <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 uppercase">
            REGISTRATION
          </h1>

          {/* Paragraphe introductif */}
          <div className="mb-8 space-y-4 text-gray-900 leading-relaxed text-justify">
            <p>
              Accepted Authors who wish to upload the Camera-ready version are advised to read the Camera-ready procedure carefully before proceeding with the Registration. Please find the Camera-ready Submission Instructions here. <br /> Link:{' '}
              <a 
                href="#" 
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors font-semibold"
              >
                CAMERA-READY SUBMISSION
              </a>
            </p>
          </div>

          {/* REGISTRATION INFORMATION Section */}
          <section className="mb-4">
            <button
              onClick={() => toggleSection('information')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
                REGISTRATION INFORMATION
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.information ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.information ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="space-y-6 text-gray-900 leading-relaxed text-justify">
                  <p className="font-semibold">All fees will be collected in Euros € or Francs CFA.</p>

                  {/* Tableau des frais d'inscription */}
                  <div className="mt-6">
                    <h3 className="font-bold text-lg mb-4 bg-green-600 text-white px-4 py-2 text-center">
                      REGISTRATION FEES
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-white border-b-2 border-gray-300">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold">MAIN CONFERENCE</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Early registration (15 July)</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Late Registration</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">On-site Registration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {registrationFees.map((fee, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2 font-medium">{fee.category}</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">{fee.early}</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">{fee.late}</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">{fee.onsite}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="font-bold text-lg">WORKSHOPS and TUTORIALS</p>
                      <p className="font-semibold">Free for all participants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GENERAL INFORMATION Section */}
          <section className="mb-4">
            <button
              onClick={() => toggleSection('general')}
              className="w-full flex items-center justify-between bg-white border-b-4 border-green-600 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-bold text-green-600 uppercase">
                GENERAL INFORMATION
              </h2>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                  openSections.general ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openSections.general ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-100 p-6">
                <div className="space-y-6 text-gray-900 leading-relaxed text-justify">
                  
                  <div>
                    <p className="font-bold mb-2">In Person Main Conference Registration Fees Include:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        Attendance to all scientific sessions on{' '}
                        <span className="text-red-600 font-semibold">21–22–23–24 October 2024</span>.
                      </li>
                      <li>Conference materials</li>
                      <li>Coffee breaks and lunches to be served during the conference scientific program</li>
                      <li>Gala Dinner will be pay expense and the cost is indicated in the table above.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold mb-2">Important notes</p>
                    <p className="mb-4">
                      Registration will be confirmed after receiving full payment. Those who do not receive a confirmation notice before the conference are requested to contact the registration secretariat at{' '}
                      <a href="mailto:caribj2026@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                        caribj2026@gmail.com
                      </a>
                      . Only participants who received their registration will be included in the program.
                    </p>

                    <p className="mb-4">
                      The date of payment is decisive for the registration fee. Even if the registration form is received before the early bird deadline, it will not be considered as early registration if the payment has not been received before the deadline.
                    </p>

                    <p className="mb-4">
                      You will receive your registration confirmation in 72 hours after you make your payment (except weekends). Please note that it may take around 1 week for your confirmation if the payment is made via bank transfer.
                    </p>

                    <p className="mb-4">
                      To be eligible for the student rates, students (bachelor, master or doctoral level) are required to produce up-to-date documentary evidence of their status by the time of the manuscript submission. Without this documentation, full delegate fees will be applied. For the avoidance of any doubt, post-doctoral fellows should pay full delegate fees. Students should send the necessary document via e-mail to{' '}
                      <a href="mailto:caribj2026@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                        caribj2026@gmail.com
                      </a>
                      .
                    </p>
                  </div>

                  <div>
                    <p className="font-bold mb-2">Cancellation Policy - Registration:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Refunds and invoice amendments are subject to a processing fee.</li>
                      <li>
                        Requests for registration cancellation must be received in writing by the CARI 2026 Registration via e-mail to{' '}
                        <a href="mailto:caribj2026@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                          caribj2026@gmail.com
                        </a>
                      </li>
                      <li>
                        Cancellations received before or on August 25, 2026 – full refund less EUR 25 administration fee. Membership fees are non-refundable.
                      </li>
                      <li>Cancellations received on after August 26, 2026 – no refund</li>
                      <li>
                        Please note that registration refunds will be processed within 30 days after the end of CARI 2026, bank charges will be deducted from the refund.
                      </li>
                      <li>
                        Register at our secure online payment site. Lien:{' '}
                        <a 
                          href="#" 
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors font-semibold"
                        >
                          Proceed with registration
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Registration;