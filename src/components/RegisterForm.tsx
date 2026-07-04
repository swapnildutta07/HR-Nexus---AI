import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UsersIcon, ShieldCheckIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Checkbox } from './ui/Checkbox';
interface RegisterFormProps {
  onSwitchToLogin: () => void;
}
type Role = 'employee' | 'admin' | null;
export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    employeeId: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: null as Role,
    agreed: false
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>>(
    {});
  const validatePassword = (pass: string) => {
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    return pass.length >= 8 && hasUpper && hasLower && hasNumber && hasSpecial;
  };
  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.employeeId) newErrors.employeeId = 'Employee ID is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
      'Must be 8+ chars, with upper, lower, number & special char';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }
    if (!formData.role) newErrors.role = 'Please select a role';
    if (!formData.agreed) newErrors.agreed = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Navigate based on selected role
    if (formData.role === 'admin') {
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
          Create Your Account
        </h2>
        <p className="text-paragraph text-sm sm:text-base">
          Join HR Nexus AI and start managing your work securely.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Role Selection */}
        <div className="space-y-2 mb-6">
          <label className="text-sm font-medium text-heading">
            Select Role
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => {
                setFormData({
                  ...formData,
                  role: 'employee'
                });
                setErrors({
                  ...errors,
                  role: undefined
                });
              }}
              className={twMerge(
                'flex flex-col items-center justify-center p-3 rounded-card border-2 transition-all duration-300',
                formData.role === 'employee' ?
                'border-primary bg-primary/5 text-primary shadow-glow' :
                'border-border bg-white text-paragraph hover:border-primary/50 hover:bg-canvas'
              )}>
              
              <UsersIcon className="mb-2" size={24} />
              <span className="font-medium">Employee</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  ...formData,
                  role: 'admin'
                });
                setErrors({
                  ...errors,
                  role: undefined
                });
              }}
              className={twMerge(
                'flex flex-col items-center justify-center p-3 rounded-card border-2 transition-all duration-300',
                formData.role === 'admin' ?
                'border-primary bg-primary/5 text-primary shadow-glow' :
                'border-border bg-white text-paragraph hover:border-primary/50 hover:bg-canvas'
              )}>
              
              <ShieldCheckIcon className="mb-2" size={24} />
              <span className="font-medium">HR / Admin</span>
            </button>
          </div>
          {errors.role &&
          <p className="text-xs text-danger mt-1">{errors.role}</p>
          }
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Employee ID"
            value={formData.employeeId}
            onChange={(e) =>
            setFormData({
              ...formData,
              employeeId: e.target.value
            })
            }
            error={errors.employeeId} />
          
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
            error={errors.email} />
          
        </div>

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
          error={errors.password} />
        

        <Input
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
          setFormData({
            ...formData,
            confirmPassword: e.target.value
          })
          }
          error={errors.confirmPassword} />
        

        <div className="pt-2">
          <Checkbox
            label={
            <span>
                I agree to the{' '}
                <a href="#" className="text-primary hover:underline">
                  Terms
                </a>{' '}
                &{' '}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </span>
            }
            checked={formData.agreed}
            onChange={(e) => {
              setFormData({
                ...formData,
                agreed: e.target.checked
              });
              setErrors({
                ...errors,
                agreed: undefined
              });
            }}
            error={errors.agreed} />
          
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            fullWidth
            isLoading={isLoading}
            className="bg-success hover:bg-green-600 focus:ring-success shadow-[0_12px_28px_-8px_rgba(34,197,94,0.35)]">
            
            Create Account
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-paragraph">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="font-medium text-primary hover:text-primary-hover transition-colors">
            
            Login
          </button>
        </p>
      </div>
    </motion.div>);

}