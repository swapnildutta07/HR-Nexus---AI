import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, FileText, CreditCard } from 'lucide-react';
const features = [
{
  icon: <Users className="w-6 h-6 text-blue-600" />,
  bg: 'bg-blue-50',
  title: 'Employee Management',
  description:
  'Maintain employee records, documents, roles and department details easily.'
},
{
  icon: <Calendar className="w-6 h-6 text-teal-600" />,
  bg: 'bg-teal-50',
  title: 'Attendance Tracking',
  description:
  'Real-time check-in/out, daily & weekly attendance with status and reports.'
},
{
  icon: <FileText className="w-6 h-6 text-orange-600" />,
  bg: 'bg-orange-50',
  title: 'Leave Management',
  description:
  'Apply for different leave types, track status and get quick approvals.'
},
{
  icon: <CreditCard className="w-6 h-6 text-purple-600" />,
  bg: 'bg-purple-50',
  title: 'Payroll Management',
  description:
  'View salary structure, payslips and payroll history in one place.'
}];

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-[40px] font-bold text-slate-900 mb-4">
            Powerful Features for Modern Workplaces
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) =>
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
            whileHover={{
              y: -5
            }}
            className="bg-white p-8 rounded-[20px] border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300 group">
            
              <div
              className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
              
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}