import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
interface AuthRightPanelProps {
  view: 'login' | 'register';
  setView: (view: 'login' | 'register') => void;
}
export function AuthRightPanel({ view, setView }: AuthRightPanelProps) {
  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-start p-6 sm:p-12 lg:p-16 relative overflow-y-auto bg-slate-50 lg:bg-transparent">
      {/* Mobile Logo (Hidden on Desktop) */}
      <div className="absolute top-8 left-8 flex lg:hidden items-center gap-3 z-20">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lift">
          <div className="w-3 h-3 bg-white rounded-sm" />
        </div>
        <span className="text-xl font-bold text-heading tracking-tight">
          HR Nexus AI
        </span>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          delay: 0.2
        }}
        className="w-full max-w-[520px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100/80 p-6 sm:p-10 relative z-10 my-auto">
        
        <AnimatePresence mode="wait">
          {view === 'login' ?
          <LoginForm
            key="login"
            onSwitchToRegister={() => setView('register')} /> :


          <RegisterForm
            key="register"
            onSwitchToLogin={() => setView('login')} />

          }
        </AnimatePresence>
      </motion.div>
    </div>);

}