export const API_BASE_URL =
  process.env.NEXT_PUBLIC_APP_API_BASE_URL ?? "http://localhost:3001";

export const API_ROUTES = {
  auth: {
    login: `${API_BASE_URL}/account/login/`,
    register: `${API_BASE_URL}/account/signup/`,
    resetPassword: `${API_BASE_URL}/account/reset-password/`,
  },
  users: {
    profile: `${API_BASE_URL}/profile`,
    setting: `${API_BASE_URL}/setting`,
    payments: `${API_BASE_URL}/payments`,
    // add more based on the API endpoints defined
    one: (id: string) => `${API_BASE_URL}/users/${id}`,
  },
};
