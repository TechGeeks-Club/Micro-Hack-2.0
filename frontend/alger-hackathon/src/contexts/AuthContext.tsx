import React, { useState, useContext, createContext } from "react";

import axios from "axios";

interface UserType {
  username: string;
  email: string;
  img: string | null;
  id: number;
  isSuperuser: boolean;
}

export const AuthContext = createContext<{
  user: UserType | null;
  accessToken: String | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<String | undefined>;
  logout: () => void;
}>({
  user: null,
  accessToken: null,
  isAuthenticated: false,
  login: async () => {
    return Promise.resolve(undefined);
  },
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const [accessToken, setAccessToken] = useState<String | null>(() => {
    const storedAccessToken = localStorage.getItem("access-token");
    return storedAccessToken ? storedAccessToken : null;
  });

  const login = async (username: string, password: string) => {
    return await axios
      .post("https://pbc34zvg-8000.euw.devtunnels.ms/auth/token/login/", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setIsAuthenticated(true);
          setAccessToken(res.data["access-token"]);
          localStorage.setItem("access-token", res.data["access-token"]);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("isAuthenticated", "1");
        } else {
          return "Something went wrong";
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          return "Invalid username or password, please try again";
        } else {
          return "Something went wrong";
        }
      });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("access-token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
