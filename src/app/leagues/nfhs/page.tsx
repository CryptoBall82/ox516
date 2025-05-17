
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarLeagues } from '@/components/NavbarLeagues';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import nfhsImage from '../../../app/assets/nfhs.png';


export default function NFHSPage() {
  const router = useRouter();

  const handleButtonClick = (level: string) => {
    if (level === 'Middle School') {
      router.push('/leagues/nfhs/middleschool'); // Navigate to Middle School rules page
    } else if (level === 'High School') {
      router.push('/leagues/nfhs/highschool'); // Navigate to High School rules page
    } else {
       console.log(`${level} button clicked`);
    }
  };

  // You might want a specific NFHS logo or icon here
  const nfhsImageUrl = {nfhsImage}; // Replace with actual NFHS logo URL if available

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[4500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
          <div className="flex justify-center relative mb-4">
            {/* Page Title */}
            <span
              className="absolute font-bold text-3xl text-white"
              style={{
                  top: '90px',
                  left: '50%',
                  transform: 'translateX(-50%)',
               }}
            >
              NFHS
            </span>
            {/* Optional NFHS Logo */}
            <Image
              src={nfhsImage}
              alt="NFHS Logo"
              data-ai-hint="nfhs logo sports shield" // Add hint for potential image search
              width={175}
              height={175}
              style={{
                position: 'absolute',
                top: '130px', // Position below title
                left: '50%',
                transform: 'translateX(-50%)',
                height: '175px',
                width: 'auto',
              }}
              onError={(e: any) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://picsum.photos/175/175'; // Fallback
              }}
            />
          </div>

          {/* Buttons Container */}
          <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6 w-full px-4"> {/* Increased gap */}
            {/* Middle School Button */}
            <Button
                className="w-[225px] h-[80px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative font-bold flex items-center justify-center text-lg" // Center text
                onClick={() => handleButtonClick('Middle School')}
            >
                Middle School
            </Button>

            {/* High School Button */}
            <Button
                className="w-[225px] h-[80px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative font-bold flex items-center justify-center text-lg" // Center text
                onClick={() => handleButtonClick('High School')}
            >
                High School
            </Button>
          </div>
      </div>
      <NavbarLeagues />
    </div>
  );
}


