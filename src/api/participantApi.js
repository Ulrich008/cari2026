import apiClient from './client';

const participantApi = {
  // ── Profil ────────────────────────────────────────────────────────────
  getProfile: () => apiClient('/participant/profile'),

  updateProfile: (data) =>
    apiClient('/participant/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  // ── Registration ──────────────────────────────────────────────────────
  getMyRegistration: () => apiClient('/registrations/my'),

  createRegistration: (data) =>
    apiClient('/registrations', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // ── Documents ─────────────────────────────────────────────────────────
  downloadBadge: () =>
    apiClient('/participant/badge', { responseType: 'text' }),

  generateInvitationLetter: (data) =>
    apiClient('/participant/invitation-letter', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  downloadCertificate: () =>
    apiClient('/participant/certificate', { responseType: 'text' }),

  // ── Notifications ─────────────────────────────────────────────────────
  getNotifications: () => apiClient('/notifications'),

  markNotificationRead: (id) =>
    apiClient(`/notifications/${id}/read`, { method: 'PUT' }),
};

export default participantApi;
