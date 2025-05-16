
'use client';

import React from 'react';
import {DefaultHeader} from '@/components/DefaultHeader';
import {NavbarTools} from '@/components/NavbarTools';
import Image from 'next/image'; // Import Image for the top icon
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import {useRouter} from 'next/navigation';
import toolsImage from '../../assets/tool225.png';

// Inline SVG for Coin Toss
const CoinTossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="rgba(0,0,0,1)" // Set fill color to black
    width="35px" // Updated size
    height="35px" // Updated size
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z" />
     {/* Simple coin representation */}
     <circle cx="12" cy="12" r="5" stroke="rgba(0,0,0,1)" strokeWidth="1" fill="none" />
     <text x="12" y="14" fontSize="6" textAnchor="middle" fill="rgba(0,0,0,1)">?</text>
  </svg>
);


export default function Tools() {
  const router = useRouter();

  const navigateToWeatherPage = () => router.push('/tools/weather');
  const navigateToCoinTossPage = () => router.push('/tools/cointoss');
  const navigateToUmpireClassroomPage = () => router.push('/tools/umpireclassroom');
  const navigateToOfficialRosterPage = () => router.push('/tools/officialroster');


  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
           <div className="flex justify-center relative">
            {/* Text moved above the image */}
            <span
              className="absolute font-bold text-3xl text-black" // Changed text-xl to text-3xl
              style={{
                  top: '30px', // Position text near the top
                  left: '50%',
                  transform: 'translateX(-50%)',
               }}
            >
              Tools
            </span>
            {/* Top icon for the Tools page, positioned below the text */}
             <Image
                src={toolsImage} // Updated image URL token
                alt="Tools Icon"
                data-ai-hint="tools wrench hammer" // Updated hint
                width={200}
                height={200}
                style={{
                  position: 'absolute',
                  top: '65px', // Position image below text
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                onError={(e: any) => {
                    e.currentTarget.onerror = null; // prevents looping
                    e.currentTarget.src = 'https://picsum.photos/175/175';
                }}
            />

          </div>
           <div className="absolute bottom-[30px] left-0 right-0 flex justify-center">
            {/* Updated grid gap and button size/shadow */}
            <div className="grid grid-cols-2 gap-y-[25px] gap-x-[25px] p-4">
              {/* Weather Button */}
              <button
                onClick={navigateToWeatherPage}
                className="w-[100px] h-[100px] bg-[rgba(255,255,255,1)] border-[2px] border-[rgba(204,0,0,1)] shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <ThunderstormOutlinedIcon
                    style={{color: 'rgba(0,0,0,1)', width: '35px', height: '35px'}}
                  />
                  <span
                    className="text-[rgba(0,0,0,1)] font-semibold absolute bottom-0.5"
                    style={{fontSize: '14pt'}}
                  >
                    Weather
                  </span>
                </div>
              </button>

              {/* Coin Toss Button */}
              <button
                onClick={navigateToCoinTossPage}
                className="w-[100px] h-[100px] bg-[rgba(255,255,255,1)] border-[2px] border-[rgba(204,0,0,1)] shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <CoinTossIcon />
                  <span
                    className="text-[rgba(0,0,0,1)] font-semibold absolute bottom-0.5"
                    style={{fontSize: '13.5pt'}}
                  >
                    Coin Toss
                  </span>
                </div>
              </button>

              {/* Umpire Classroom Button */}
              <button
                onClick={navigateToUmpireClassroomPage}
                className="w-[100px] h-[100px] bg-[rgba(255,255,255,1)] border-[2px] border-[rgba(204,0,0,1)] shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <SchoolOutlinedIcon
                    style={{color: 'rgba(0,0,0,1)', width: '35px', height: '35px'}}
                  />
                  <span
                    className="text-[rgba(0,0,0,1)] font-semibold absolute bottom-0.5"
                    style={{fontSize: '13pt'}}
                  >
                    Ump Class
                  </span>
                </div>
              </button>

              {/* Roster Button */}
              <button
                onClick={navigateToOfficialRosterPage}
                className="w-[100px] h-[100px] bg-[rgba(255,255,255,1)] border-[2px] border-[rgba(204,0,0,1)] shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <PermContactCalendarOutlinedIcon
                    style={{color: 'rgba(0,0,0,1)', width: '35px', height: '35px'}}
                  />
                  <span
                    className="text-[rgba(0,0,0,1)] font-semibold absolute bottom-0.5"
                    style={{fontSize: '14pt'}}
                  >
                    Roster
                  </span>
                </div>
              </button>
            </div>
          </div>
      </div>
      <NavbarTools />
    </div>
  );
}

