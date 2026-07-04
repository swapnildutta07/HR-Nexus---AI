import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  CalendarCheck,
  CalendarOff,
  Wallet,
  FileText,
  Bot,
  Settings,
  LogOut,
  X } from
'lucide-react';
import { Avatar } from './Avatar';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
const navItems = [
{
  icon: LayoutDashboard,
  label: 'Dashboard',
  path: '/employee'
},
{
  icon: User,
  label: 'My Profile',
  path: '/employee/profile'
},
{
  icon: CalendarCheck,
  label: 'Attendance',
  path: '/employee/attendance'
},
{
  icon: CalendarOff,
  label: 'Leave',
  path: '/employee/leave'
},
{
  icon: Wallet,
  label: 'Payroll',
  path: '/employee/payroll'
},
{
  icon: FileText,
  label: 'My Documents',
  path: '/employee/documents'
},
{
  icon: Bot,
  label: 'AI Assistant',
  path: '/employee/ai-assistant'
},
{
  icon: Settings,
  label: 'Settings',
  path: '/employee/settings'
}];

export const Sidebar = () => {
  const navigate = useNavigate();
  const { isSidebarOpen, closeSidebar } = useApp();
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-[260px] bg-white border-r border-line flex flex-col z-40 transition-transform duration-300 ease-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0 shadow-lift' : '-translate-x-full'}`}>
      
      {/* Logo */}
      <div className="h-[72px] flex items-center justify-between px-6 border-b border-line shrink-0">
        <div className="flex items-center gap-3 text-heading font-bold text-lg tracking-tight">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">
            <Bot size={20} />
          </div>
          HR Nexus AI
        </div>
        <button
          onClick={closeSidebar}
          aria-label="Close menu"
          className="lg:hidden p-1.5 text-muted hover:bg-gray-100 rounded-lg">
          
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {navItems.map((item) =>
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/employee'}
          onClick={closeSidebar}
          className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group relative ${isActive ? 'text-primary bg-primary-50' : 'text-muted hover:text-heading hover:bg-gray-50'}`
          }>
          
            {({ isActive }) =>
          <>
                {isActive &&
            <motion.div
              layoutId="sidebar-active"
              className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30
              }} />

            }
                <item.icon
              size={20}
              className={
              isActive ?
              'text-primary' :
              'text-muted group-hover:text-heading'
              } />
            
                {item.label}
              </>
          }
          </NavLink>
        )}
      </nav>

      {/* Bottom Profile */}
      <div className="p-4 border-t border-line shrink-0">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-line">
          <Avatar initials="R" size="md" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-heading truncate">
              Rahul Sharma
            </p>
            <p className="text-xs text-muted truncate">Employee</p>
          </div>
          <button
            onClick={() => navigate('/')}
            aria-label="Logout"
            className="text-muted hover:text-danger transition-colors p-1 rounded-md hover:bg-danger/10">
            
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>);

};