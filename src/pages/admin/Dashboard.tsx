import React from 'react';
import { motion } from 'framer-motion';
import { StatCard } from '../../components/admin/StatCard';
import { AttendanceChart } from '../../components/admin/AttendanceChart';
import { DepartmentChart } from '../../components/admin/DepartmentChart';
import { LeaveRequests } from '../../components/admin/LeaveRequests';
import { RecentActivity } from '../../components/admin/RecentActivity';
import { QuickActions } from '../../components/admin/QuickActions';
import {
  Users,
  UserCheck,
  CalendarOff,
  Banknote,
  Building2 } from
'lucide-react';
export function Dashboard() {
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
        duration: 0.4
      }}
      className="flex flex-col gap-8 pb-10">
      
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-text">
          Welcome back, Admin! 👋
        </h1>
        <p className="text-subtext">
          Here's what's happening in your organization today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard
          icon={<Users size={24} className="text-primary" />}
          title="Total Employees"
          value="256"
          trend="+14 This Month"
          trendUp={true}
          delay={0.1} />
        
        <StatCard
          icon={<UserCheck size={24} className="text-success" />}
          title="Present Today"
          value="231"
          trend="+18 This Week"
          trendUp={true}
          delay={0.2} />
        
        <StatCard
          icon={<CalendarOff size={24} className="text-warning" />}
          title="Pending Leave"
          value="12"
          trend="-3 Since Yesterday"
          trendUp={false}
          delay={0.3} />
        
        <StatCard
          icon={<Banknote size={24} className="text-primary" />}
          title="Payroll Processed"
          value="95%"
          trend="+5%"
          trendUp={true}
          delay={0.4} />
        
        <StatCard
          icon={<Building2 size={24} className="text-secondary" />}
          title="Departments"
          value="15"
          trend="No Change"
          trendUp={null}
          delay={0.5} />
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-card rounded-card p-6 border border-border shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-text">
                Attendance Overview
              </h2>
              <select className="bg-background border border-border rounded-lg px-3 py-1.5 text-sm font-medium text-text focus:outline-none">
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className="h-[300px]">
              <AttendanceChart />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LeaveRequests />
            <DepartmentChart />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>
    </motion.div>);

}