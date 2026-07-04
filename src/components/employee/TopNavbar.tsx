import React, { useState } from 'react';
import { Search, Bell, MessageSquare, ChevronDown, Menu } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from './Button';
import { Avatar } from './Avatar';
import { useApp } from '../../context/AppContext';
export const TopNavbar = () => {
  const { isCheckedIn, checkIn, checkOut, openSidebar } = useApp();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <header className="h-[72px] bg-white border-b border-line flex items-center gap-4 justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-20">
      {/* Left: hamburger + search */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={openSidebar}
          aria-label="Open menu"
          className="lg:hidden p-2 text-muted hover:text-heading hover:bg-gray-50 rounded-lg transition-colors shrink-0">
          
          <Menu size={22} />
        </button>

        <div className="hidden sm:block flex-1 max-w-md">
          <div
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${isFocused ? 'border-primary ring-2 ring-primary/20 bg-white' : 'border-line bg-gray-50 hover:bg-gray-100'}`}>
            
            <Search size={18} className="text-muted shrink-0" />
            <input
              type="text"
              placeholder="Search documents, policies..."
              className="bg-transparent border-none outline-none w-full text-sm placeholder:text-muted text-heading"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)} />
            
          </div>
        </div>
      </div>

      {/* Right: date, check in/out, actions, profile */}
      <div className="flex items-center gap-3 sm:gap-5 shrink-0">
        <div className="text-sm font-medium text-muted hidden xl:block">
          {format(new Date(), 'EEEE, dd MMM yyyy')}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            disabled={isCheckedIn}
            onClick={checkIn}>
            
            Check In
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-danger text-danger hover:bg-danger/10 disabled:border-line disabled:text-muted"
            disabled={!isCheckedIn}
            onClick={checkOut}>
            
            Check Out
          </Button>
        </div>

        <div className="w-px h-8 bg-line hidden sm:block" />

        <div className="hidden sm:flex items-center gap-1">
          <button
            aria-label="Messages"
            className="p-2 text-muted hover:text-heading hover:bg-gray-50 rounded-full transition-colors relative">
            
            <MessageSquare size={20} />
          </button>
          <button
            aria-label="Notifications"
            className="p-2 text-muted hover:text-heading hover:bg-gray-50 rounded-full transition-colors relative">
            
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white" />
          </button>
        </div>

        <button className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded-xl transition-colors">
          <Avatar initials="R" size="sm" />
          <ChevronDown size={16} className="text-muted hidden sm:block" />
        </button>
      </div>
    </header>);

};