import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import authApi from '../api/authApi';

const schema = z.object({
  password: z.string().min(8, 'Minimum 8 caractères'),
  password_confirmation: z.string().min(1, 'Veuillez confirmer votre mot de passe'),
}).refine((data) => data.password === data.password_confirmation, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['password_confirmation'],
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [globalError, setGlobalError] = useState('');
  const [success, setSuccess] = useState(false);

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setGlobalError('');
    if (!token || !email) {
      setGlobalError('Lien de réinitialisation invalide ou expiré.');
      return;
    }
    try {
      await authApi.resetPassword({ email, token, ...data });
      setSuccess(true);
      setTimeout(() => navigate('/signin'), 3000);
    } catch (err) {
      if (err?.message) {
        setGlobalError(err.message);
      } else {
        setGlobalError('Le lien est invalide ou a expiré. Veuillez en demander un nouveau.');
      }
    }
  };

  if (success) {
    return (
      <>
        <Header />
        <Navigation />
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">Password Reset!</h2>
              <p className="text-gray-500 text-sm mb-4">
                Your password has been updated. Redirecting to sign in...
              </p>
              <Link to="/signin" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                Go to Sign In
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Navigation />

      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-2 text-center">
              Reset Password
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Enter your new password below.
            </p>

            {globalError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
                {globalError}
              </div>
            )}

            {!token || !email ? (
              <div className="p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm text-center">
                Invalid or expired reset link.
                <div className="mt-4">
                  <Link to="/forgot-password" className="text-green-600 hover:text-green-700 font-semibold">
                    Request a new link
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <label className="block text-gray-700 font-medium mb-2">
                    New Password *
                  </label>
                  <input
                    type="password"
                    {...register('password')}
                    placeholder="Minimum 8 characters"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Confirm New Password *
                  </label>
                  <input
                    type="password"
                    {...register('password_confirmation')}
                    placeholder="Repeat your new password"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {errors.password_confirmation && (
                    <p className="text-red-500 text-xs mt-1">{errors.password_confirmation.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResetPassword;
