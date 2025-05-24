
'use client';

import React from 'react';
import Image from 'next/image'; // Import the next/image component
import { Menu } from 'lucide-react'; // Replaced MUI icon with lucide-react
import oxImage from '../app/assets/OX lett white175F.png';

const HomeHeader: React.FC = () => {
  return (
    <header
      // Fixed header styling
      className="fixed top-0 w-full h-[75px] bg-background border-b-[3px] border-[rgba(204,0,0,1)] shadow-[0_4px_10px_4px_rgba(187,187,187,0)] z-10 flex items-center justify-between"
    >
      {/* Left section - currently empty, can be used for a logo or back button if needed */}
      <div className="flex items-center w-[60px]">
        {/* Placeholder or can be used for another icon/logo */}
      </div>

      {/* Center section - Now contains the Image */}
      <div className="flex items-center justify-center flex-grow">
        <Image
          src={oxImage}
          alt="OX Logo"
          height={50}
          width={175}
          data-ai-hint="logo company"
          style={{
            height: '50px',
            width: 'auto',
          }}
          priority
        />
      </div>

      {/* Right section - Menu Button */}
      <div className="flex items-center justify-end w-[60px] pr-[15px]">
        <Menu className="text-white cursor-pointer" size={36} />
      </div>
    </header>
  );
};

export { HomeHeader };
