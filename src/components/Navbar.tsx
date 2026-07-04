import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'Features',
    href: '#features'
  },
  {
    name: 'How It Works',
    href: '#how-it-works'
  },
  {
    name: 'About Us',
    href: '#about'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <motion.header
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}
      className="fixed top-0 left-0 right-0 h-[80px] bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Hexagon className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            HR Nexus <span className="text-teal-500">AI</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="relative text-slate-500 hover:text-blue-600 font-medium transition-colors group text-sm">
            
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          )}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-blue-600 font-medium border border-gray-200 rounded-[14px] hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 text-sm">
            Login
          </button>
          <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-[14px] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] text-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">
          
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen &&
      <motion.div
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="md:hidden absolute top-[80px] left-0 right-0 bg-white border-b border-gray-200 shadow-xl p-4 flex flex-col gap-4">
        
          {links.map((link) =>
        <a
          key={link.name}
          href={link.href}
          className="text-slate-600 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50"
          onClick={() => setIsOpen(false)}>
          
              {link.name}
            </a>
        )}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            <button className="w-full py-3 text-blue-600 font-medium border border-gray-200 rounded-[14px] hover:bg-slate-50">
              Login
            </button>
            <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-[14px] hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </motion.div>
      }
    </motion.header>);

}