import { apiRequestHandler } from "@/lib/request.handler";
import { API_ROUTES } from "@/routes/api.routes";
import { apiRequestMethods } from "@/types/app.types";
import { TLogin, TRegister } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";

const loginUser = async (formData: TLogin): Promise<unknown> => {
  const response = await apiRequestHandler(
    API_ROUTES.auth.login,
    apiRequestMethods.POST,
    formData
  );
  return response;
};

const registerUser = async (formData: TRegister): Promise<unknown> => {
  const response = await apiRequestHandler(
    API_ROUTES.auth.register,
    apiRequestMethods.POST,
    formData
  );
  return response;
};

const verifyOtp = async (formData: { email: string; otp: string }) => {};

const resetPassword = async (email: string) => {};

const changePassword = async (formData: {}) => {};

const useAuthentication = () => {
  const signIn = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
      return data;
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const signUp = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log(data);
      return data;
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    signIn,
    signUp,
  };
};

export default useAuthentication;
