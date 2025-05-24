
'use client';

import React from 'react';
import Image from 'next/image'; // Import the next/image component
import { ChevronLeft, Menu } from 'lucide-react'; // Use lucide-react icons
import { useRouter } from 'next/navigation';
import oxImage from '../app/assets/OX lett white175F.png';

// Removed import for oxImage as it's not found

const DefaultHeader: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <header
      className="fixed top-0 w-full h-[75px] bg-background border-b-[3px] border-[rgba(204,0,0,1)] shadow-[0_4px_10px_4px_rgba(187,187,187,0)] z-10 flex items-center justify-between"
    >
      {/* Left section - Back Button */}
      <div className="flex items-center w-[60px] justify-start pl-[15px]">
        <ChevronLeft
          className="text-white cursor-pointer"
          onClick={handleBackClick}
          size={36} 
        />
      </div>

      {/* Center section - Contains the Image */}
      <div className="flex items-center justify-center flex-grow">
        <Image
          src={oxImage} // Using placeholder image
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

export { DefaultHeader };
