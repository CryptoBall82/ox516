// src/app/toolbox/page.tsx
"use client";

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData for type safety
import { useRouter } from 'next/navigation';
import toolboxImage from '../../app/assets/tool225.png'; // Ensure this path is correct
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

// Corrected import path for cointossIcon
import cointossIcon from '../../app/assets/coin-toss3.png';

interface ToolButtonInfo {
  name: string;
  path: string;
  icon: React.ReactNode; // Icon will be a fully formed React element
}

export default function ToolboxPage() {
  const router = useRouter();

  const iconSizeStyle = { fontSize: '36px' }; // For MUI Icons, equivalent to h-9 w-9 approx.
  const imageSize = 36; // For Next/Image width & height

  const toolButtons: ToolButtonInfo[] = [
    {
      name: 'Weather Center',
      path: '/toolbox/weather',
      icon: <ThunderstormOutlinedIcon sx={iconSizeStyle} className="mb-1" />
    },
    {
      name: 'Coin Toss',
      path: '/toolbox/cointoss',
      icon: <Image src={cointossIcon} alt="Coin Toss Icon" width={imageSize} height={imageSize} className="mb-1" />
    },
    {
      name: 'Umpire Classroom',
      path: '/toolbox/umpireclassroom',
      icon: <SchoolOutlinedIcon sx={iconSizeStyle} className="mb-1" />
    },
    {
      name: 'Assignor Info',
      path: '/toolbox/officialroster',
      icon: <BusinessCenterOutlinedIcon sx={iconSizeStyle} className="mb-1" />
    },
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
          className="absolute font-bold text-3xl text-white" // Assuming text-white is desired against bg-background
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
          width={225} // Intrinsic width of toolboxImage
          height={129} // Intrinsic height of toolboxImage
          style={{
            position: 'absolute',
            top: '130px', // Ensure this doesn't overlap with the title too much
            left: '50%',
            transform: 'translateX(-50%)',
            // width & height props on Next/Image define aspect ratio.
            // These inline styles will affect the displayed size.
            // If you want it to be 129px high and width auto, ensure width/height props match aspect ratio.
            width: 'auto', // This will make the image scale based on the height, respecting aspect ratio
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
                  {/* Render the icon element directly */}
                  {buttonInfo.icon}
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