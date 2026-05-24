import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
export default function Logo({
  className,
  disableLink = false
}) {
  const imgContent = <img src="https://horizons-cdn.hostinger.com/5e313b32-1ec7-4ffa-89c7-dc508bdc300c/chatgpt-image-may-7-2026-09_19_29-am-eXi04.png" alt="NUSAEON - Sustainable Packaging Solutions" className={cn("h-10 w-auto object-contain md:h-14", className)} />;
  if (disableLink) {
    return <div className="flex items-center">{imgContent}</div>;
  }
  return <Link to="/" className="flex items-center transition-transform duration-200 hover:scale-[1.02] active:scale-95">
      {imgContent}
    </Link>;
}