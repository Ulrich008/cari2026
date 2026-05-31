import apiClient from './client';

const authApi = {
  register: (data) =>
    apiClient('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  login: (data) =>
    apiClient('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  logout: () =>
    apiClient('/auth/logout', {
      method: 'POST',
    }),

  me: () => apiClient('/auth/me'),

  forgotPassword: (data) =>
    apiClient('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  resetPassword: (data) =>
    apiClient('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  changePassword: (data) =>
    apiClient('/auth/change-password', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

export default authApi;
