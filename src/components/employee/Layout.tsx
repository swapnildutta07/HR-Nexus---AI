import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { AIChatPanel } from './AIChatPanel';
import { Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../context/AppContext';
export const Layout = () => {
  const { isSidebarOpen, closeSidebar, openAI } = useApp();
  return (
    <div className="min-h-screen bg-canvas">
      {/* Sidebar — fixed on desktop, drawer on mobile/tablet */}
      <Sidebar />

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {isSidebarOpen &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={closeSidebar}
          className="fixed inset-0 bg-heading/30 backdrop-blur-sm z-30 lg:hidden"
          aria-hidden="true" />

        }
      </AnimatePresence>

      {/* Main column */}
      <div className="lg:ml-[260px] flex flex-col min-h-screen">
        <TopNavbar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      {/* Floating AI Button */}
      <motion.button
        onClick={openAI}
        aria-label="Open AI Assistant"
        initial={{
          scale: 0,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          delay: 0.4,
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
        whileHover={{
          scale: 1.08
        }}
        whileTap={{
          scale: 0.94
        }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 bg-primary text-white rounded-full shadow-lift flex items-center justify-center z-40">
        
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        <Bot size={26} className="relative" />
      </motion.button>

      {/* AI Chat Slide-over */}
      <AIChatPanel />
    </div>);

};