import { useAuth } from "@/context/auth.context";
import { clientRoutes } from "@/routes/client.routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type AuthWrapperProps = {
  children: React.ReactNode;
};
const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  // Check if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { checkAuth } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const check = async () => {
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated) {
        router.push(clientRoutes.LOGIN);
      }
      setIsAuthenticated(isAuthenticated);
    };
    check();
  }, [checkAuth, router]);
  // If not, redirect to login page
  return (
    <>{isAuthenticated ? <main className="">{children}</main> : children}</>
  );
};

export default AuthWrapper;
