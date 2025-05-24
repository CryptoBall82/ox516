
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';

export default function AssignorHandbookPage() {
  // Use the /view URL for Google Drive for better embed compatibility
  const documentUrl = "https://drive.google.com/file/d/1H9D2FS6Z3Dz4AV4X3ilgHFJLGInx2kE9/view";

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
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        >
          Loading Assignor Handbook...
        </iframe>
      </div>
      <NavbarTools />
    </div>
  );
}

