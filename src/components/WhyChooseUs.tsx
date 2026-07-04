import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, PieChart, BarChart3 } from 'lucide-react';
export function WhoIsItFor() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-[40px] font-bold text-slate-900 mb-4">
            Who Is It For?
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* HR Teams Card */}
          <motion.div
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
              duration: 0.5
            }}
            className="bg-gradient-to-br from-white to-blue-50/30 rounded-[24px] p-8 sm:p-10 border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=bfdbfe"
                  alt="HR Admin"
                  className="w-full h-full object-cover" />
                
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">
                  For HR Teams / Admins
                </h3>
              </div>
            </div>

            <p className="text-slate-500 mb-8 relative z-10">
              Manage your entire workforce, streamline operations and make
              data-driven decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 relative z-10">
              <ul className="space-y-4 flex-1">
                {[
                'Manage employee profiles & documents',
                'Track attendance & working hours',
                'Approve / Reject leave requests',
                'Manage payroll & salary structures',
                'View reports & insights'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">
                      {item}
                    </span>
                  </li>
                )}
              </ul>

              {/* Mini Illustration */}
              <div className="w-full sm:w-48 bg-slate-50 rounded-xl border border-slate-200 p-4 shadow-inner flex flex-col gap-3">
                <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <PieChart className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex-1 space-y-1 py-1">
                    <div className="h-1.5 w-full bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-2/3 bg-slate-200 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div className="flex-1 space-y-1 py-1">
                    <div className="h-1.5 w-full bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-4/5 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Employees Card */}
          <motion.div
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
              delay: 0.2
            }}
            className="bg-gradient-to-br from-white to-teal-50/30 rounded-[24px] p-8 sm:p-10 border border-teal-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(20,184,166,0.08)] hover:border-teal-300 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mia&backgroundColor=ccfbf1"
                  alt="Employee"
                  className="w-full h-full object-cover" />
                
              </div>
              <div>
                <h3 className="text-2xl font-bold text-teal-600">
                  For Employees
                </h3>
              </div>
            </div>

            <p className="text-slate-500 mb-8 relative z-10">
              Access everything you need, manage your work life and stay
              informed.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 relative z-10">
              <ul className="space-y-4 flex-1">
                {[
                'View & update personal profile',
                'Check in / Check out with ease',
                'Apply for leave & track status',
                'View attendance history',
                'Access salary & payslips'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">
                      {item}
                    </span>
                  </li>
                )}
              </ul>

              {/* Mini Illustration */}
              <div className="w-full sm:w-48 bg-slate-50 rounded-xl border border-slate-200 p-4 shadow-inner flex flex-col items-center justify-center gap-4">
                <p className="text-[10px] font-bold text-slate-400 w-full text-left">
                  My Dashboard
                </p>
                <div className="relative w-20 h-20 rounded-full border-4 border-slate-200 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="36"
                      cy="36"
                      r="36"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="8"
                      strokeDasharray="226"
                      strokeDashoffset="11"
                      className="translate-x-[2px] translate-y-[2px]" />
                    
                  </svg>
                  <div className="text-center">
                    <p className="text-[8px] text-slate-400">Attendance</p>
                    <p className="text-sm font-bold text-slate-900">95%</p>
                  </div>
                </div>
                <div className="w-full bg-white p-2 rounded border border-slate-100 shadow-sm">
                  <p className="text-[8px] text-slate-400">Leaves</p>
                  <p className="text-xs font-bold text-slate-700">2 Pending</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}