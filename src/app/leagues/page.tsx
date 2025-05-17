'use client';

import React from 'react';
import {DefaultHeader} from '@/components/DefaultHeader';
import {NavbarLeagues} from '@/components/NavbarLeagues';
import {Button} from '@/components/ui/button'; // Import the Button component
import {useRouter} from 'next/navigation'; // Import useRouter
import Image from 'next/image'; // Import the Image component
import leagueImage from '../../app/assets/Leagues225.png';

export default function Leagues() {
  const buttonNames = ['AYBA', 'Ocee Park', 'NFHS', 'Perfect Game', 'Training Legends'];
  const router = useRouter(); // Initialize router

  const handleLeagueClick = (leagueName: string) => {
    // Example navigation logic, replace with actual routes if needed
    console.log(`Navigating to ${leagueName}`);
     if (leagueName === 'AYBA') {
       router.push('/leagues/ayba');
     } else if (leagueName === 'Ocee Park') {
       router.push('/leagues/oceepark');
     } else if (leagueName === 'NFHS') {
       router.push('/leagues/nfhs'); // Navigate to NFHS page
     } else if (leagueName === 'Perfect Game') {
       router.push('/leagues/perfectgame'); // Navigate to Perfect Game page
     } else if (leagueName === 'Training Legends') {
       router.push('/leagues/traininglegends'); // Navigate to Training Legends page
     }
    // router.push(`/leagues/${leagueName.toLowerCase().replace(' ', '-')}`);
  };


  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
          <div className="flex justify-center relative">
             {/* Text moved above the image */}
             <span
              className="absolute font-bold text-3xl text-white" // Changed text-xl to text-3xl
              style={{
                  top: '90px', // Position text near the top
                  left: '50%',
                  transform: 'translateX(-50%)',
               }}
            >
              Leagues
            </span>
             {/* Image positioned below the text */}
             <Image
              src={leagueImage}
              alt="Baseball field icon"
              data-ai-hint="baseball field logo"
              width={225}
              height={129}
              style={{
                position: 'absolute',
                top: '130px', // Position image below text (30px top + text height + margin)
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'auto',
                height: '129px',
              }}
              priority
              onError={(e: any) => {
                e.currentTarget.onerror = null; // prevents looping
                e.currentTarget.src = 'https://picsum.photos/175/175';
              }}
            />

          </div>
          <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 w-full px-4">
            {buttonNames.map((name) => (
              <Button
                key={name}
                className="w-[225px] h-[45px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative mb-[5px] font-bold" // Updated width to w-[225px]
                onClick={() => handleLeagueClick(name)} // Add onClick handler
              >
                {name}
              </Button>
            ))}
          </div>
      </div>
      <NavbarLeagues />
    </div>
  );
}