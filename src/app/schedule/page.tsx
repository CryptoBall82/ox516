// src/app/schedule/page.tsx

'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarSchedule } from '@/components/NavbarSchedule';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; 
import scheduleImage from '../../app/assets/calendary225.png'; // Your image import
// Import the Next.js Image component

// Inline SVG for Google Logo
const GoogleLogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="50px" height="50px"> {/* Updated size */}
    <path fill="#EA4335" d="M24 9.5c3.21 0 5.89 1.17 7.78 2.93l5.86-5.86C34.17 3.09 29.63 1 24 1 14.9 1 7.22 6.74 4.17 14.9l7.17 5.48C12.82 13.73 17.94 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.14 24.5c0-1.69-.15-3.3-.42-4.83H24v9.17h12.44c-.54 2.97-2.17 5.48-4.64 7.17l6.67 5.17C42.46 37.64 46.14 31.77 46.14 24.5z"/>
    <path fill="#FBBC05" d="M11.34 20.38C10.86 18.83 10.6 17.2 10.6 15.5c0-1.7.26-3.33.74-4.88l-7.17-5.48C1.59 8.18 0 11.73 0 15.5s1.59 7.32 4.17 10.35l7.17-5.47z"/>
    <path fill="#34A853" d="M24 47c6.57 0 12.04-2.17 16.04-5.86l-6.67-5.17c-2.17 1.45-4.96 2.33-8.17 2.33-6.14 0-11.4-4.26-13.22-9.97l-7.17 5.48C7.22 40.26 14.9 47 24 47z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
);

// Inline SVG for Apple Logo - Updated
const AppleLogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" strokeWidth="3" stroke="#000000" fill="none"><path d="M51.71,25.51s-4.17-4.9-9.6-4.9A20.22,20.22,0,0,0,33.9,22.3a2.82,2.82,0,0,1-2.08.11c-2.1-.68-6.14-1.87-9.76-1.58-4.13.33-7.11,4.22-7.11,4.22s-3.34,4-3.34,11.32a24.83,24.83,0,0,0,7,17.68s4.54,5.49,8.46,3.11a10,10,0,0,1,10-.44c2,1.23,5.74,1.71,8-.56a26.54,26.54,0,0,0,6.9-11s-6.45-4.45-6.23-9.91S51.71,25.51,51.71,25.51Z" strokeWidth="3"/><path d="M33.35,17.67a10.33,10.33,0,0,1,8.7-11.11S42.94,16.61,33.35,17.67Z"/></svg>
);

export default function Schedule() {
  const router = useRouter();

  const navigateToGoogleCalendar = () => {
    console.log('Navigating to Google Calendar page');
    router.push('/schedule/googlecalendar'); // Navigate to the new Google Calendar page
  };

  const navigateToICal = () => {
    // Replace with actual logic or path if needed
    console.log('Navigating to iCal integration/page');
    // router.push('/schedule/ical'); // Example for iCal navigation if needed
  };

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full pt-[75px] pb-[75px]"> {/* Added padding for header/navbar */}
        {/* Container for Image and Text */}
        <div className="flex flex-col items-center pt-8"> {/* Added padding top for spacing */}
          {/* Schedule Text */}
          <span
            className="font-bold text-3xl text-foreground mb-4" // Margin bottom for spacing, changed text-black to text-foreground
          >
            Schedule
          </span>

          {/* Image Display */}
          <Image
            src={scheduleImage} // Using placeholder image
            alt="Calendar icon for Schedule page"
            data-ai-hint="calendar schedule"
            width={191}
            height={175}
            className="mb-8"
            style={{
              width: 'auto',
              height: '175px'
            }}
            priority
            />
        </div>

        {/* Buttons Container - Centered */}
        <div className="flex flex-col items-center justify-center">
          {/* Google Calendar Button */}
          <Button
            className="w-[225px] h-[80px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative mb-8 font-bold flex items-center px-4 space-x-3"
            onClick={navigateToGoogleCalendar}
          >
            <GoogleLogoIcon />
            <span className="flex-grow text-center text-lg">Google Calendar</span>
          </Button>

          {/* iCal Button */}
          <Button
            className="w-[225px] h-[80px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative font-bold flex items-center px-4 space-x-3"
            onClick={navigateToICal}
          >
            <AppleLogoIcon />
            <span className="flex-grow text-center text-lg">iCal</span>
          </Button>
        </div>
      </div>
      <NavbarSchedule />
    </div>
  );
}
