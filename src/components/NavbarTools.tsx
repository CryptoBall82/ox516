
'use client';

import React from 'react';
import { Users, CalendarDays, Home, Construction, Sparkles } from 'lucide-react'; // Replaced MUI icons and Baseball with Users
import {useRouter} from 'next/navigation';

interface NavbarIconProps {
  name: string;
  text: string;
  onClick: () => void;
  isActive?: boolean;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({name, text, onClick, isActive}) => {
  const iconClasses = isActive ? 'text-black' : 'text-primary-foreground';
  const textClasses = isActive ? 'text-black' : 'text-primary-foreground';

  let iconComponent;
  switch (name) {
    case 'Users': // Changed from 'Baseball'
      iconComponent = <Users className={iconClasses} size={24} />; // Changed from Baseball
      break;
    case 'Calendar':
      iconComponent = <CalendarDays className={iconClasses} size={24} />;
      break;
    case 'Home':
      iconComponent = <Home className={iconClasses} size={24} />;
      break;
    case 'Tools':
      iconComponent = <Construction className={iconClasses} size={24} />;
      break;
    case 'Auto awesome':
      iconComponent = <Sparkles className={iconClasses} size={24} />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer" onClick={onClick}>
      {iconComponent}
      <span className={`text-xs ${textClasses}`}>{text}</span>
    </div>
  );
};

const NavbarTools: React.FC = () => {
  const router = useRouter();
  const navigateToLeaguesPage = () => router.push('/leagues');
  const navigateToSchedulePage = () => router.push('/schedule');
  const navigateToHomePage = () => router.push('/home');
  const navigateToToolsPage = () => router.push('/tools');
  const navigateToOfficiaX_AIPage = () => router.push('/a-i');

  return (
    <nav
      className="fixed bottom-0 w-full h-[75px] bg-primary shadow-[0_-4px_10px_4px_rgba(187,187,187,.5)] z-10 flex items-center justify-between px-4"
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
