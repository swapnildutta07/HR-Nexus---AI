import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Checkbox } from './ui/Checkbox';
interface LoginFormProps {
  onSwitchToRegister: () => void;
}
export function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    form?: string;
  }>({});
  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setErrors({});
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Simulate role detection based on email domain or hardcoded logic for demo
    // If email contains 'admin', route to admin, else employee
    const isAdmin = formData.email.toLowerCase().includes('admin');
    if (formData.password === 'wrong') {
      setErrors({
        form: 'Invalid email or password'
      });
      setIsLoading(false);
      return;
    }
    // Success - navigate to appropriate dashboard
    if (isAdmin) {
      navigate('/admin');
    } else {
      navigate('/employee');
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      exit={{
        opacity: 0,
        x: -20
      }}
      transition={{
        duration: 0.4,
        ease: 'easeOut'
      }}
      className="w-full max-w-md mx-auto">
      
      <div className="mb-5">
        <h2 className="text-2xl sm:text-[34px] font-bold text-heading leading-tight mb-1.5">
          Welcome Back
        </h2>
        <p className="text-paragraph text-sm sm:text-base">
          Login to continue managing your HR operations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value
          })
          }
          error={errors.email}
          autoComplete="email" />
        

        <div className="space-y-1">
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value
            })
            }
            error={errors.password}
            autoComplete="current-password" />
          
          <div className="flex items-center justify-between px-1">
            <Checkbox
              label="Remember Me"
              checked={formData.remember}
              onChange={(e) =>
              setFormData({
                ...formData,
                remember: e.target.checked
              })
              } />
            
            <button
              type="button"
              className="text-sm font-medium text-primary hover:text-primary-hover transition-colors">
              
              Forgot Password?
            </button>
          </div>
        </div>

        {errors.form &&
        <motion.div
          initial={{
            opacity: 0,
            y: -10
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: [-5, 5, -5, 5, 0]
          }}
          transition={{
            duration: 0.4
          }}
          className="p-3 rounded-lg bg-danger/10 text-danger text-sm text-center">
          
            {errors.form}
          </motion.div>
        }

        <div className="pt-4">
          <Button type="submit" fullWidth isLoading={isLoading}>
            Login
          </Button>
        </div>
      </form>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-px bg-border flex-1" />
        <span className="text-sm text-paragraph font-medium">OR</span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-paragraph">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToRegister}
            className="font-medium text-primary hover:text-primary-hover transition-colors">
            
            Create Account
          </button>
        </p>
      </div>
    </motion.div>);

}