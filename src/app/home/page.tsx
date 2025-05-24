// src/app/home/page.tsx

'use client';

import React from 'react';
import { HomeHeader } from '@/components/HomeHeader';
import { NavbarHome } from '@/components/NavbarHome';
import Image from 'next/image';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { useRouter } from 'next/navigation';
import officiaXIcon from '../../app/assets/ox icon white 225.png';

export default function Home() {
  const router = useRouter();

  const navigateToLeaguesPage = () => router.push('/leagues');
  const navigateToSchedulePage = () => router.push('/schedule');
  const navigateToToolsPage = () => router.push('/toolbox');
  const navigateToOfficiaX_AIPage = () => router.push('/ai-assistant');

  // Removed styleOverride as all buttons will now have a default white background
  const buttons = [
    {
      name: 'Leagues',
      action: navigateToLeaguesPage,
      icon: SportsBaseballOutlinedIcon,
      iconSize: '37px',
      fontSize: '14pt',
      // You can add specific text color here if needed, e.g., textColor: '#0000FF'
    },
    {
      name: 'Schedule',
      action: navigateToSchedulePage,
      icon: CalendarMonthOutlinedIcon,
      iconSize: '37px',
      fontSize: '14pt'
    },
    {
      name: 'Tools',
      action: navigateToToolsPage,
      icon: ConstructionOutlinedIcon,
      iconSize: '37px',
      fontSize: '14pt'
    },
    {
      name: 'OfficiaX AI',
      action: navigateToOfficiaX_AIPage,
      icon: AutoAwesomeOutlinedIcon,
      iconSize: '37px',
      fontSize: '13pt'
    },
  ];

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <HomeHeader />
      <div className="flex-grow relative w-full">
        <div className="flex justify-center">
          <Image
            src={officiaXIcon}
            alt="OfficiaX Icon"
            data-ai-hint="logo icon"
            width={175}
            height={175}
            style={{
              position: 'absolute',
              top: '90px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            onError={(e: any) => {
              e.currentTarget.onerror = null; // prevents looping
              e.currentTarget.src = 'https://placehold.co/175x175.png';
            }}
          />
        </div>
        <div className="absolute bottom-[90px] left-0 right-0 flex justify-center">
          <div className="grid grid-cols-2 gap-y-[25px] gap-x-[25px] p-4">
            {buttons.map((buttonInfo) => {
              const IconComponent = buttonInfo.icon;
              // Define text color: use buttonInfo.textColor if provided, otherwise default to a dark color for contrast with white bg
              const textColor = buttonInfo.textColor || 'text-neutral-800'; // Default dark text for white bg

              return (
                <button
                  key={buttonInfo.name}
                  onClick={buttonInfo.action}
                  className={`
                    w-[100px] h-[100px]
                    bg-white ${textColor}
                    border-2 border-primary
                    shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md
                    hover:scale-105 hover:bg-gray-50 transition-transform relative
                    flex flex-col items-center justify-center p-1
                  `}
                  // If you had specific style overrides for some buttons beyond bg/text color,
                  // you could still use buttonInfo.styleOverride here.
                  // style={buttonInfo.styleOverride}
                >
                  <IconComponent
                    sx={{ fontSize: buttonInfo.iconSize }} // Icon color will inherit from button's text color
                  />
                  <span
                    className="font-semibold absolute bottom-0.5 text-center w-full px-1 truncate"
                    style={{ fontSize: buttonInfo.fontSize }} // Text color will inherit
                  >
                    {buttonInfo.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <NavbarHome />
    </div>
  );
}