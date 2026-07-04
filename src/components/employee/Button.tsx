import React, { useRef, forwardRef, createElement } from 'react';
import { twMerge } from 'tailwind-merge';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  withRipple?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  {
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    withRipple = true,
    children,
    onClick,
    ...props
  },
  ref) =>
  {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!withRipple || isLoading || props.disabled) return;
      const button = buttonRef.current;
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${x - radius}px`;
      circle.style.top = `${y - radius}px`;
      circle.classList.add('hn-ripple');
      const ripple = button.getElementsByClassName('hn-ripple')[0];
      if (ripple) {
        ripple.remove();
      }
      button.appendChild(circle);
      if (onClick) {
        onClick(e);
      }
    };
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-700 shadow-sm',
      secondary:
      'bg-white text-heading border border-line hover:bg-gray-50 shadow-sm',
      outline:
      'bg-transparent text-primary border border-primary hover:bg-primary-50',
      ghost: 'bg-transparent text-muted hover:text-heading hover:bg-gray-100',
      danger: 'bg-danger text-white hover:bg-red-600 shadow-sm',
      success: 'bg-success text-white hover:bg-green-600 shadow-sm'
    };
    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
      icon: 'h-10 w-10 flex items-center justify-center p-0'
    };
    return (
      <button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);else
          if (ref) ref.current = node;
        }}
        className={twMerge(
          'relative overflow-hidden inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        onClick={withRipple ? handleRipple : onClick}
        disabled={isLoading || props.disabled}
        {...props}>
        
        {isLoading &&
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          
            <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4">
          </circle>
            <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
          </svg>
        }
        {children}
      </button>);

  }
);
Button.displayName = 'Button';