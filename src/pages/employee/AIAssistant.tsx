import React, { Children } from 'react';
import { Card, CardContent } from '../../components/employee/Card';
import { Bot, Send, User } from 'lucide-react';
import { motion } from 'framer-motion';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  }
};
export const AIAssistant = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto h-[calc(100vh-140px)] flex flex-col">
      
      <motion.div variants={itemVariants} className="mb-6">
        <h1 className="text-2xl font-bold text-heading">AI Assistant</h1>
        <p className="text-muted mt-1">
          Your personal HR assistant, available 24/7.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex-1 min-h-0">
        <Card className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-canvas/30">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                <Bot size={20} />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-line shadow-sm text-sm text-heading max-w-[80%]">
                Hi Rahul! I'm your HR AI Assistant. How can I help you today?
                You can ask me about your leave balance, payroll, or company
                policies.
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-muted shrink-0">
                <User size={20} />
              </div>
              <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[80%]">
                What is my current leave balance?
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                <Bot size={20} />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-line shadow-sm text-sm text-heading max-w-[80%]">
                You currently have <strong>12 days</strong> of total leave
                balance available. This includes 4 Casual Leaves, 2 Sick Leaves,
                and 6 Earned Leaves. Would you like to apply for leave?
              </div>
            </div>
          </div>

          <div className="p-4 bg-white border-t border-line rounded-b-2xl">
            <div className="flex items-center gap-2 bg-gray-50 border border-line rounded-xl p-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-sm" />
              
              <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>);

};