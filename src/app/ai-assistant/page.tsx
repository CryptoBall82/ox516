'use client';

import React from 'react';
import {DefaultHeader} from '@/components/DefaultHeader';
import {NavbarAI} from '@/components/NavbarAI';
// RectangleContainer removed

export default function AI() {
  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[450px]">
      <DefaultHeader />
      {/* Add padding top and bottom to account for fixed header/navbar */}
      {/* Increased pt from 75px to 85px */}
      <div className="flex-grow relative w-full pt-[90px] pb-[90px] pl-[10px] pr-[10px]">
        {/* Removed RectangleContainer and intermediate div */}
        <iframe
          src="https://udify.app/chatbot/yMu38WVkDhy3hynm"
          style={{ width: '100%', height: '100%' }} // iframe fills the padded container
          frameBorder="0"
          allow="microphone"
        />
      </div>
      <NavbarAI />
    </div>
  );
}
