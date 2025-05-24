
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
// Card components are not needed if we are directly embedding the iframe
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; 

export default function RosterDocumentPage() {
  // Use the /preview URL for Google Sheets for better embed compatibility
  const documentUrl = "https://docs.google.com/spreadsheets/d/1GyoS9sNqgmltdAX91GrTLDKe12qp9u7QJlE57d98rAc/preview"; 

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full pt-[90px] pb-[90px] flex flex-col items-center justify-center px-4">
        <iframe
          src={documentUrl}
          style={{ width: '100%', height: '100%' }} // Adjusted height to fill the container better
          frameBorder="0"
          allowFullScreen
          title="Roster Document"
        >
          Loading Roster Document...
        </iframe>
      </div>
      <NavbarTools />
    </div>
  );
}
