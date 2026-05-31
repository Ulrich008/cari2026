import apiClient from './client';

const publicApi = {
  // ── Codes promo ───────────────────────────────────────────────────────
  verifyDiscountCode: (code) =>
    apiClient('/public/discount-codes/verify', {
      method: 'POST',
      body: JSON.stringify({ code }),
    }),

  // ── Événements ────────────────────────────────────────────────────────
  getEvenements: ()    => apiClient('/public/evenements'),
  getEvenement: (id)   => apiClient(`/public/evenements/${id}`),

  // ── Programme ─────────────────────────────────────────────────────────
  getProgramme: (evenementId) => apiClient(`/public/programme/${evenementId}`),

  // ── Sponsors ──────────────────────────────────────────────────────────
  getSponsors: () => apiClient('/public/sponsors'),

  // ── Speakers ──────────────────────────────────────────────────────────
  getSpeakers: () => apiClient('/public/speakers'),

  // ── News ──────────────────────────────────────────────────────────────
  getNews: ()         => apiClient('/public/news'),
  getNewsById: (id)   => apiClient(`/public/news/${id}`),

  // ── Pages CMS ─────────────────────────────────────────────────────────
  getPages: ()           => apiClient('/public/pages'),
  getPageBySlug: (slug)  => apiClient(`/public/pages/${slug}`),

  // ── Documents ─────────────────────────────────────────────────────────
  getDocuments: () => apiClient('/public/documents'),

  // ── Papiers acceptés ──────────────────────────────────────────────────
  getPapiers: ()      => apiClient('/public/papiers'),
  getPapier: (id)     => apiClient(`/public/papiers/${id}`),

  // ── Statistiques ──────────────────────────────────────────────────────
  getStatistics: () => apiClient('/public/statistics'),
};

export default publicApi;
