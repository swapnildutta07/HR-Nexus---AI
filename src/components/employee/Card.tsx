import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'bg-white rounded-2xl border border-line shadow-soft transition-all duration-300',
          hoverable && 'hover:shadow-lift hover:-translate-y-1',
          className
        )}
        {...props}>
        
        {children}
      </div>);

  }
);
Card.displayName = 'Card';
export const CardHeader = ({
  className,
  children
}: HTMLAttributes<HTMLDivElement>) =>
<div className={twMerge('px-6 py-5 border-b border-line', className)}>
    {children}
  </div>;

export const CardTitle = ({
  className,
  children
}: HTMLAttributes<HTMLHeadingElement>) =>
<h3 className={twMerge('text-lg font-semibold text-heading', className)}>
    {children}
  </h3>;

export const CardContent = ({
  className,
  children
}: HTMLAttributes<HTMLDivElement>) =>
<div className={twMerge('p-6', className)}>{children}</div>;