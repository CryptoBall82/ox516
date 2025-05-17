'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';

export default function OfficialRosterPage() {
  // Construct the embed URL for Google Sheets.
  // Using the provided edit link directly might work, but often embedding requires a specific format.
  // Let's try the provided link first. If it doesn't display well, we might need to adjust.
  // Note: For reliable embedding, the sheet should ideally be published to the web.
  const sheetUrl = "https://docs.google.com/spreadsheets/d/1Noj8kaw3qh6n3kvgQazEisraoSa6tZoF/edit?usp=sharing&ouid=116424317365062189721&rtpof=true&sd=true&rm=minimal"; // Added rm=minimal to potentially hide controls

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      {/* Add padding top and bottom to account for fixed header/navbar */}
      <div className="flex-grow relative w-full pt-[105px] pb-[105px] flex items-center justify-center px-4"> {/* Updated pt and pb for 15px extra padding */}
        <iframe
          src={sheetUrl}
          style={{ width: '100%', height: '100%' }}
          frameBorder="0" // Use frameBorder instead of frameborder
          allowFullScreen // Add allowFullScreen attribute
        >
          Loading Official Roster...
        </iframe>
      </div>
      <NavbarTools />
    </div>
  );
}
