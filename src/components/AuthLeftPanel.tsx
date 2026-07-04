import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  CalendarCheckIcon,
  DollarSignIcon,
  UserCheckIcon } from
'lucide-react';
const floatingAnimation = {
  y: ['-10px', '10px'],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut'
  }
};
const floatingAnimationDelayed = {
  y: ['10px', '-10px'],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
    delay: 1
  }
};
export function AuthLeftPanel() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between w-1/2 h-full bg-gradient-to-br from-white to-blue-50 overflow-hidden p-12 lg:p-20">
      {/* Background Elements */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] z-0" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] z-0" />
      

      {/* Content */}
      <div className="relative z-10">
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
            duration: 0.6
          }}
          className="flex items-center gap-3 mb-16">
          
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lift">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <span className="text-2xl font-bold text-heading tracking-tight">
            HR Nexus AI
          </span>
        </motion.div>

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
          className="max-w-md">
          
          <h1 className="text-4xl lg:text-[42px] font-bold text-heading leading-[1.1] mb-4">
            Welcome to <br />
            <span className="text-primary">HR Nexus AI</span>
          </h1>
          <p className="text-base text-paragraph leading-relaxed mb-8">
            Manage your workforce smarter with one secure platform built for HR
            Teams and Employees.
          </p>

          <div className="space-y-4">
            {[
            'Secure Authentication',
            'Role Based Access',
            'Employee Self Service'].
            map((feature, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.5,
                delay: 0.4 + i * 0.1
              }}
              className="flex items-center gap-3">
              
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-success/10 text-success">
                  <CheckCircle2Icon size={14} strokeWidth={3} />
                </div>
                <span className="text-heading font-medium">{feature}</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Floating Cards Illustration Area */}
      <div className="relative z-10 h-52 mt-8 w-full max-w-lg mx-auto">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-0 left-0 bg-white/80 backdrop-blur-md p-3 rounded-card shadow-soft border border-white/50 flex items-center gap-3 w-44">
          
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <UserCheckIcon size={16} />
          </div>
          <div>
            <p className="text-[10px] text-paragraph font-medium">Attendance</p>
            <p className="text-base font-bold text-heading">95%</p>
          </div>
        </motion.div>

        <motion.div
          animate={floatingAnimationDelayed}
          className="absolute top-8 right-0 bg-white/80 backdrop-blur-md p-3 rounded-card shadow-soft border border-white/50 flex items-center gap-3 w-48">
          
          <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
            <CalendarCheckIcon size={16} />
          </div>
          <div>
            <p className="text-[10px] text-paragraph font-medium">Leave Status</p>
            <p className="text-xs font-bold text-heading">Approved</p>
          </div>
        </motion.div>

        <motion.div
          animate={floatingAnimation}
          className="absolute bottom-0 left-8 bg-white/80 backdrop-blur-md p-3 rounded-card shadow-soft border border-white/50 flex items-center gap-3 w-52">
          
          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
            <DollarSignIcon size={16} />
          </div>
          <div>
            <p className="text-[10px] text-paragraph font-medium">Payroll</p>
            <p className="text-xs font-bold text-heading">Updated Today</p>
          </div>
        </motion.div>
      </div>
    </div>);

}