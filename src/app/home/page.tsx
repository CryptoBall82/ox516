// src/app/home/page.tsx

'use client';

import React from 'react';
import {HomeHeader} from '@/components/HomeHeader';
import {NavbarHome} from '@/components/NavbarHome';
import Image from 'next/image';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import {useRouter} from 'next/navigation';
import officiaXIcon from '../../app/assets/ox icon white 225.png'; // Corrected import for the ox icon

export default function Home() {
  const router = useRouter();

  const navigateToLeaguesPage = () => router.push('/leagues');
  const navigateToSchedulePage = () => router.push('/schedule');
  const navigateToToolsPage = () => router.push('/tools');
  const navigateToOfficiaX_AIPage = () => router.push('/a-i');

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <HomeHeader />
      <div className="flex-grow relative w-full">
          <div className="flex justify-center">
            <Image
              src={officiaXIcon}
              alt="OfficiaX Icon"
              data-ai-hint="logo icon"
              width={175}
              height={175}
              style={{
                position: 'absolute',
                top: '30px',
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
            <div className="grid grid-cols-2 gap-y-[25px] gap-x-[25px] p-4"> {/* Updated gap */}
              {/* Leagues Button */}
              <button
                onClick={navigateToLeaguesPage}
                className="w-[100px] h-[100px] bg-[rgba(255,255,255,1)] border-[2px] border-[rgba(204,0,0,1)] shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative" // Updated shadow
              >
                {/* Centered icon and text */}
                <div className="flex flex-col items-center justify-center h-full"> {/* Removed pt-4 */}
                  <SportsBaseballOutlinedIcon
                    style={{color: 'rgba(0,0,0,1)', width: '35px', height: '35px'}} // Updated size
                  />
                  {/* Adjusted text positioning */}
                  <span
                    className="text-[rgba(0,0,0,1)] font-semibold absolute bottom-0.5" // Use absolute positioning for text, changed bottom-1 to bottom-0.5
                    style={{fontSize: '14pt'}} // Updated font size
                  >
                    Leagues
                  </span>
                </div>
              </button>

              {/* Schedule Button */}
              <button
                onClick={navigateToSchedulePage}
                className="w-[100px] h-[100px] bg-[rgba(255,255,255,1)] border-[2px] border-[rgba(204,0,0,1)] shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative" // Updated shadow
              >
                {/* Centered icon and text */}
                <div className="flex flex-col items-center justify-center h-full"> {/* Removed pt-4 */}
                  <CalendarMonthOutlinedIcon
                    style={{color: 'rgba(0,0,0,1)', width: '35px', height: '35px'}} // Updated size
                  />
                  {/* Adjusted text positioning */}
                  <span
                    className="text-[rgba(0,0,0,1)] font-semibold absolute bottom-0.5" // Use absolute positioning
                    style={{fontSize: '14pt'}} // Updated font size
                  >
                    Schedule
                  </span>
                </div>
              </button>

              {/* Tools Button */}
              <button
                onClick={navigateToToolsPage}
                className="w-[100px] h-[100px] bg-[rgba(255,255,255,1)] border-[2px] border-[rgba(204,0,0,1)] shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative" // Updated shadow
              >
                {/* Centered icon and text */}
                <div className="flex flex-col items-center justify-center h-full"> {/* Removed pt-4 */}
                  <ConstructionOutlinedIcon
                    style={{color: 'rgba(0,0,0,1)', width: '35px', height: '35px'}} // Updated size
                  />
                   {/* Adjusted text positioning */}
                  <span
                    className="text-[rgba(0,0,0,1)] font-semibold absolute bottom-0.5" // Use absolute positioning
                    style={{fontSize: '14pt'}} // Updated font size
                  >
                    Tools
                  </span>
                </div>
              </button>

              {/* OfficiaX AI Button */}
              <button
                onClick={navigateToOfficiaX_AIPage}
                className="w-[100px] h-[100px] bg-[rgba(255,255,255,1)] border-[2px] border-[rgba(204,0,0,1)] shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md hover:scale-105 transition-transform relative" // Updated shadow
              >
                {/* Centered icon and text */}
                <div className="flex flex-col items-center justify-center h-full"> {/* Removed pt-4 */}
                  <AutoAwesomeOutlinedIcon
                    style={{color: 'rgba(0,0,0,1)', width: '35px', height: '35px'}} // Updated size
                  />
                  {/* Adjusted text positioning */}
                  <span
                    className="text-[rgba(0,0,0,1)] font-semibold absolute bottom-0.5" // Use absolute positioning
                    style={{fontSize: '13.5pt'}} // Updated font size
                  >
                    OfficiaX AI
                  </span>
                </div>
              </button>
            </div>
          </div>
      </div>
      <NavbarHome />
    </div>
  );
}

