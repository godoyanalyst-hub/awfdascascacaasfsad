import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function BrandLogo({ className = '', iconOnly = false }: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 
        This is a robust rendering system:
        First, it tries to load the physical .jfif file the user uploaded.
        If there is any error, or while it loads, it displays a pristine vector SVG 
        reproducing the soundwave / communications bars from the logo.
      */}
      {!imageError ? (
        <img
          src="/mejoracomunicaciones_logo.jfif"
          alt="Mejora Comunicaciones"
          className="h-10 w-auto object-contain cursor-pointer transition-transform hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex items-center gap-3">
          {/* SVG Vector recreation of the logo's 5 rounded communication bars */}
          <svg
            className="w-10 h-10 text-brand-teal"
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bar 1: Leftmost short bar */}
            <rect x="15" y="40" width="8" height="20" rx="4" />
            {/* Bar 2: Medium-left bar */}
            <rect x="31" y="22" width="8" height="56" rx="4" />
            {/* Bar 3: Center tall bar */}
            <rect x="47" y="10" width="8" height="80" rx="4" />
            {/* Bar 4: Medium-right bar */}
            <rect x="63" y="22" width="8" height="56" rx="4" />
            {/* Bar 5: Rightmost short bar */}
            <rect x="79" y="40" width="8" height="20" rx="4" />
          </svg>

          {!iconOnly && (
            <div className="flex flex-col select-none leading-none">
              <span className="font-heading font-extrabold tracking-tight text-xl text-brand-teal">
                MEJORA
              </span>
              <span className="font-sans font-medium text-[8.5px] tracking-[0.25em] text-brand-slate-muted mt-0.5">
                COMUNICACIONES
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
