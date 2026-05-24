import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(pb.authStore.model);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(pb.authStore.model);
    setIsLoading(false);

    const unsubscribe = pb.authStore.onChange(() => {
      setUser(pb.authStore.model);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    await pb.collection('users').authWithPassword(email, password, { $autoCancel: false });
    setUser(pb.authStore.model);
  };

  const logout = () => {
    pb.authStore.clear();
    setUser(null);
  };

  const isAdmin = Boolean(user && user.role === 'admin');

  const value = {
    user,
    isLoading,
    isAuthenticated: pb.authStore.isValid,
    isAdmin,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}