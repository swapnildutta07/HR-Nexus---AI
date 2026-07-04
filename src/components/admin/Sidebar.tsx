import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CalendarOff,
  Banknote,
  Building2,
  FileBarChart,
  Bot,
  Settings,
  LogOut } from
'lucide-react';
const navItems = [
{
  name: 'Dashboard',
  path: '/admin/dashboard',
  icon: LayoutDashboard
},
{
  name: 'Employees',
  path: '/admin/employees',
  icon: Users
},
{
  name: 'Attendance',
  path: '/admin/attendance',
  icon: CalendarCheck
},
{
  name: 'Leave Approval',
  path: '/admin/leave',
  icon: CalendarOff
},
{
  name: 'Payroll',
  path: '/admin/payroll',
  icon: Banknote
},
{
  name: 'Departments',
  path: '/admin/departments',
  icon: Building2
},
{
  name: 'Reports',
  path: '/admin/reports',
  icon: FileBarChart
},
{
  name: 'AI Assistant',
  path: '#',
  icon: Bot,
  isAction: true
},
{
  name: 'Settings',
  path: '/admin/settings',
  icon: Settings
}];

export function Sidebar({ isOpen }: {isOpen: boolean;}) {
  const navigate = useNavigate();
  return (
    <motion.aside
      initial={false}
      animate={{
        width: isOpen ? 260 : 0,
        opacity: isOpen ? 1 : 0
      }}
      className="h-full bg-card border-r border-border flex flex-col shrink-0 overflow-hidden">
      
      <div className="h-[72px] flex items-center px-6 border-b border-border shrink-0">
        <div className="flex items-center gap-3 text-primary font-bold text-xl tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <Building2 size={20} />
          </div>
          HR Nexus AI
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
        {navItems.map((item) =>
        item.isAction ?
        <button
          key={item.name}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-subtext hover:bg-background hover:text-text transition-colors w-full text-left font-medium">
          
              <item.icon size={20} />
              {item.name}
            </button> :

        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${isActive ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-subtext hover:bg-background hover:text-text'}`
          }>
          
              <item.icon size={20} />
              {item.name}
            </NavLink>

        )}
      </div>

      <div className="p-4 border-t border-border shrink-0">
        <div className="bg-background rounded-card p-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="Admin"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-text truncate">
                Sarah Jenkins
              </p>
              <p className="text-xs text-subtext truncate">Super Admin</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-danger hover:bg-danger/10 transition-colors text-sm font-medium"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </motion.aside>);

}