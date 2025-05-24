
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarLeagues } from '@/components/NavbarLeagues';

export default function AybaRulesPage() {
  // Use the /view URL for Google Drive for potentially more features
  const documentUrl = "https://drive.google.com/file/d/1SnZv8FBa69mk9GSixCiPyR0tptH_naRR/view";

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      {/* Add padding top and bottom to account for fixed header/navbar */}
      <div className="flex-grow relative w-full pt-[90px] pb-[90px] flex items-center justify-center px-4"> {/* Updated pt and pb */}
        <iframe
          src={documentUrl}
          style={{ width: '100%', height: '100%' }}
          frameBorder="0" // Use frameBorder instead of frameborder
          allowFullScreen // Add allowFullScreen attribute
          title="AYBA Rules Document" // Add title for accessibility
        >
          Loading AYBA Rules...
        </iframe>
      </div>
      <NavbarLeagues />
    </div>
  );
}
