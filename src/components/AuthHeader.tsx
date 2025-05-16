'use client';

import React from 'react';
import Image from 'next/image';

const AuthHeader: React.FC = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 w-full h-[75px] bg-background border-b-[3px] border-primary shadow-lg z-50 flex items-center justify-center"
    >
      <Image
        src="https://placehold.co/175x50.png" // Placeholder for OX lett white175F.png
        alt="OfficiaX Logo"
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
