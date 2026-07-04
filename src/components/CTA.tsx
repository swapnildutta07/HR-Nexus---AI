import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Users, Shield } from 'lucide-react';
export function CTA() {
  return (
    <section className="py-24 bg-white">
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
          className="bg-blue-600 rounded-[32px] overflow-hidden shadow-xl relative flex flex-col md:flex-row items-center">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </div>

          {/* Left Illustration Area */}
          <div className="w-full md:w-2/5 p-12 relative z-10 flex justify-center items-center hidden md:flex">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-white/20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center -rotate-6 transform hover:rotate-0 transition-transform">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="w-16 h-16 bg-teal-400 rounded-2xl shadow-lg flex items-center justify-center rotate-12 transform hover:rotate-0 transition-transform translate-y-4">
                    <CalendarDays className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-orange-400 rounded-2xl shadow-lg flex items-center justify-center rotate-6 transform hover:rotate-0 transition-transform -translate-y-2">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center -rotate-12 transform hover:rotate-0 transition-transform translate-y-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-3/5 p-12 sm:p-16 relative z-10 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white mb-6 leading-tight">
              Ready to Simplify Your HR Operations?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto md:mx-0">
              Join HR Nexus AI and experience the future of workforce
              management. Built for HR teams, loved by employees.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-[14px] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1 text-base flex items-center justify-center gap-2">
                Get Started Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}