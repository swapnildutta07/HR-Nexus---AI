import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import {
  CheckCircle2,
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  CreditCard,
  BarChart2,
  Settings,
  ArrowRight,
  LogIn,
  CheckSquare,
  Clock,
  Wallet } from
'lucide-react';
const chartData = [
{
  name: 'Mon',
  value: 40
},
{
  name: 'Tue',
  value: 30
},
{
  name: 'Wed',
  value: 60
},
{
  name: 'Thu',
  value: 45
},
{
  name: 'Fri',
  value: 80
},
{
  name: 'Sat',
  value: 65
},
{
  name: 'Sun',
  value: 90
}];

export function Hero() {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#F8FAFC]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut'
            }}
            className="w-full lg:w-[45%] flex flex-col items-start z-10">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-medium mb-8 shadow-sm">
              <span className="text-blue-500">✨</span> Built for HR Teams &
              Employees
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
              One Platform for <br />
              <span className="text-blue-600">HR Teams</span> &{' '}
              <span className="text-teal-500">Employees</span>
            </h1>

            <p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
              HR Nexus AI simplifies workforce management with powerful tools
              for HR professionals and a seamless experience for
              employees—together in one platform.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-700 mb-10">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-500" /> Secure
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-500" /> Smart
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-500" /> Simple
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => navigate('/register')}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-medium rounded-[14px] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/login')}
                className="w-full sm:w-auto px-8 py-4 text-slate-700 font-medium bg-white border border-gray-200 rounded-[14px] hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-sm">
                Login <LogIn className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column - Dashboard Mockups */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              delay: 0.2
            }}
            className="w-full lg:w-[55%] relative h-[600px] flex items-center justify-center lg:justify-end">
            
            {/* Main Admin Dashboard */}
            <div className="absolute right-0 lg:right-4 w-[800px] bg-white rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex z-10 scale-[0.45] sm:scale-[0.55] md:scale-[0.65] lg:scale-[0.5] xl:scale-[0.65] 2xl:scale-[0.8] origin-right">
              {/* Sidebar */}
              <div className="w-48 bg-slate-50 border-r border-gray-100 p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-6 px-2">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">HR</span>
                  </div>
                  <span className="font-bold text-sm text-slate-900">
                    HR Nexus AI
                  </span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium">
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-xs font-medium">
                  <Users className="w-4 h-4" /> Employees
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-xs font-medium">
                  <Calendar className="w-4 h-4" /> Attendance
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-xs font-medium">
                  <FileText className="w-4 h-4" /> Leave
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-xs font-medium">
                  <CreditCard className="w-4 h-4" /> Payroll
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-xs font-medium">
                  <BarChart2 className="w-4 h-4" /> Reports
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-xs font-medium mt-auto">
                  <Settings className="w-4 h-4" /> Settings
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 bg-white">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Hello, Admin 👋
                    </h2>
                    <p className="text-xs text-slate-500">
                      Welcome back! Here's what's happening today.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  <div className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <Users className="w-5 h-5 text-blue-500 mb-2" />
                    <p className="text-[10px] text-slate-500">
                      Total Employees
                    </p>
                    <p className="text-xl font-bold text-slate-900">250</p>
                    <p className="text-[8px] text-teal-500 mt-1">
                      ↑ 12% from last month
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <CheckSquare className="w-5 h-5 text-teal-500 mb-2" />
                    <p className="text-[10px] text-slate-500">Present Today</p>
                    <p className="text-xl font-bold text-slate-900">231</p>
                    <p className="text-[8px] text-teal-500 mt-1">
                      ↑ 8% from yesterday
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <Clock className="w-5 h-5 text-orange-500 mb-2" />
                    <p className="text-[10px] text-slate-500">Pending Leaves</p>
                    <p className="text-xl font-bold text-slate-900">12</p>
                    <p className="text-[8px] text-orange-500 mt-1">
                      ↓ 2 from yesterday
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <Wallet className="w-5 h-5 text-purple-500 mb-2" />
                    <p className="text-[10px] text-slate-500">Payroll Status</p>
                    <p className="text-xl font-bold text-slate-900">95%</p>
                    <p className="text-[8px] text-slate-400 mt-1">Completed</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {/* Chart */}
                  <div className="col-span-2 border border-gray-100 rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xs font-bold text-slate-900">
                        Attendance Overview
                      </h3>
                      <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">
                        This Week ▾
                      </span>
                    </div>
                    <div className="h-32 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient
                              id="colorValue"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1">
                              
                              <stop
                                offset="5%"
                                stopColor="#2563eb"
                                stopOpacity={0.2} />
                              
                              <stop
                                offset="95%"
                                stopColor="#2563eb"
                                stopOpacity={0} />
                              
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#f1f5f9" />
                          
                          <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                              fontSize: 8,
                              fill: '#94a3b8'
                            }} />
                          
                          <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{
                              fontSize: 8,
                              fill: '#94a3b8'
                            }}
                            width={20} />
                          
                          <Tooltip
                            contentStyle={{
                              borderRadius: '8px',
                              border: 'none',
                              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                              fontSize: '10px'
                            }} />
                          
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#2563eb"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorValue)" />
                          
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Recent Activities */}
                  <div className="col-span-1 border border-gray-100 rounded-xl p-4 shadow-sm">
                    <h3 className="text-xs font-bold text-slate-900 mb-4">
                      Recent Activities
                    </h3>
                    <div className="space-y-3">
                      {[
                      {
                        name: 'Rahul Sharma',
                        action: 'Checked In - 09:10 AM',
                        img: 'bg-blue-100'
                      },
                      {
                        name: 'Priya Verma',
                        action: 'Applied for leave',
                        img: 'bg-teal-100'
                      },
                      {
                        name: 'Aman Kumar',
                        action: 'Payroll updated',
                        img: 'bg-orange-100'
                      },
                      {
                        name: 'Neha Singh',
                        action: 'Checked Out - 06:15 PM',
                        img: 'bg-purple-100'
                      }].
                      map((act, i) =>
                      <div key={i} className="flex items-center gap-2">
                          <div
                          className={`w-6 h-6 rounded-full ${act.img}`}>
                        </div>
                          <div>
                            <p className="text-[10px] font-medium text-slate-900">
                              {act.name}
                            </p>
                            <p className="text-[8px] text-slate-500">
                              {act.action}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mobile Phone UI */}
            <motion.div
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -right-4 lg:-right-8 top-10 w-[240px] bg-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[6px] border-slate-100 overflow-hidden z-20 hidden sm:block scale-[0.45] sm:scale-[0.55] md:scale-[0.65] lg:scale-[0.5] xl:scale-[0.65] 2xl:scale-[0.8] origin-right">
              
              <div className="bg-blue-600 h-6 w-full flex justify-center items-end pb-1">
                <div className="w-16 h-1.5 bg-black/20 rounded-full"></div>
              </div>
              <div className="p-4">
                <p className="text-[10px] text-slate-500 font-medium">
                  Employee Portal
                </p>
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Hi, Rahul 👋
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 shadow-sm bg-white">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-500">
                      <CheckSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Check In
                      </p>
                      <p className="text-[8px] text-slate-500">
                        Mark your daily attendance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 shadow-sm bg-white">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        My Attendance
                      </p>
                      <p className="text-[8px] text-slate-500">
                        View your attendance history
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 shadow-sm bg-white">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Apply Leave
                      </p>
                      <p className="text-[8px] text-slate-500">
                        Request for time off
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 shadow-sm bg-white">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        My Payroll
                      </p>
                      <p className="text-[8px] text-slate-500">
                        View salary & payslips
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}