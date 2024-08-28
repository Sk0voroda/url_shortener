import { createContext, useContext, useState } from "react";

type User = { id: string } | null;
interface AuthContextType {
  user: User;
}
const AuthContext = createContext<AuthContextType>({
  user: null
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user] = useState<User>(null);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
