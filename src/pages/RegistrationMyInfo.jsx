import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import RegistrationPortalLayout from '../components/RegistrationPortalLayout';
import registrationSchema from '../validation/registrationSchema';

const RegistrationMyInfo = () => {
  const [religions, setReligions] = useState([]);
  const [caringResponsibilities, setCaringResponsibilities] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
    setValue,
    watch,
    trigger,
    getValues,
    setError,
    clearErrors
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      title: 'Mr',
      firstName: 'Marius',
      lastName: 'AGOSSA',
      institution: "Université D'abomey-Calavi",
      department: 'Institut De Formation Et De Recherche En Informatique',
      address: 'Institut De Formation Et De Recherche En Informatique',
      city: 'Abomey-Calavi',
      state: '',
      postalCode: '01BP21',
      country: 'Abomey-Calavi',
      telephone: '+229 01 67 38 87 99',
      mobile: '',
      fax: '',
      emailWork: 'marius.agossa@uac.bj',
      emailPersonal: 'mariusagossa01@gmail.com',
      dietary: '',
      billingInstitution: "université d'abomey-calavi",
      billingAddress: '',
      taxOffice: '',
      taxNo: '',
      residence: 'African',
      disability: 'No',
      otherReligion: '',
      gender: '',
    },
    mode: 'onChange'
  });

  const otherReligionValue = watch('otherReligion');

  useEffect(() => {
    if (religions.includes('Other')) {
      if (!otherReligionValue || otherReligionValue.trim() === '') {
        setError('otherReligion', {
          type: 'manual',
          message: 'Veuillez spécifier votre religion'
        });
      } else {
        clearErrors('otherReligion');
      }
    } else {
      clearErrors('otherReligion');
    }
  }, [religions, otherReligionValue, setError, clearErrors]);

  const handleSameAsAbove = (checked) => {
    if (checked) {
      const institution = getValues('institution');
      const address = getValues('address');
      setValue('billingInstitution', institution);
      setValue('billingAddress', address);
      trigger(['billingInstitution', 'billingAddress']);
    }
  };

  const handleReligionChange = (religion, checked) => {
    const updated = checked
      ? [...religions, religion]
      : religions.filter(r => r !== religion);
    setReligions(updated);
  };

  const handleResponsibilityChange = (responsibility, checked) => {
    const updated = checked
      ? [...caringResponsibilities, responsibility]
      : caringResponsibilities.filter(r => r !== responsibility);
    setCaringResponsibilities(updated);
  };

  const onSubmit = async (data) => {
    const finalData = {
      ...data,
      religions,
      caringResponsibilities
    };
    console.log('Form submitted successfully:', finalData);
    alert('✅ Formulaire soumis avec succès!');
  };

  const inputClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition bg-white';
    
  const getInputClass = (fieldName) => {
    return errors[fieldName] && touchedFields[fieldName]
      ? `${inputClass} border-red-500 focus:ring-red-500` 
      : inputClass;
  };

  const selectClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition appearance-none cursor-pointer';

  const getSelectClass = (fieldName) => {
    return errors[fieldName] && touchedFields[fieldName]
      ? `${selectClass} border-red-500 focus:ring-red-500` 
      : selectClass;
  };

  return (
    <RegistrationPortalLayout title="MY INFORMATION">
      <div className="bg-white shadow-md p-6 space-y-6">
        {/* Info banner - Style jaune avec bordure gauche */}
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> Please ensure all your personal information is correct before proceeding. 
              The name you provide will be used for your badge and official conference documents.
            </p>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
              e.preventDefault();
            }
          }}
          className="space-y-8"
          noValidate
        >
          {/* PERSONAL INFO */}
          <div>
            <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm mb-4">
              personal information (it will be used for your name badge and contact information)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <select 
                  name="title" 
                  {...register('title')}
                  className={getSelectClass('title')}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Dr">Dr</option>
                  <option value="Prof">Prof</option>
                  <option value="Ms">Ms</option>
                </select>
                {errors.title && touchedFields.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                )}
              </div>

              <div>
                <select 
                  {...register('gender')}
                  className={selectClass}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <input
                  name="firstName"
                  {...register('firstName')}
                  placeholder="*First Name"
                  className={getInputClass('firstName')}
                />
                {errors.firstName && touchedFields.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  name="lastName"
                  {...register('lastName')}
                  placeholder="*Last Name"
                  className={getInputClass('lastName')}
                />
                {errors.lastName && touchedFields.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  name="institution"
                  {...register('institution')}
                  placeholder="*Institution"
                  className={getInputClass('institution')}
                />
                {errors.institution && touchedFields.institution && (
                  <p className="text-red-500 text-xs mt-1">{errors.institution.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  name="department"
                  {...register('department')}
                  placeholder="Department"
                  className={getInputClass('department')}
                />
                {errors.department && touchedFields.department && (
                  <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  name="address"
                  {...register('address')}
                  placeholder="Address"
                  className={getInputClass('address')}
                />
                {errors.address && touchedFields.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  name="city"
                  {...register('city')}
                  placeholder="*City"
                  className={getInputClass('city')}
                />
                {errors.city && touchedFields.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                )}
              </div>

              <div>
                <input
                  name="state"
                  {...register('state')}
                  placeholder="State"
                  className={getInputClass('state')}
                />
                {errors.state && touchedFields.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
                )}
              </div>

              <div>
                <input
                  name="postalCode"
                  {...register('postalCode')}
                  placeholder="Postal Or Zip Code"
                  className={getInputClass('postalCode')}
                />
                {errors.postalCode && touchedFields.postalCode && (
                  <p className="text-red-500 text-xs mt-1">{errors.postalCode.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  name="country"
                  {...register('country')}
                  placeholder="*Country"
                  className={getInputClass('country')}
                />
                {errors.country && touchedFields.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
                )}
              </div>

              <div>
                <input
                  name="telephone"
                  {...register('telephone')}
                  placeholder="*Telephone"
                  className={getInputClass('telephone')}
                />
                {errors.telephone && touchedFields.telephone && (
                  <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>
                )}
              </div>

              <div>
                <input
                  name="fax"
                  {...register('fax')}
                  placeholder="Fax"
                  className={getInputClass('fax')}
                />
                {errors.fax && touchedFields.fax && (
                  <p className="text-red-500 text-xs mt-1">{errors.fax.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  name="mobile"
                  {...register('mobile')}
                  placeholder="Mobile"
                  className={getInputClass('mobile')}
                />
                {errors.mobile && touchedFields.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
                )}
              </div>

              <div>
                <input
                  name="emailWork"
                  {...register('emailWork')}
                  placeholder="*Email (Work)"
                  className={getInputClass('emailWork')}
                />
                {errors.emailWork && touchedFields.emailWork && (
                  <p className="text-red-500 text-xs mt-1">{errors.emailWork.message}</p>
                )}
              </div>

              <div>
                <input
                  name="emailPersonal"
                  {...register('emailPersonal')}
                  placeholder="Email (Personal)"
                  className={getInputClass('emailPersonal')}
                />
                {errors.emailPersonal && touchedFields.emailPersonal && (
                  <p className="text-red-500 text-xs mt-1">{errors.emailPersonal.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  name="dietary"
                  {...register('dietary')}
                  placeholder="Please specify your dietary preference"
                  className={getInputClass('dietary')}
                />
                {errors.dietary && touchedFields.dietary && (
                  <p className="text-red-500 text-xs mt-1">{errors.dietary.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* INVOICE */}
          <div>
            <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm mb-4">
              invoice information
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input 
                  type="checkbox" 
                  className="accent-green-700"
                  onChange={(e) => handleSameAsAbove(e.target.checked)}
                />
                Same as provided above
              </label>

              <input
                name="billingInstitution"
                {...register('billingInstitution')}
                placeholder="Institution/Company name"
                className={getInputClass('billingInstitution')}
              />
              {errors.billingInstitution && touchedFields.billingInstitution && (
                <p className="text-red-500 text-xs mt-1">{errors.billingInstitution.message}</p>
              )}

              <input
                name="billingAddress"
                {...register('billingAddress')}
                placeholder="Billing Address"
                className={getInputClass('billingAddress')}
              />
              {errors.billingAddress && touchedFields.billingAddress && (
                <p className="text-red-500 text-xs mt-1">{errors.billingAddress.message}</p>
              )}

              <input
                name="taxOffice"
                {...register('taxOffice')}
                placeholder="Tax Office"
                className={getInputClass('taxOffice')}
              />
              {errors.taxOffice && touchedFields.taxOffice && (
                <p className="text-red-500 text-xs mt-1">{errors.taxOffice.message}</p>
              )}

              <input
                name="taxNo"
                {...register('taxNo')}
                placeholder="Tax No"
                className={getInputClass('taxNo')}
              />
              {errors.taxNo && touchedFields.taxNo && (
                <p className="text-red-500 text-xs mt-1">{errors.taxNo.message}</p>
              )}
            </div>
          </div>

          {/* EQUALITY */}
          <div>
            <div className="bg-green-700 text-white px-4 py-2 font-semibold text-sm mb-4">
              Equality and diversity monitoring (Optional)
            </div>

            <div className="space-y-4">
              <input
                name="residence"
                {...register('residence')}
                placeholder="What is your current residence?"
                className={getInputClass('residence')}
              />
              {errors.residence && touchedFields.residence && (
                <p className="text-red-500 text-xs mt-1">{errors.residence.message}</p>
              )}

              <select
                {...register('disability')}
                className={getSelectClass('disability')}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              {errors.disability && touchedFields.disability && (
                <p className="text-red-500 text-xs mt-1">{errors.disability.message}</p>
              )}

              <div>
                <p className="mb-2 text-sm text-gray-700">What religious holidays do you observe?</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  {['No religion', 'Buddhist', 'Christian', 'Hindu', 'Jewish', 'Muslim', 'Sikh', 'Prefer not to say', 'Other'].map(r => (
                    <label key={r} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        className="accent-green-700"
                        checked={religions.includes(r)}
                        onChange={(e) => handleReligionChange(r, e.target.checked)}
                      /> 
                      {r}
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                {...register('otherReligion')}
                className={`${getInputClass('otherReligion')} resize-none`}
                rows={3}
                placeholder="If other religion or belief, please write in"
              />
              {errors.otherReligion && touchedFields.otherReligion && (
                <p className="text-red-500 text-xs mt-1">{errors.otherReligion.message}</p>
              )}

              <div>
                <p className="mb-2 text-sm text-gray-700">Do you have caring responsibilities?</p>
                <div className="grid gap-2 text-sm text-gray-700">
                  {[
                    'None',
                    'Primary carer of a child',
                    'Primary carer of disabled child',
                    'Primary carer of disabled adult',
                    'Primary carer of older person',
                    'Secondary carer',
                    'Prefer not to say'
                  ].map(item => (
                    <label key={item} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        className="accent-green-700"
                        checked={caringResponsibilities.includes(item)}
                        onChange={(e) => handleResponsibilityChange(item, e.target.checked)}
                      /> 
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white font-semibold w-full py-3 rounded transition text-sm"
            >
              {isSubmitting ? 'Soumission...' : 'Submit'}
            </button>
          </div>

        </form>
      </div>
    </RegistrationPortalLayout>
  );
};

export default RegistrationMyInfo;