// src/contexts/auth-context.tsx
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, stayLoggedIn?: boolean) => void;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Check for persisted login state
  const router = useRouter();

  useEffect(() => {
    // Mock checking for persisted login state (e.g., from localStorage)
    try {
      const storedUser = localStorage.getItem('officiaxUser');
      if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Failed to parse stored user:", error);
      localStorage.removeItem('officiaxUser');
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, stayLoggedIn: boolean = false) => {
    const mockUser: User = { id: Date.now().toString(), email };
    setUser(mockUser);
    setIsAuthenticated(true);
    if (stayLoggedIn) {
      localStorage.setItem('officiaxUser', JSON.stringify(mockUser));
    } else {
      sessionStorage.setItem('officiaxUser', JSON.stringify(mockUser)); // Or use sessionStorage
    }
    router.push('/dashboard');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('officiaxUser');
    sessionStorage.removeItem('officiaxUser');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
