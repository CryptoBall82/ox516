
'use client';

import React, { useState } from 'react'; // Import useState
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarLeagues } from '@/components/NavbarLeagues';
import { RectangleContainer } from '@/components/RectangleContainer';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image component
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'; // Import Dialog components
import { X } from 'lucide-react'; // Import X icon for close button

export default function OceeParkPage() {
  const router = useRouter();
  const [isOceeDialogOpen, setIsOceeDialogOpen] = useState(false); // State for Ocee dialog visibility

  const buttons = [
    { name: 'Ocee Park Rules', path: '/leagues/oceepark/rules' },
    { name: 'Ocee Field Status', path: '/leagues/oceepark/fieldstatus' }, // Updated path
    { name: 'Ocee Parking', path: '#', action: () => setIsOceeDialogOpen(true) }, // Updated action
  ];

  const handleButtonClick = (path: string, action?: () => void) => { // Updated handler
    if (action) {
      action();
    } else if (path !== '#') {
      router.push(path);
    } else {
      console.log('Placeholder link clicked');
    }
  };

  // Updated Ocee Park logo URL
  const oceeParkLogoUrl = "https://firebasestorage.googleapis.com/v0/b/officiax-theme-generator.appspot.com/o/oceelogo175.png?alt=media&token=b4a69954-5a95-4a3c-906b-884f5b9a9a09"; // Added a placeholder token, replace if needed
  // Placeholder URL for Ocee parking image - replace with actual Firebase URL
  const oceeParkingImageUrl = "https://firebasestorage.googleapis.com/v0/b/officiax-theme-generator.appspot.com/o/ocee%20parking2x.png?alt=media&token=placeholder"; // Replace token

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
        <RectangleContainer>
          <div className="flex justify-center relative mb-4">
            {/* Page Title */}
            <span
              className="absolute font-bold text-3xl text-black whitespace-nowrap" // Added whitespace-nowrap
              style={{
                  top: '30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
               }}
            >
              Ocee Park
            </span>
            {/* Ocee Park Logo */}
            <Image
              src={oceeParkLogoUrl}
              alt="Ocee Park Logo"
              data-ai-hint="ocee park logo baseball" // Add hint for potential image search
              width={175}
              height={175}
              style={{
                position: 'absolute',
                top: '65px', // Position below title
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              onError={(e: any) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://picsum.photos/175/175'; // Fallback
              }}
            />
          </div>

          {/* Umpire Room Code */}
           <p
              className="absolute text-black font-semibold text-center"
              style={{
                top: '255px', // Position below image
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%' // Ensure text wraps if needed
              }}
           >
            Code to the umpire's room - 7839
          </p>


          {/* Buttons Container */}
          <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 w-full px-4">
            {buttons.map((buttonInfo) => (
              <Button
                key={buttonInfo.name}
                className="w-[225px] h-[45px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative mb-[5px] font-bold"
                onClick={() => handleButtonClick(buttonInfo.path, buttonInfo.action)} // Updated onClick
              >
                {buttonInfo.name}
              </Button>
            ))}
          </div>
        </RectangleContainer>
      </div>
      <NavbarLeagues />

      {/* Dialog for Ocee Parking */}
      <Dialog open={isOceeDialogOpen} onOpenChange={setIsOceeDialogOpen}>
        <DialogContent className="max-w-3xl w-auto p-0 bg-transparent border-none shadow-none">
           {/* Visually hidden DialogTitle for accessibility */}
           <DialogHeader>
             <DialogTitle className="sr-only">Ocee Park Parking Map</DialogTitle>
           </DialogHeader>
           {/* Close button positioned inside DialogContent */}
           <DialogClose asChild>
             <button
               className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors z-50"
               aria-label="Close"
             >
               <X className="h-6 w-6" />
             </button>
           </DialogClose>
          <div className="relative w-full h-auto"> {/* Container for Image */}
            <Image
              src={oceeParkingImageUrl}
              alt="Ocee Park Parking Map"
              data-ai-hint="parking map aerial view baseball park" // Updated hint
              width={390} // Set width
              height={390} // Set height
              className="object-contain rounded-md" // Ensure image fits and has rounded corners
              onError={(e: any) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://picsum.photos/390/390'; // Fallback placeholder size
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
