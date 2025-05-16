'use client';

import React from 'react';
import Image from 'next/image'; // Import the next/image component

// Removed import for oxImage as it's not found

const AuthHeader: React.FC = () => {
  return (
    <header
      // Fixed header styling
      className="fixed top-0 w-full h-[75px] bg-background border-b-[3px] border-[rgba(204,0,0,1)] shadow-[0_4px_10px_4px_rgba(187,187,187,.5)] z-10 flex items-center justify-center"
    >
      {/* Use the next/image component here */}
      <Image
        src="https://placehold.co/175x50.png" 
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
    </header>
  );
};

export { AuthHeader };
