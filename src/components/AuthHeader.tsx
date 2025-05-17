

import React from 'react';
import Image from 'next/image'; // Import the next/image component
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useRouter } from 'next/navigation';

// Assuming your image is in src/assets/ and DefaultHeader.tsx is in src/components/
// Adjust path if your DefaultHeader.tsx is located elsewhere (e.g., src/components/layout/DefaultHeader.tsx)
import oxImage from '../app/assets/OX lett white175F.png';

const DefaultHeader: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <header
      className="fixed top-0 w-full h-[75px] bg-background border-b-[3px] border-[rgba(204,0,0,1)] shadow-[0_4px_10px_4px_rgba(187,187,187,.5)] z-10 flex items-center justify-between"
    >
      {/* Left section - Back Button */}
      <div className="flex items-center w-[60px] justify-start">
        <ArrowBackIosNewOutlinedIcon
          style={{ color: 'rgba(255,255,255,1)', paddingLeft: '15px', cursor: 'pointer', transform: 'scale(3.6)' }}
          onClick={handleBackClick}
        />
      </div>

      {/* Center section - Contains the Image */}
      <div className="flex items-center justify-center flex-grow">
        <Image
          src={oxImage}
          alt="OX Logo"
          height={50} // Target display height in pixels
          width={175} // Width that corresponds to the 50px height for this image's aspect ratio
          // Updated style to help maintain aspect ratio, as suggested by the Next.js warning.
          style={{
            height: '50px', // CSS: Enforce the display height
            width: 'auto',   // CSS: Allow width to adjust automatically to maintain aspect ratio
          }}
          priority
        />
      </div>

      {/* Right section - Menu Button */}
      <div className="flex items-center justify-end w-[60px]">
        <MenuOutlinedIcon style={{ color: 'rgba(255,255,255,1)', paddingRight: '15px', cursor: 'pointer', transform: 'scale(3.6)' }} />
      </div>
    </header>
  );
};

export { AuthHeader };
