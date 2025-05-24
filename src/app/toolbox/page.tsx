// src/app/toolbox/page.tsx
"use client";

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toolboxImage from '../../app/assets/tool225.png';

export default function ToolboxPage() {
  const router = useRouter();

  const toolButtons = [
    { name: 'Weather Center', path: '/toolbox/weather' },
    { name: 'Coin Toss', path: '/toolbox/cointoss' },
    { name: 'Umpire Classroom', path: '/toolbox/umpireclassroom' },
    { name: 'Assignor Info', path: '/toolbox/officialroster' },
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
          className="absolute font-bold text-3xl text-white" // Using text-white to match leagues page
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
          width={225} // Original width
          height={129} // Match leagues image height
          style={{
            position: 'absolute',
            top: '130px', // Position image below text
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto', // Maintain aspect ratio based on height
            height: '129px', // Fixed height
          }}
          priority
          onError={(e: any) => {
            e.currentTarget.onerror = null; // prevents looping
            e.currentTarget.src = 'https://placehold.co/225x129.png'; // Placeholder with matched height
          }}
        />

        {/* Buttons Container */}
        <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 w-full px-4">
          {toolButtons.map((tool) => (
            <Button
              key={tool.name}
              className="w-[225px] h-[45px] bg-white text-black border-2 border-primary hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative mb-[5px] font-bold"
              onClick={() => handleToolClick(tool.path)}
            >
              {tool.name}
            </Button>
          ))}
        </div>
      </div>
      <NavbarTools />
    </div>
  );
}
