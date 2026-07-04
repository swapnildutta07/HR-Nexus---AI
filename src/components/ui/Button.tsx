import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2Icon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  {
    children,
    isLoading,
    variant = 'primary',
    fullWidth,
    className,
    disabled,
    ...props
  },
  ref) =>
  {
    const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-field transition-all duration-200 overflow-hidden outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
      primary:
      'bg-primary text-white hover:bg-primary-hover hover:shadow-lift focus:ring-primary',
      secondary:
      'bg-secondary text-white hover:bg-secondary-hover hover:shadow-lift focus:ring-secondary',
      outline:
      'border-2 border-border text-heading hover:border-primary hover:text-primary focus:ring-primary',
      ghost:
      'text-paragraph hover:text-heading hover:bg-canvas focus:ring-border'
    };
    const sizes = 'h-14 px-8 text-base';
    const width = fullWidth ? 'w-full' : '';
    const isDisabled = disabled || isLoading;
    return (
      <motion.button
        ref={ref}
        whileHover={
        !isDisabled ?
        {
          scale: 1.01
        } :
        {}
        }
        whileTap={
        !isDisabled ?
        {
          scale: 0.98
        } :
        {}
        }
        className={twMerge(
          baseStyles,
          variants[variant],
          sizes,
          width,
          isDisabled &&
          'opacity-70 cursor-not-allowed hover:shadow-none hover:scale-100',
          className
        )}
        disabled={isDisabled}
        {...props}>
        
        <span
          className={twMerge(
            'flex items-center justify-center gap-2',
            isLoading && 'opacity-0'
          )}>
          
          {children}
        </span>

        {isLoading &&
        <div className="absolute inset-0 flex items-center justify-center">
            <Loader2Icon className="animate-spin" size={20} />
          </div>
        }
      </motion.button>);

  }
);
Button.displayName = 'Button';