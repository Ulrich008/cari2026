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

  // ── Badge ─────────────────────────────────────────────────────────────
  downloadBadge: () =>
    apiClient('/participant/badge', { responseType: 'text' }),

  // ── Invitation Letter (Session 5 — PDF généré côté client) ───────────
  // Retourne les données JSON pour que le frontend génère le PDF avec jsPDF
  getInvitationData: () =>
    apiClient('/participant/invitation-letter', { method: 'POST', body: JSON.stringify({}) }),

  // Envoie la lettre par email après génération PDF + incrémente le compteur
  sendInvitationEmail: (data) =>
    apiClient('/participant/send-invitation-email', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // ── Certificat (Session 5 — PDF généré côté client) ──────────────────
  // Retourne les données JSON (condition : statut_registration = checked_in)
  getCertificateData: () => apiClient('/participant/certificate'),

  // Envoie le certificat par email + incrémente le compteur
  sendCertificateEmail: () =>
    apiClient('/participant/send-certificate-email', { method: 'POST', body: JSON.stringify({}) }),

  // ── Notifications ─────────────────────────────────────────────────────
  getNotifications: () => apiClient('/notifications'),

  markNotificationRead: (id) =>
    apiClient(`/notifications/${id}/read`, { method: 'PUT' }),
};

export default participantApi;
