import React from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
export function FloatingAIAssistant() {
  return (
    <motion.button
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        delay: 1,
        type: 'spring',
        stiffness: 200,
        damping: 20
      }}
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}
      className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lift z-50 group">
      
      <Bot size={24} />

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-max px-4 py-2 bg-text text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-soft">
        Ask anything about HR data
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-text rotate-45"></div>
      </div>
    </motion.button>);

}