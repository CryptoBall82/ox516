
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Added for consistency if a central image is desired later

export default function OfficialRosterPage() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full flex flex-col items-center justify-center pt-[75px] pb-[75px] px-4">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-foreground mb-12 text-center">
          Assignor Information
        </h1>

        {/* Buttons Container */}
        <div className="flex flex-col items-center gap-6 w-full max-w-xs">
          <Button
            className="w-full h-[70px] bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-lg text-lg font-semibold transition-transform hover:scale-105"
            onClick={() => handleNavigate('/toolbox/officialroster/handbook')}
          >
            Assignor Handbook
          </Button>

          <Button
            className="w-full h-[70px] bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-lg text-lg font-semibold transition-transform hover:scale-105"
            onClick={() => handleNavigate('/toolbox/officialroster/roster-doc')}
          >
            Roster
          </Button>
        </div>
      </div>
      <NavbarTools />
    </div>
  );
}
