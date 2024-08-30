// Authentications types
export type TLogin = {
  email: string;
  password: string;
};

export type TRegister = {
  email: string;
  password: string;
  role: string;
  first_name: string;
  last_name: string;
};

// Add more depending on the API endpoints defined