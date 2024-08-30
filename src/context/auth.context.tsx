"use client";
import { clientRoutes } from "@/routes/client.routes";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

type AuthContextType = {
  user: any;
  checkAuth: () => Promise<boolean>;
  getToken: () => Promise<string>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const checkAuth = async (): Promise<boolean> => {
    return true;
  };

  const getToken = async (): Promise<string> => {
    return "";
  };
  const value = useMemo(() => {
    const signOut = async () => {
      setUser(null);
      router.push(clientRoutes.LOGIN);
    };
    return {
      user,
      checkAuth,
      getToken,
    };
  }, [user, router]);
  return <AuthContext.Provider value={value}></AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
