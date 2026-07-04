import React, { forwardRef } from 'react';
import { CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
interface CheckboxProps extends
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  error?: string;
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, checked, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label
          className={twMerge(
            'flex items-start gap-3 cursor-pointer group',
            className
          )}>
          
          <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 shrink-0">
            <input
              type="checkbox"
              ref={ref}
              checked={checked}
              className="peer sr-only"
              {...props} />
            
            <div
              className={twMerge(
                'absolute inset-0 border rounded-[6px] transition-colors duration-200',
                error ?
                'border-danger' :
                'border-border group-hover:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2',
                checked ? 'bg-primary border-primary' : 'bg-white'
              )} />
            
            <motion.div
              initial={false}
              animate={{
                scale: checked ? 1 : 0,
                opacity: checked ? 1 : 0
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25
              }}
              className="absolute text-white pointer-events-none">
              
              <CheckIcon size={14} strokeWidth={3} />
            </motion.div>
          </div>
          <span className="text-sm text-paragraph select-none leading-relaxed">
            {label}
          </span>
        </label>
        {error && <span className="text-xs text-danger ml-8">{error}</span>}
      </div>);

  }
);
Checkbox.displayName = 'Checkbox';