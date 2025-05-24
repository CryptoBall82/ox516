
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RosterDocumentPage() {
  // const documentUrl = "YOUR_ROSTER_DOCUMENT_URL_HERE"; // Replace with actual URL when available

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full pt-[90px] pb-[90px] flex flex-col items-center justify-center px-4">
        {/* Placeholder until actual document URL is provided */}
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>Roster Document</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The roster document will be displayed here once the URL is provided.
            </p>
            {/* 
            Replace this section with the iframe once the URL is available:
            <iframe
              src={documentUrl} // Make sure documentUrl is defined
              style={{ width: '100%', height: '500px' }} // Adjust height as needed
              frameBorder="0"
              allowFullScreen
              title="Roster Document"
            >
              Loading Roster Document...
            </iframe>
            */}
            <div 
              className="w-full h-[500px] bg-muted/50 border border-dashed border-border rounded-md flex items-center justify-center"
              aria-label="Roster document placeholder"
            >
              <p className="text-muted-foreground">Roster Document Preview Area</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <NavbarTools />
    </div>
  );
}
