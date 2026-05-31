import apiClient from './client';

const participantApi = {
  getProfile: () => apiClient('/participant/profile'),

  updateProfile: (data) =>
    apiClient('/participant/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};

export default participantApi;
