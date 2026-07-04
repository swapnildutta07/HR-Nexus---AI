import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/employee/Card';
import { Badge } from '../../components/employee/Badge';
import { Button } from '../../components/employee/Button';
import { useApp } from '../../context/AppContext';
import {
  Clock,
  CalendarDays,
  IndianRupee,
  Building2,
  Fingerprint,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  User,
  Bot,
  Sparkles } from
'lucide-react';
import { motion } from 'framer-motion';

const DashboardSkeleton = () =>
<div className="max-w-7xl mx-auto space-y-8">
    <div className="space-y-2">
      <div className="hn-skeleton h-8 w-64 rounded-lg" />
      <div className="hn-skeleton h-4 w-48 rounded" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) =>
    <div key={i} className="hn-skeleton h-24 rounded-2xl" />
    )}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="hn-skeleton h-48 rounded-2xl" />
        <div className="hn-skeleton h-56 rounded-2xl" />
      </div>
      <div className="space-y-8">
        <div className="hn-skeleton h-56 rounded-2xl" />
        <div className="hn-skeleton h-40 rounded-2xl" />
      </div>
    </div>
  </div>;

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
export const Dashboard = () => {
  const { isCheckedIn, checkInTime, openAI } = useApp();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <DashboardSkeleton />;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto space-y-8">
      
      {/* Welcome Section */}
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-bold text-heading">
          Good Morning, Rahul! 👋
        </h1>
        <p className="text-muted mt-1">Here's your work summary for today.</p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <Card hoverable>
          <CardContent className="p-5 flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${isCheckedIn ? 'bg-success/10 text-success' : 'bg-primary-50 text-primary'}`}>
              
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Attendance Today</p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-xl font-bold text-heading">
                  {isCheckedIn ? 'Checked In' : 'Not Checked In'}
                </h3>
                {isCheckedIn && checkInTime &&
                <span className="text-xs font-medium text-success">
                    {checkInTime}
                  </span>
                }
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hoverable>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center text-warning">
              <CalendarDays size={24} />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Leave Balance</p>
              <h3 className="text-xl font-bold text-heading mt-1">12 Days</h3>
            </div>
          </CardContent>
        </Card>

        <Card hoverable>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success">
              <IndianRupee size={24} />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Upcoming Salary</p>
              <h3 className="text-xl font-bold text-heading mt-1">₹45,000</h3>
            </div>
          </CardContent>
        </Card>

        <Card hoverable>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-muted">
              <Building2 size={24} />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Department</p>
              <div className="flex items-center gap-2 mt-1">
                <h3 className="text-lg font-bold text-heading truncate">
                  Engineering
                </h3>
                <Badge variant="neutral" className="text-[10px] px-1.5 py-0">
                  EMP1256
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Grid (Left 2 Columns) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Attendance This Week */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Attendance This Week</CardTitle>
                <Link to="/attendance">
                  <Button variant="ghost" size="sm" className="text-primary">
                    View Calendar
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) =>
                  <div
                    key={day}
                    className="flex flex-col items-center gap-3 group cursor-pointer">
                    
                      <span className="text-sm font-medium text-muted">
                        {day}
                      </span>
                      <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all group-hover:scale-110 ${i < 3 ? 'border-success text-success bg-success/5' : i === 3 ? 'border-warning text-warning bg-warning/5' : 'border-line text-muted bg-gray-50'}`}>
                      
                        {i < 3 ?
                      <CheckCircle2 size={20} /> :
                      i === 3 ?
                      <Clock3 size={20} /> :

                      <span className="text-sm font-bold">-</span>
                      }
                      </div>
                      <span className="text-xs font-medium text-heading">
                        {i < 3 ? 'Present' : i === 3 ? 'Half Day' : 'Pending'}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* My Leave Requests */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>My Leave Requests</CardTitle>
                <Link to="/leave">
                  <Button variant="ghost" size="sm" className="text-primary">
                    Apply Leave
                  </Button>
                </Link>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted uppercase bg-gray-50 border-b border-line">
                    <tr>
                      <th className="px-6 py-4 font-medium">Leave Type</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-heading flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        Casual Leave
                      </td>
                      <td className="px-6 py-4 text-muted">12 Oct - 14 Oct</td>
                      <td className="px-6 py-4">
                        <Badge variant="success">Approved</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-heading flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-warning"></div>
                        Sick Leave
                      </td>
                      <td className="px-6 py-4 text-muted">28 Sep</td>
                      <td className="px-6 py-4">
                        <Badge variant="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-heading flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-danger"></div>
                        Earned Leave
                      </td>
                      <td className="px-6 py-4 text-muted">05 Sep - 10 Sep</td>
                      <td className="px-6 py-4">
                        <Badge variant="danger">Rejected</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* Salary Overview */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Salary Overview</CardTitle>
                <Link to="/payroll">
                  <Button variant="ghost" size="sm" className="text-primary">
                    View All
                  </Button>
                </Link>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted uppercase bg-gray-50 border-b border-line">
                    <tr>
                      <th className="px-6 py-4 font-medium">Month</th>
                      <th className="px-6 py-4 font-medium">Salary</th>
                      <th className="px-6 py-4 font-medium">Allowance</th>
                      <th className="px-6 py-4 font-medium">Deduction</th>
                      <th className="px-6 py-4 font-medium">Net Salary</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {[
                    {
                      month: 'September 2023',
                      salary: '₹40,000',
                      allowance: '+₹5,000',
                      deduction: '-₹2,000',
                      net: '₹43,000'
                    },
                    {
                      month: 'August 2023',
                      salary: '₹40,000',
                      allowance: '+₹4,000',
                      deduction: '-₹2,000',
                      net: '₹42,000'
                    },
                    {
                      month: 'July 2023',
                      salary: '₹40,000',
                      allowance: '+₹6,000',
                      deduction: '-₹1,500',
                      net: '₹44,500'
                    }].
                    map((row) =>
                    <tr
                      key={row.month}
                      className="hover:bg-gray-50 transition-colors">
                      
                        <td className="px-6 py-4 font-medium text-heading">
                          {row.month}
                        </td>
                        <td className="px-6 py-4 text-muted">{row.salary}</td>
                        <td className="px-6 py-4 text-success">
                          {row.allowance}
                        </td>
                        <td className="px-6 py-4 text-danger">
                          {row.deduction}
                        </td>
                        <td className="px-6 py-4 font-bold text-heading">
                          {row.net}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className="space-y-8">
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <div className="space-y-1">
                  {[
                  {
                    icon: User,
                    label: 'My Profile',
                    to: '/profile',
                    color: 'text-blue-500',
                    bg: 'bg-blue-50'
                  },
                  {
                    icon: CalendarDays,
                    label: 'Apply Leave',
                    to: '/leave',
                    color: 'text-orange-500',
                    bg: 'bg-orange-50'
                  },
                  {
                    icon: FileText,
                    label: 'My Documents',
                    to: '/documents',
                    color: 'text-purple-500',
                    bg: 'bg-purple-50'
                  },
                  {
                    icon: IndianRupee,
                    label: 'Salary Slip',
                    to: '/payroll',
                    color: 'text-green-500',
                    bg: 'bg-green-50'
                  }].
                  map((link, i) =>
                  <Link
                    to={link.to}
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
                    
                      <div className="flex items-center gap-3">
                        <div
                        className={`w-10 h-10 rounded-lg ${link.bg} flex items-center justify-center ${link.color}`}>
                        
                          <link.icon size={20} />
                        </div>
                        <span className="font-medium text-heading group-hover:text-primary transition-colors">
                          {link.label}
                        </span>
                      </div>
                      <ArrowRight
                      size={16}
                      className="text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Leave Balance Breakdown */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Leave Balance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-heading">
                      Casual Leave
                    </span>
                    <span className="text-muted">4/8</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{
                        width: '50%'
                      }}>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-heading">Sick Leave</span>
                    <span className="text-muted">2/6</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-warning h-2 rounded-full"
                      style={{
                        width: '33%'
                      }}>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-heading">
                      Earned Leave
                    </span>
                    <span className="text-muted">6/12</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-success h-2 rounded-full"
                      style={{
                        width: '50%'
                      }}>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Assistant Card */}
          <motion.div variants={itemVariants}>
            <Card
              hoverable
              className="bg-primary text-white border-primary/20 overflow-hidden relative">
              
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
              <CardContent className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs text-white/70">Always here to help</p>
                  </div>
                </div>
                <p className="text-sm text-white/85 mt-4">
                  Ask anything about your leave, payroll, or company policies.
                </p>
                <button
                  onClick={openAI}
                  className="mt-4 w-full bg-white text-primary font-medium text-sm py-2.5 rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                  
                  <Bot size={16} /> Ask anything...
                </button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activities */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-line before:to-transparent">
                  {[
                  {
                    title: 'Checked In',
                    time: 'Today, 09:15 AM',
                    icon: Fingerprint,
                    color: 'text-primary',
                    bg: 'bg-primary-50'
                  },
                  {
                    title: 'Leave Approved',
                    time: 'Yesterday, 02:30 PM',
                    icon: CheckCircle2,
                    color: 'text-success',
                    bg: 'bg-success/10'
                  },
                  {
                    title: 'Salary Generated',
                    time: '01 Oct, 10:00 AM',
                    icon: IndianRupee,
                    color: 'text-warning',
                    bg: 'bg-warning/10'
                  },
                  {
                    title: 'Profile Updated',
                    time: '28 Sep, 04:15 PM',
                    icon: User,
                    color: 'text-purple-500',
                    bg: 'bg-purple-50'
                  }].
                  map((activity, i) =>
                  <div
                    key={i}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <div
                        className={`w-8 h-8 rounded-full ${activity.bg} flex items-center justify-center ${activity.color}`}>
                        
                          <activity.icon size={14} />
                        </div>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-line bg-white shadow-sm">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm text-heading">
                            {activity.title}
                          </h4>
                        </div>
                        <time className="text-xs text-muted">
                          {activity.time}
                        </time>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>);

};