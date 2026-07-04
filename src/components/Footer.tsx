import React from 'react';
import {
  Hexagon,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Hexagon className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                HR Nexus <span className="text-teal-500">AI</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
              Smart HR Solutions for Modern Workplaces. Empowering HR teams and
              employees with one unified platform.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - For HR */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">For HR Teams</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  Employee Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  Attendance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  Leave Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  Payroll
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                  
                  Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - For Employees */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">For Employees</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-teal-600 text-sm transition-colors">
                  
                  My Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-teal-600 text-sm transition-colors">
                  
                  My Attendance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-teal-600 text-sm transition-colors">
                  
                  Apply Leave
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-teal-600 text-sm transition-colors">
                  
                  My Payroll
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-teal-600 text-sm transition-colors">
                  
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 HR Nexus AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-sm">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>);

}