const API_URL = `https://70c5-2804-d55-760f-4800-e4d7-2aee-8eb6-1e6b.ngrok-free.app`;

export const environment = {
  production: true,
  SERVICES: {
    auth: `${API_URL}/auth`,
    gateway: 'http://localhost:8000/',
    register: `${API_URL}/register`,
    receiptScan: 'http://localhost:8083',
    catalog: `${API_URL}/catalog`,
    social: `${API_URL}/social`,
  },
};
