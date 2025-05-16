// src/components/elfsight-widget.tsx
"use client";

import Script from 'next/script';
import React from 'react';

export default function ElfsightWidget() {
  return (
    <div className="w-full">
      <Script 
        src="https://static.elfsight.com/platform/platform.js" 
        strategy="lazyOnload" 
        onLoad={() => {
          // Optional: if Elfsight provides an API to re-initialize or refresh widgets, call it here.
          // Usually, data-elfsight-app-lazy handles this.
          if (typeof (window as any). Эльфи SightApps !== 'undefined' && typeof (window as any).ЭльфиSightApps.メージ === 'function') {
            (window as any).ЭльфиSightApps.メージ();
          } else if (typeof (window as any).ElfsightApps !== 'undefined' && typeof (window as any).ElfsightApps.メージ === 'function') {
            (window as any).ElfsightApps.メージ();
          }
        }}
      />
      <div 
        className="elfsight-app-d9f25516-1da3-45f6-a37d-72089e99e15e" 
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
