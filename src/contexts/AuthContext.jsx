import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('cari_token');
    const storedUser = localStorage.getItem('cari_user');
    if (storedToken) {
      setToken(storedToken);
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
    setIsLoading(false);
  }, []);

  const login = (accessToken, userData) => {
    localStorage.setItem('cari_token', accessToken);
    localStorage.setItem('cari_user', JSON.stringify(userData));
    setToken(accessToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('cari_token');
    localStorage.removeItem('cari_user');
    setToken(null);
    setUser(null);
  };

  const updateUser = (userData) => {
    localStorage.setItem('cari_user', JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated: !!token,
        isLoading,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};

export default AuthContext;
