
// src/hooks/use-auth-redirect.ts
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

interface UseAuthRedirectOptions {
  redirectTo?: string;
  requireAuth?: boolean; // if true, redirect to login if not authenticated. if false, redirect to dashboard if authenticated (e.g. for login page)
}

export function useAuthRedirect({ redirectTo, requireAuth = true }: UseAuthRedirectOptions = {}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return; // Wait for auth state to load
    }

    if (requireAuth && !isAuthenticated) {
      router.push(redirectTo || '/login');
    } else if (!requireAuth && isAuthenticated) {
      router.push(redirectTo || '/home'); // Updated redirect to /home
    }
  }, [isAuthenticated, isLoading, router, requireAuth, redirectTo]);

  return { isAuthenticated, isLoading };
}
