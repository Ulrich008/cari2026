import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ajout de l'import Link
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

  // Tableau mis à jour selon l'image
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
      category: 'Researchers affiliated living in Africa',
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
              Authors who wish to upload the Camera-ready version are advised to read the Camera-ready procedure carefully before proceeding with the Registration. Please find the Camera-ready Submission Instructions here.{' '}
              <a 
                href="#" 
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors font-semibold inline-block"
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
                  
                  <p className="font-semibold">All fees will be collected in Euros € or CFA (Benin Republic local currency).</p>
                  <p>Payment can be made by credit card (Visa, Mastercard, Apple Pay), PayPal, bank transfer, cash (on site), mobile money (MTN, MOOV, Celtis, etc.)</p>

                  <div className="mt-6">
                    <h3 className="font-bold text-lg mb-4 bg-green-600 text-white px-4 py-2 text-center">
                      REGISTRATION FEES
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-white border-b-2 border-gray-300">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold">AFFILIATES</th>
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

                    <div className="mt-4 space-y-2">
                      <p className="font-bold text-lg">WORKSHOPS and TUTORIALS : free for all participants</p>
                      <p className="text-sm italic">Note that: 1 € = 655,96 Francs CFA in addition to the exchange fees.</p>
                    </div>
                    
                    {/* Lien d'inscription sécurisé avec Link de react-router-dom */}
                    <div className="mt-4 text-center">
                      <Link 
                        to="/signup" 
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold inline-block"
                      >
                        PROCEED WITH REGISTRATION
                      </Link>
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
                    <p className="font-bold mb-2">Registration Includes :</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Attendance to all scientific sessions on <span className="text-red-600 font-semibold">21–22–23–24 October 2026</span>.</li>
                      <li>Access to all Keynotes; Panels; Demonstration; Papers; Posters; Plenary/Technical Sessions;</li>
                      <li>Conference materials;</li>
                      <li>All participants can attend WORKSHOPS and TUTORIALS for free;</li>
                      <li>Welcome Reception; Lunch; AM/PM Breaks; (1) Ticket to Conference Banquet/Awards Ceremony;</li>
                      <li>Gala dinner participants must pay the corresponding fee indicated in the table above. Early bird;</li>
                    </ul>
                    <p className="mt-2 text-sm italic">The date of payment is decisive: the early bird fees will only be applied if the payment has been transferred before the deadline.</p>
                  </div>

                  <div>
                    <p className="font-bold mb-2">Important notes</p>
                    <p className="mb-4">
                      Registration will be confirmed after receiving full payment. Those who do not receive a confirmation notice before the conference are requested to contact the registration secretariat at{' '}
                      <a href="mailto:caribj2026@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                        caribj2026@gmail.com
                      </a>
                      . Only participants who complete their registration will be included in the program.
                    </p>

                    <p className="mb-4">
                      The date of payment is decisive for the registration fee. Even if the registration form is received before the early bird deadline, it will not be considered as early registration if the payment has not been received before the deadline.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold mb-2">Reduced fees</p>
                    <p>
                      To be eligible for the student rates, students (bachelor, master or doctoral level) are required to produce up-to-date documentary evidence of their status via e-mail to{' '}
                      <a href="mailto:caribj2026@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                        caribj2026@gmail.com
                      </a>
                      . Without this documentation, full delegate fees will be applied. Post-doctoral fellows should pay full delegate fees. To be eligible for reduced fees, African students.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold mb-2">Registration confirmation</p>
                    <p>
                      You will receive your registration confirmation in 72 hours after you make your payment (except weekends). Please note that it may take around 1 week to get your confirmation if the payment is made via bank transfer. Please contact the registration secretariat at{' '}
                      <a href="mailto:caribj2026@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                        caribj2026@gmail.com
                      </a>{' '}
                      if you do not receive the confirmation.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold mb-2">Cancellation Policy:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Requests for registration cancellation must be received by e-mail to <a href="mailto:caribj2026@gmail.com" className="text-blue-600 hover:text-blue-800 underline">caribj2026@gmail.com</a></li>
                      <li>Refunds are subject to a processing fee.</li>
                      <li>Cancellations received before or on September 10, 2026 – full refund less EUR 25 administration fee.</li>
                      <li>Cancellations received on or after September 10, 2026 – no refund</li>
                      <li>Please note that registration refunds will be processed within 30 days after the end of CARI 2026, bank charges will be deducted from the refund.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold mb-2">International Attendees:</p>
                    <p>
                      If you have not received your visa by September 10, 2026, you should consider cancelling your registration because there will be no refunds for attendees who do not get their visa. You can always register again later or onsite if you get your visa. CARI organizers cannot intervene on your behalf to help you get your visa. Remember: You can print a letter confirming registration to use for VISA applications.
                    </p>
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