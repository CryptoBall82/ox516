// src/app/dashboard/layout.tsx
"use client";
import type { ReactNode } from 'react';
import { AppHeader } from '@/components/layout/app-header';
import { useAuthRedirect } from '@/hooks/use-auth-redirect';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isLoading, isAuthenticated } = useAuthRedirect({ requireAuth: true });

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Skeleton className="h-16 w-full fixed top-0 z-50 bg-primary/50" />
        <main className="flex-grow container mx-auto px-4 py-8 pt-24">
          <div className="space-y-4">
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-64 w-full" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24"> {/* pt-24 to offset fixed header (16*1.5) */}
        {children}
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border mt-auto">
        © {new Date().getFullYear()} OfficiaX. All rights reserved.
      </footer>
    </div>
  );
}
