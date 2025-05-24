// src/app/home/page.tsx

'use client';

import React from 'react';
import {HomeHeader} from '@/components/HomeHeader';
import {NavbarHome} from '@/components/NavbarHome';
import Image from 'next/image';
import { Users, CalendarDays, Construction, Sparkles } from 'lucide-react'; // Updated to use lucide-react icons
import {useRouter} from 'next/navigation';
import officiaXIcon from '../../app/assets/ox icon white 225.png'; 

export default function Home() {
  const router = useRouter();

  const navigateToLeaguesPage = () => router.push('/leagues');
  const navigateToSchedulePage = () => router.push('/schedule');
  const navigateToToolsPage = () => router.push('/toolbox');
  const navigateToOfficiaX_AIPage = () => router.push('/ai-assistant');

  const buttons = [
    { name: 'Leagues', action: navigateToLeaguesPage, icon: Users, iconSize: '35px', fontSize: '14pt' },
    { name: 'Schedule', action: navigateToSchedulePage, icon: CalendarDays, iconSize: '35px', fontSize: '14pt' },
    { name: 'Tools', action: navigateToToolsPage, icon: Construction, iconSize: '35px', fontSize: '14pt' },
    { name: 'OfficiaX AI', action: navigateToOfficiaX_AIPage, icon: Sparkles, iconSize: '35px', fontSize: '13.5pt' },
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
          <div className="absolute bottom-[90px] left-0 right-0 flex justify-center"> {/* Changed bottom-[30px] to bottom-[90px] */}
            <div className="grid grid-cols-2 gap-y-[25px] gap-x-[25px] p-4">
              {buttons.map((buttonInfo) => (
                <button
                  key={buttonInfo.name}
                  onClick={buttonInfo.action}
                  className="w-[100px] h-[100px] bg-card text-card-foreground border-2 border-primary shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <buttonInfo.icon
                      className="text-foreground" // Use foreground color from theme
                      size={buttonInfo.iconSize}
                    />
                    <span
                      className="text-foreground font-semibold absolute bottom-0.5"
                      style={{fontSize: buttonInfo.fontSize}}
                    >
                      {buttonInfo.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
      </div>
      <NavbarHome />
    </div>
  );
}
