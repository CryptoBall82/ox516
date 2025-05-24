// src/app/toolbox/page.tsx
"use client";

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toolboxImage from '../../app/assets/tool225.png';
import { CloudSun, Coin, GraduationCap, BriefcaseBusiness, type LucideIcon } from 'lucide-react';

interface ToolButtonInfo {
  name: string;
  path: string;
  icon: LucideIcon;
}

export default function ToolboxPage() {
  const router = useRouter();

  const toolButtons: ToolButtonInfo[] = [
    { name: 'Weather Center', path: '/toolbox/weather', icon: CloudSun },
    { name: 'Coin Toss', path: '/toolbox/cointoss', icon: Coin },
    { name: 'Umpire Classroom', path: '/toolbox/umpireclassroom', icon: GraduationCap },
    { name: 'Assignor Info', path: '/toolbox/officialroster', icon: BriefcaseBusiness },
  ];

  const handleToolClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px] bg-background">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
        {/* Page Title */}
        <span
          className="absolute font-bold text-3xl text-white"
          style={{
            top: '90px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Toolbox
        </span>

        {/* Image Display */}
        <Image
          src={toolboxImage}
          alt="Toolbox Icon"
          data-ai-hint="tools wrench hammer"
          width={225}
          height={129}
          style={{
            position: 'absolute',
            top: '130px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            height: '129px',
          }}
          priority
          onError={(e: any) => {
            e.currentTarget.onerror = null; 
            e.currentTarget.src = 'https://placehold.co/225x129.png';
          }}
        />

        {/* Buttons Container - Styled like home page */}
        <div className="absolute bottom-[90px] left-0 right-0 flex justify-center">
          <div className="grid grid-cols-2 gap-y-[25px] gap-x-[25px] p-4">
            {toolButtons.map((buttonInfo) => {
              const IconComponent = buttonInfo.icon;
              return (
                <button
                  key={buttonInfo.name}
                  onClick={() => handleToolClick(buttonInfo.path)}
                  className="
                    w-[100px] h-[100px]
                    bg-white text-black
                    border-2 border-primary
                    shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md
                    hover:scale-105 hover:bg-gray-50 transition-transform relative
                    flex flex-col items-center justify-center p-1
                  "
                >
                  <IconComponent className="h-9 w-9 text-black mb-1" />
                  <span
                    className="text-black font-semibold text-xs text-center w-full px-1 truncate absolute bottom-1"
                  >
                    {buttonInfo.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <NavbarTools />
    </div>
  );
}
