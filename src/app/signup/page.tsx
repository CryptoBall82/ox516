// src/app/signup/page.tsx
"use client";

import { SignupForm } from '@/components/auth/signup-form';
import { Logo } from '@/components/layout/logo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useAuthRedirect } from '@/hooks/use-auth-redirect';
import { Skeleton } from '@/components/ui/skeleton';


export default function SignupPage() {
  const {isLoading, isAuthenticated} = useAuthRedirect({ requireAuth: false });

  if (isLoading || isAuthenticated) {
     return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <Skeleton className="w-full max-w-md h-[450px] rounded-lg" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="absolute top-8 left-8">
         <Logo iconColorClassName='text-accent' textColorClassName='text-foreground' />
      </div>
      <Card className="w-full max-w-md bg-card shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">Create Your OfficiaX Account</CardTitle>
          <CardDescription>Join the community and enhance your officiating.</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-accent hover:underline">
              Log In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
