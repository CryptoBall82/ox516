// src/components/layout/app-header.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, CalendarDays, Briefcase, Sparkles, Menu } from 'lucide-react';
import { Logo } from './logo';
import { UserNav } from './user-nav';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from 'react';

const navItems = [
  { href: '/dashboard', label: 'Home', icon: LayoutDashboard }, // Changed label from 'Dashboard' to 'Home'
  { href: '/schedule', label: 'Schedule', icon: CalendarDays },
  { href: '/toolbox', label: 'Toolbox', icon: Briefcase },
  { href: '/ai-assistant', label: 'AI Assistant', icon: Sparkles },
];

export function AppHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const NavLink = ({ href, label, icon: Icon }: typeof navItems[0] & {isMobile?: boolean}) => (
    <Link
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ease-in-out group",
        pathname === href
          ? "bg-primary-foreground/20 text-white scale-105 shadow-md"
          : "text-gray-200 hover:bg-primary-foreground/10 hover:text-white hover:scale-105",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      )}
    >
      <Icon className="h-5 w-5 transition-transform group-hover:rotate-[-5deg] group-focus:rotate-[-5deg]" />
      {label}
    </Link>
  );
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo iconColorClassName="text-accent" textColorClassName="text-white" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <UserNav />
            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-primary-foreground/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] bg-primary p-4">
                  <div className="mb-6">
                    <Logo iconColorClassName="text-accent" textColorClassName="text-white" />
                  </div>
                  <nav className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                       <NavLink key={item.label} {...item} isMobile />
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
