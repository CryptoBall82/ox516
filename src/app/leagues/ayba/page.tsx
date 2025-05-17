'use client';

import React, { useState } from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarLeagues } from '@/components/NavbarLeagues';
// import { Button } from '@/components/ui/button'; // Removed unused import
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// Corrected image import paths to reflect structure: src/assets/
import aybaImage from '../../../app/assets/ayba_logo225.png';
import willsImage from '../../../app/assets/wills2x.png';
import webbImage from '../../../app/assets/webb22x.png';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { X, CloudRainWind } from 'lucide-react';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

// Define Parking Icon SVG component
const ParkingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M13 7h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-2h2a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3m1 4a1 1 0 0 1-1 1h-2V9h2a1 1 0 0 1 1 1Zm-2-9a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"/>
  </svg>
);


export default function AybaPage() {
  const router = useRouter();
  const [isWillsDialogOpen, setIsWillsDialogOpen] = useState(false);
  const [isWebbDialogOpen, setIsWebbDialogOpen] = useState(false);

  const buttons = [
    { name: 'Rules', path: '/leagues/ayba/rules', action: () => router.push('/leagues/ayba/rules'), icon: MenuBookOutlinedIcon },
    { name: 'Field Status', path: '/leagues/ayba/fieldstatus', action: () => router.push('/leagues/ayba/fieldstatus'), icon: CloudRainWind },
    { name: 'Wills Park', path: '#', action: () => setIsWillsDialogOpen(true), icon: ParkingIcon },
    { name: 'Webb Br', path: '#', action: () => setIsWebbDialogOpen(true), icon: ParkingIcon },
  ];

  // Firebase URLs are no longer needed as primary sources for dialog images
  // const willsParkingImageUrl = "https://firebasestorage.googleapis.com/v0/b/officiax-theme-generator.appspot.com/o/wills2x.png?alt=media&token=d52c1a6a-7d8a-4f3a-8f4e-8d0c847a71c9";
  // const webbParkingImageUrl = "https://firebasestorage.googleapis.com/v0/b/officiax-theme-generator.appspot.com/o/webb22x.png?alt=media&token=761e32b1-e313-4b6f-b7a6-b922321d6495";


  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
          <div className="flex justify-center relative">
            <span
              className="absolute font-bold text-3xl text-white"
              style={{
                top: '90px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              AYBA
            </span>
            <Image
              src={aybaImage} // Using the locally imported image
              alt="AYBA Logo"
              data-ai-hint="ayba logo baseball"
              width={223}
              height={175}
              priority // Consider adding priority if it's an LCP element
              style={{
                position: 'absolute',
                top: '130px',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '175px',
                width: 'auto',
              }}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = 'https://placehold.co/223x225/cccccc/000000?text=AYBA+Logo';
              }}
            />
          </div>

          <div className="absolute bottom-[90px] left-0 right-0 flex justify-center">
            <div className="grid grid-cols-2 gap-y-[25px] gap-x-[25px] p-4">
              {buttons.map((buttonInfo) => (
                <button
                  key={buttonInfo.name}
                  className="w-[100px] h-[100px] bg-[rgba(255,255,255,1)] border-[2px] border-[rgba(204,0,0,1)] shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative"
                  onClick={buttonInfo.action}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    {buttonInfo.icon && React.createElement(buttonInfo.icon, { style: { color: 'rgba(0,0,0,1)', width: '35px', height: '35px' } })}
                    <span
                      className="text-[rgba(0,0,0,1)] font-semibold absolute bottom-0.5 text-center w-full"
                      style={{fontSize: '12pt'}}
                    >
                      {buttonInfo.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
      </div>
      <NavbarLeagues />

      {/* Dialog for Wills Parking */}
      <Dialog open={isWillsDialogOpen} onOpenChange={setIsWillsDialogOpen}>
        <DialogContent className="max-w-3xl w-auto p-0 bg-transparent border-none shadow-none">
          <DialogHeader>
            <DialogTitle className="sr-only">Wills Park Parking Map</DialogTitle>
          </DialogHeader>
          <DialogClose asChild>
            <button
              className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors z-50"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </DialogClose>
          <div className="relative w-full h-auto">
            <Image
              src={willsImage} // MODIFIED: Use local import directly
              alt="Wills Park Parking Map"
              data-ai-hint="parking map aerial view"
              width={390} // You might need to adjust these if your local image has different dimensions
              height={390}
              className="object-contain rounded-md"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = 'https://placehold.co/390x390/cccccc/000000?text=Wills+Map'; // Fallback to placeholder
              }}
            />
          </div>
        </DialogContent>
      </Dialog>

        {/* Dialog for Webb Bridge Parking */}
      <Dialog open={isWebbDialogOpen} onOpenChange={setIsWebbDialogOpen}>
        <DialogContent className="max-w-3xl w-auto p-0 bg-transparent border-none shadow-none">
          <DialogHeader>
            <DialogTitle className="sr-only">Webb Bridge Park Parking Map</DialogTitle>
          </DialogHeader>
          <DialogClose asChild>
            <button
              className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors z-50"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </DialogClose>
          <div className="relative w-full h-auto">
            <Image
              src={webbImage} // MODIFIED: Use local import directly
              alt="Webb Bridge Park Parking Map"
              data-ai-hint="parking map aerial view baseball"
              width={390} // You might need to adjust these if your local image has different dimensions
              height={390}
              className="object-contain rounded-md"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = 'https://placehold.co/390x390/cccccc/000000?text=Webb+Map'; // Fallback to placeholder
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
