import React from 'react';
import {
  Menu,
  Search,
  Bell,
  MessageSquare,
  Calendar,
  Download } from
'lucide-react';
export function Topbar({ toggleSidebar }: {toggleSidebar: () => void;}) {
  return (
    <header className="h-[72px] bg-card border-b border-border flex items-center justify-between px-6 shrink-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg text-subtext hover:bg-background hover:text-text transition-colors">
          
          <Menu size={20} />
        </button>

        <div className="relative max-w-md w-full hidden md:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-subtext"
            size={18} />
          
          <input
            type="text"
            placeholder="Search employees, reports, departments..."
            className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-xl text-sm font-medium text-text hover:bg-border/50 transition-colors">
          <Calendar size={16} className="text-subtext" />
          <span>Today, Oct 24</span>
        </button>

        <button className="p-2 rounded-full text-subtext hover:bg-background hover:text-text transition-colors relative">
          <MessageSquare size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-card"></span>
        </button>

        <button className="p-2 rounded-full text-subtext hover:bg-background hover:text-text transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-card animate-pulse"></span>
        </button>

        <div className="h-8 w-[1px] bg-border mx-1 hidden md:block"></div>

        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20 hover:shadow-md hover:-translate-y-0.5 transform duration-200">
          <Download size={16} />
          Generate Report
        </button>
      </div>
    </header>);

}