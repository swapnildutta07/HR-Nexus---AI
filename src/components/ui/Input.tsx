import React, { useState, forwardRef } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = 'text', className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? showPassword ? 'text' : 'password' : type;
    const hasValue = Boolean(props.value) || Boolean(props.defaultValue);
    return (
      <div className="relative w-full mb-5">
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            className={twMerge(
              'w-full h-14 px-4 pt-4 pb-1 bg-white border rounded-field text-heading text-base outline-none transition-all duration-200',
              error ?
              'border-danger focus:border-danger focus:shadow-[0_0_0_4px_rgba(239,68,68,0.12)]' :
              'border-border focus:border-primary focus:shadow-glow',
              className
            )}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props} />
          

          <motion.label
            initial={false}
            animate={{
              y: isFocused || hasValue ? -10 : 0,
              scale: isFocused || hasValue ? 0.85 : 1,
              color: error ?
              'var(--color-danger)' :
              isFocused ?
              'var(--color-primary)' :
              'var(--color-paragraph)'
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut'
            }}
            className="absolute left-4 top-4 origin-left pointer-events-none text-paragraph">
            
            {label}
          </motion.label>

          {isPassword &&
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-paragraph hover:text-heading transition-colors"
            tabIndex={-1}>
            
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                key={showPassword ? 'hide' : 'show'}
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8
                }}
                transition={{
                  duration: 0.15
                }}>
                
                  {showPassword ?
                <EyeOffIcon size={20} /> :

                <EyeIcon size={20} />
                }
                </motion.div>
              </AnimatePresence>
            </button>
          }
        </div>

        <AnimatePresence>
          {error &&
          <motion.p
            initial={{
              opacity: 0,
              y: -5
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -5
            }}
            className="absolute -bottom-5 left-1 text-xs text-danger">
            
              {error}
            </motion.p>
          }
        </AnimatePresence>
      </div>);

  }
);
Input.displayName = 'Input';