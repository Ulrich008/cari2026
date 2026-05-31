import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import authApi from '../api/authApi';

const schema = z.object({
  email: z.string().email('Email invalide'),
});

const ForgotPassword = () => {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await authApi.forgotPassword(data);
    // L'API retourne toujours 200 même si l'email n'existe pas (sécurité)
    setSent(true);
  };

  return (
    <>
      <Header />
      <Navigation />

      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-2 text-center">
              Forgot Password
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            {sent ? (
              <div className="p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm text-center">
                If an account exists with that email, you will receive a password reset link shortly.
                <div className="mt-4">
                  <Link to="/signin" className="text-green-600 hover:text-green-700 font-semibold">
                    Back to Sign In
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="johndoe@gmail.com"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                </button>

                <p className="text-center text-gray-600 text-sm mt-6">
                  <Link to="/signin" className="text-green-600 hover:text-green-700 font-semibold">
                    Back to Sign In
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ForgotPassword;
