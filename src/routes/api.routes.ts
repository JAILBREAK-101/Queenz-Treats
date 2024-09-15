export const API_BASE_URL =
  process.env.NEXT_PUBLIC_APP_API_BASE_URL ?? "http://localhost:3001";

export const API_ROUTES = {
  auth: {
    login: `${API_BASE_URL}/account/login/`,
    register: `${API_BASE_URL}/account/signup/`,
    resetPassword: `${API_BASE_URL}/account/reset-password/`,
  },
  website: {
    // For all products
    products: `${API_BASE_URL}/products`,
    // For a single product based on its category
    oneProduct: (category: string, id: string) => `${API_BASE_URL}/products/${category}/{${id}`,
    // For all events
    events: `${API_BASE_URL}/events`,
    // For a single event based on its type
    oneEvents: (type: string, id: string) => `${API_BASE_URL}/products/${type}/{${id}`,
    // Gallery APIs
    pictures: `${API_BASE_URL}/pictures`,
    videos: `${API_BASE_URL}/videos`,
  },
  users: {
    profile: `${API_BASE_URL}/profile`,
    purchases: `${API_BASE_URL}/purchases`,
  },
};
