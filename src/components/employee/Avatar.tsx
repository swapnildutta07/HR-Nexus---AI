import React from 'react';
import { twMerge } from 'tailwind-merge';
interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}
export const Avatar = ({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  className
}: AvatarProps) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  };
  return (
    <div
      className={twMerge(
        'relative inline-flex items-center justify-center rounded-full overflow-hidden bg-primary-50 text-primary font-medium border border-primary-100',
        sizes[size],
        className
      )}>
      
      {src ?
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          ;(e.target as HTMLImageElement).style.display = 'none';
        }} /> :


      <span>{initials}</span>
      }
    </div>);

};