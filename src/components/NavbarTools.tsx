
'use client';

import React from 'react';
import { Users, CalendarDays, Home, Construction, Sparkles } from 'lucide-react'; // Replaced MUI icons
import {useRouter} from 'next/navigation';

interface NavbarIconProps {
  name: string;
  text: string;
  onClick: () => void;
  isActive?: boolean;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({name, text, onClick, isActive}) => {
  const iconColor = isActive ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)';
  const textColor = isActive ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)'; // Use textColor for text
  const IconSize = 24; // Standard size for Lucide icons

  let iconComponent;
  switch (name) {
    case 'Users': // Changed from 'Baseball'
      iconComponent = <Users style={{ color: iconColor }} size={IconSize} />;
      break;
    case 'Calendar':
      iconComponent = <CalendarDays style={{ color: iconColor }} size={IconSize} />;
      break;
    case 'Home':
      iconComponent = <Home style={{ color: iconColor }} size={IconSize} />;
      break;
    case 'Tools':
      iconComponent = <Construction style={{ color: iconColor }} size={IconSize} />;
      break;
    case 'Auto awesome':
      iconComponent = <Sparkles style={{ color: iconColor }} size={IconSize} />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer" onClick={onClick}>
      {iconComponent}
      <span className="text-xs" style={{color: textColor}}>{text}</span> {/* Use textColor */}
    </div>
  );
};

const NavbarTools: React.FC = () => {
  const router = useRouter();
  const navigateToLeaguesPage = () => router.push('/leagues');
  const navigateToSchedulePage = () => router.push('/schedule');
  const navigateToHomePage = () => router.push('/home');
  const navigateToToolsPage = () => router.push('/toolbox'); // Corrected path
  const navigateToOfficiaX_AIPage = () => router.push('/ai-assistant'); // Corrected path

  return (
    <nav
      className="fixed bottom-0 w-full h-[75px] bg-[rgba(204,0,0,1)] shadow-[0_-4px_10px_4px_rgba(187,187,187,0)] z-10 flex items-center justify-between px-4"
    >
      <div style={{paddingLeft: '5px'}}>
        <NavbarIcon name="Users" text="Leagues" onClick={navigateToLeaguesPage} isActive={false} />
      </div>
      <NavbarIcon name="Calendar" text="Schedule" onClick={navigateToSchedulePage} isActive={false} />
      <NavbarIcon name="Home" text="Home" onClick={navigateToHomePage} isActive={false} />
      <NavbarIcon name="Tools" text="Tools" onClick={navigateToToolsPage} isActive={true} />
      <div style={{paddingRight: '5px'}}>
        <NavbarIcon name="Auto awesome" text="OfficiaX AI" onClick={navigateToOfficiaX_AIPage} isActive={false} />
      </div>
    </nav>
  );
};

export {NavbarTools};
