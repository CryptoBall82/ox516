// src/components/layout/user-nav.tsx
"use client";

import Link from 'next/link';
import { LogIn, UserCircle, LogOutIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function UserNav() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();

  if (isLoading) {
    return <div className="h-10 w-20 animate-pulse rounded-md bg-primary/50"></div>; // Placeholder for loading state
  }

  if (isAuthenticated && user) {
    const initials = user.email?.[0]?.toUpperCase() || 'U';
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 text-white hover:bg-primary-foreground/10 focus-visible:ring-accent">
            <Avatar className="h-9 w-9 border-2 border-accent">
              <AvatarImage src={`https://placehold.co/100x100.png?text=${initials}`} alt={user.email} data-ai-hint="profile avatar" />
              <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
            </Avatar>
            <span className="sr-only">Open user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Official</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Add profile/settings links here if needed */}
          {/* <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator /> */}
          <DropdownMenuItem onClick={logout} className="cursor-pointer text-destructive focus:text-destructive-foreground focus:bg-destructive">
            <LogOutIcon className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button asChild variant="ghost" className="text-white hover:bg-primary-foreground/10 hover:text-gray-200 px-3 py-2 rounded-md transition-colors duration-150 focus-visible:ring-accent">
      <Link href="/login" className="flex items-center">
        <LogIn className="mr-2 h-5 w-5" />
        Login
      </Link>
    </Button>
  );
}
