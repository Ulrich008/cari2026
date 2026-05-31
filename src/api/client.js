const apiClient = async (endpoint, options = {}) => {
  const token = localStorage.getItem('cari_token');
  const { responseType, ...fetchOptions } = options;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...fetchOptions.headers,
    },
    ...fetchOptions,
  };

  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, config);

  if (response.status === 401) {
    localStorage.removeItem('cari_token');
    localStorage.removeItem('cari_user');
    window.location.href = '/signin';
    return;
  }

  // 204 No Content
  if (response.status === 204) {
    return null;
  }

  // Téléchargement texte/blob (lettre invitation, certificat, badge)
  if (responseType === 'text') {
    if (!response.ok) {
      const err = await response.json().catch(() => ({ message: 'Erreur serveur' }));
      throw err;
    }
    return response.text();
  }

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};

export default apiClient;
