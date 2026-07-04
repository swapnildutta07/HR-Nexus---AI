import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, Calendar, CheckSquare, Bell } from 'lucide-react';
const steps = [
{
  icon: <User className="w-5 h-5 text-blue-600" />,
  bg: 'bg-blue-50',
  title: '1. Sign Up / Login',
  desc: 'Create your account or login securely.'
},
{
  icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
  bg: 'bg-teal-50',
  title: '2. Manage / Access',
  desc: 'HR manages employees & data, employees access their portal.'
},
{
  icon: <Calendar className="w-5 h-5 text-orange-600" />,
  bg: 'bg-orange-50',
  title: '3. Track & Apply',
  desc: 'Track attendance, apply for leave & manage activities.'
},
{
  icon: <CheckSquare className="w-5 h-5 text-purple-600" />,
  bg: 'bg-purple-50',
  title: '4. Approve & Process',
  desc: 'HR approves requests and processes payroll effortlessly.'
},
{
  icon: <Bell className="w-5 h-5 text-green-600" />,
  bg: 'bg-green-50',
  title: '5. Stay Informed',
  desc: 'Everyone stays updated with real-time notifications.'
}];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-[40px] font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gray-100 z-0"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-6 w-full lg:w-1/5 group">
              
                <div
                className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center shrink-0 border-4 border-white shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                
                  {step.icon}
                </div>

                <div className="text-left lg:text-center pt-2 lg:pt-0">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile Connecting Line */}
                {index !== steps.length - 1 &&
              <div className="lg:hidden absolute left-8 top-16 bottom-0 w-[2px] bg-gray-100 -z-10 h-full translate-y-4"></div>
              }
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}