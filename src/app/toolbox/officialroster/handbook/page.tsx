
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';

export default function AssignorHandbookPage() {
  const documentUrl = "https://drive.google.com/file/d/1ORFf0wJ-fwuGhgSBC9iMukbohSjcXJ8e/preview";

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      {/* Add padding top and bottom to account for fixed header/navbar */}
      <div className="flex-grow relative w-full pt-[90px] pb-[90px] flex items-center justify-center px-4">
        <iframe
          src={documentUrl}
          style={{ width: '100%', height: '100%' }}
          frameBorder="0"
          allowFullScreen
          title="Assignor Handbook"
        >
          Loading Assignor Handbook...
        </iframe>
      </div>
      <NavbarTools />
    </div>
  );
}

