import React, { useEffect, useState, useRef } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../context/AppContext';
interface Message {
  id: number;
  role: 'assistant' | 'user';
  text: string;
}
const seed: Message[] = [
{
  id: 1,
  role: 'assistant',
  text: "Hi Rahul! I'm your HR AI Assistant. Ask me about your leave balance, payroll, or company policies."
}];

const canned =
'You currently have 12 days of leave available — 4 Casual, 2 Sick, and 6 Earned. Would you like me to help you apply for leave?';
export const AIChatPanel = () => {
  const { isAIOpen, closeAI } = useApp();
  const [messages, setMessages] = useState<Message[]>(seed);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages, isAIOpen]);
  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [
    ...m,
    {
      id: Date.now(),
      role: 'user',
      text
    }]
    );
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
      ...m,
      {
        id: Date.now() + 1,
        role: 'assistant',
        text: canned
      }]
      );
    }, 600);
  };
  return (
    <AnimatePresence>
      {isAIOpen &&
      <>
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
          className="fixed inset-0 bg-heading/20 backdrop-blur-sm z-50"
          onClick={closeAI}
          aria-hidden="true" />
        
          <motion.div
          role="dialog"
          aria-label="AI Assistant"
          initial={{
            x: '100%'
          }}
          animate={{
            x: 0
          }}
          exit={{
            x: '100%'
          }}
          transition={{
            type: 'spring',
            damping: 26,
            stiffness: 220
          }}
          className="fixed top-0 right-0 h-screen w-full max-w-[400px] bg-white shadow-lift z-50 flex flex-col border-l border-line">
          
            <div className="h-[72px] px-6 border-b border-line flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-heading">HR Assistant</h3>
                  <p className="text-xs text-success flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-success" /> Online
                  </p>
                </div>
              </div>
              <button
              onClick={closeAI}
              aria-label="Close"
              className="p-2 text-muted hover:bg-gray-100 rounded-full transition-colors">
              
                <X size={20} />
              </button>
            </div>

            <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-5 space-y-5 bg-canvas/40">
            
              {messages.map((m) =>
            <div
              key={m.id}
              className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              
                  <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'assistant' ? 'bg-primary text-white' : 'bg-gray-200 text-muted'}`}>
                
                    {m.role === 'assistant' ? <Bot size={16} /> : 'R'}
                  </div>
                  <div
                className={`p-3.5 text-sm max-w-[80%] shadow-sm ${m.role === 'assistant' ? 'bg-white text-heading border border-line rounded-2xl rounded-tl-none' : 'bg-primary text-white rounded-2xl rounded-tr-none'}`}>
                
                    {m.text}
                  </div>
                </div>
            )}
            </div>

            <div className="p-4 border-t border-line shrink-0">
              <div className="flex items-center gap-2 bg-gray-50 border border-line rounded-xl p-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                type="text"
                placeholder="Ask anything..."
                className="flex-1 bg-transparent border-none outline-none px-2 text-sm text-heading placeholder:text-muted" />
              
                <button
                onClick={send}
                aria-label="Send"
                className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors">
                
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

};