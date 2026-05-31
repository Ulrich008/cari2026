import apiClient from './client';

const publicApi = {
  verifyDiscountCode: (code) =>
    apiClient('/public/discount-codes/verify', {
      method: 'POST',
      body: JSON.stringify({ code }),
    }),
};

export default publicApi;
