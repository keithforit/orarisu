import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    // Check credentials and set user
    if (email === "nami@for-it.co.jp" && password === "nami") {
      setUser({ email, name: "Nami" });
      return true;
    } else if (email === "oyama@for-it.co.jp" && password === "oyama") {
      setUser({ email, name: "Oyama" });
      return true;
    } else if (email === "keith@for-it.co.jp" && password === "keith") {
      setUser({ email, name: "Keith" });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
