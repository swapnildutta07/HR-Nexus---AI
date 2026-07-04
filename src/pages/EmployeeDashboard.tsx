import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UsersIcon, LogOutIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
export function EmployeeDashboard() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="min-h-screen bg-canvas p-8">
      
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-12 bg-white p-6 rounded-card shadow-soft">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <UsersIcon size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-heading">
                Employee Portal
              </h1>
              <p className="text-paragraph">Welcome back!</p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2">
            
            <LogOutIcon size={18} />
            Logout
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) =>
          <div
            key={i}
            className="bg-white p-6 rounded-card shadow-soft h-40 flex items-center justify-center border border-border">
            
              <p className="text-paragraph font-medium">Employee Widget {i}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>);

}