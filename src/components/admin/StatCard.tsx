import React from 'react';
import { motion } from 'framer-motion';
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  trendUp: boolean | null;
  delay: number;
}
export function StatCard({
  icon,
  title,
  value,
  trend,
  trendUp,
  delay
}: StatCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        delay
      }}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.2
        }
      }}
      className="bg-card rounded-card p-5 border border-border shadow-soft hover:shadow-lift transition-shadow cursor-default group">
      
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-subtext mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-text mb-2">{value}</h3>
        <div className="flex items-center gap-1.5">
          {trendUp !== null &&
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${trendUp ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
            
              {trendUp ? '↑' : '↓'}
            </span>
          }
          <span className="text-xs font-medium text-subtext">{trend}</span>
        </div>
      </div>
    </motion.div>);

}