import React from 'react';
import { twMerge } from 'tailwind-merge';
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'primary' | 'neutral';
}
export const Badge = ({
  className,
  variant = 'neutral',
  children,
  ...props
}: BadgeProps) => {
  const variants = {
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    danger: 'bg-danger/10 text-danger border-danger/20',
    primary: 'bg-primary-50 text-primary border-primary-100',
    neutral: 'bg-gray-100 text-muted border-gray-200'
  };
  return (
    <span
      className={twMerge(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
      {...props}>
      
      {children}
    </span>);

};