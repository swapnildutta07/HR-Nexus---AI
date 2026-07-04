import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, BarChart3, ShieldCheck } from 'lucide-react';
const stats = [
{
  icon: <Users className="w-6 h-6 text-blue-600" />,
  value: '250+',
  label: 'Active Employees'
},
{
  icon: <Building2 className="w-6 h-6 text-teal-600" />,
  value: '15+',
  label: 'Departments'
},
{
  icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
  value: '98%',
  label: 'Attendance Accuracy'
},
{
  icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
  value: '24/7',
  label: 'Secure Access'
}];

export function Statistics() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="bg-[#F8FAFC] border border-gray-100 rounded-[24px] p-8 sm:p-12 shadow-sm">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            {stats.map((stat, index) =>
            <div
              key={index}
              className={`flex items-center gap-4 ${index !== 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''}`}>
              
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}