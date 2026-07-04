import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Hexagon,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Users,
  ShieldCheck,
  CheckCircle2,
  User,
  IdCard,
  ArrowLeft,
  BarChart3,
  Calendar,
  Wallet,
  Clock,
} from 'lucide-react';

interface AuthProps {
  initialView?: 'login' | 'register';
}

export function Auth({ initialView = 'login' }: AuthProps) {
  const navigate = useNavigate();
  const [view, setView] = useState<'login' | 'register'>(initialView);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({ email: '', password: '', remember: false });
  // Register form state
  const [registerData, setRegisterData] = useState({
    fullName: '',
    employeeId: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '' as '' | 'employee' | 'admin',
    agreed: false,
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    
    // Retrieve role from localStorage or fallback to checking if email contains 'admin'
    const storedRole = localStorage.getItem(`user_role_${loginData.email.toLowerCase()}`);
    const isAdmin = storedRole === 'admin' || loginData.email.toLowerCase().includes('admin');
    
    navigate(isAdmin ? '/admin' : '/employee');
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    
    // Store user role in localStorage to associate this email with the registered role
    if (registerData.role) {
      localStorage.setItem(`user_role_${registerData.email.toLowerCase()}`, registerData.role);
    }
    
    navigate(registerData.role === 'admin' ? '/admin' : '/employee');
  };

  return (
    <div className="h-screen flex bg-[#F8FAFC] overflow-hidden">
      {/* Left Panel — Unified Attractive Design */}
      <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#0891b2]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(99,102,241,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(20,184,166,0.3),transparent_50%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating geometric blobs */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] right-[15%] w-20 h-20 rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/10 rotate-12"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[20%] left-[10%] w-14 h-14 rounded-full bg-teal-400/[0.12] backdrop-blur-sm border border-teal-300/10"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-[60%] right-[8%] w-10 h-10 rounded-lg bg-indigo-400/[0.1] backdrop-blur-sm border border-white/5 rotate-45"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 w-full h-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shadow-lg shadow-black/10">
              <Hexagon className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              HR Nexus <span className="text-teal-300">AI</span>
            </span>
          </motion.div>

          {/* Center — Floating Dashboard Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center my-2"
          >
            {/* Main dashboard card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-white/[0.1] backdrop-blur-xl rounded-2xl border border-white/15 p-5 w-[300px] shadow-2xl shadow-black/20"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/90 text-sm font-semibold">Dashboard Overview</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                </div>
              </div>

              {/* Mini stat rows */}
              <div className="space-y-2.5">
                {[
                  { icon: Users, label: 'Total Employees', value: '248', color: 'bg-blue-400/20 text-blue-300' },
                  { icon: Calendar, label: 'On Leave Today', value: '12', color: 'bg-amber-400/20 text-amber-300' },
                  { icon: Wallet, label: 'Payroll Processed', value: '98%', color: 'bg-teal-400/20 text-teal-300' },
                  { icon: Clock, label: 'Avg. Check-in', value: '9:02 AM', color: 'bg-purple-400/20 text-purple-300' },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between bg-white/[0.06] rounded-xl px-3 py-2.5 border border-white/[0.06]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${row.color}`}>
                        <row.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-white/70 text-xs font-medium">{row.label}</span>
                    </div>
                    <span className="text-white text-xs font-bold">{row.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating mini badge — top-right */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-3 -right-2 bg-teal-500/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-[11px] font-semibold shadow-lg shadow-teal-500/30 border border-teal-400/30 flex items-center gap-1.5"
            >
              <BarChart3 className="w-3 h-3" /> Live Data
            </motion.div>

            {/* Floating mini badge — bottom-left */}
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -bottom-2 -left-4 bg-white/[0.12] backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-[11px] font-medium shadow-lg border border-white/10 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3 h-3 text-teal-300" /> 256-bit Encrypted
            </motion.div>
          </motion.div>

          {/* Bottom — text + trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl xl:text-[28px] font-bold text-white leading-tight mb-2">
              {view === 'login' ? 'Welcome back!' : 'Get started today'}
            </h2>
            <p className="text-blue-200/80 text-sm leading-relaxed mb-5 max-w-sm">
              {view === 'login'
                ? 'Sign in to access your personalized HR dashboard with real-time insights.'
                : 'Create your account and join the smart workforce management platform.'}
            </p>
            <div className="flex items-center gap-5">
              {[
                { label: 'Secure', icon: ShieldCheck },
                { label: 'Reliable', icon: CheckCircle2 },
                { label: 'Trusted', icon: Users },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-1.5">
                  <badge.icon className="w-3.5 h-3.5 text-teal-300" />
                  <span className="text-white/70 text-xs font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Hexagon className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-slate-900">
              HR Nexus <span className="text-teal-500">AI</span>
            </span>
          </div>
        </div>

        {/* Back to home */}
        <div className="px-6 sm:px-12 lg:px-16 xl:px-20 pt-3 lg:pt-5">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* Form card */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-4">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: view === 'login' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full max-w-[480px] bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-8"
          >
            {view === 'login' ? (
              /* ========== LOGIN FORM ========== */
              <>
                <div className="mb-7">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Sign In
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Enter your credentials to access your dashboard.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        placeholder="you@company.com"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-sm font-medium text-slate-700">
                        Password
                      </label>
                      <button type="button" className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        placeholder="Enter your password"
                        required
                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all bg-slate-50/50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember me */}
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={loginData.remember}
                      onChange={(e) => setLoginData({ ...loginData, remember: e.target.checked })}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-600">Remember me</span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-[14px] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none text-sm"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Sign In <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="h-px bg-gray-200 flex-1" />
                  <span className="text-xs text-slate-400 font-medium">OR</span>
                  <div className="h-px bg-gray-200 flex-1" />
                </div>

                {/* Switch to register */}
                <p className="text-center text-sm text-slate-500">
                  Don't have an account?{' '}
                  <button
                    onClick={() => { setView('register'); setIsLoading(false); }}
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Create Account
                  </button>
                </p>
              </>
            ) : (
              /* ========== REGISTER FORM ========== */
              <>
                <div className="mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                    Create Account
                  </h2>
                  <p className="text-slate-500 text-xs">
                    Fill in your details to get started with HR Nexus AI.
                  </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-3">
                  {/* Role Selection */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Select Your Role
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {([
                        { value: 'employee', label: 'Employee', icon: Users, desc: 'Staff member' },
                        { value: 'admin', label: 'HR / Admin', icon: ShieldCheck, desc: 'Manager' },
                      ] as const).map((role) => (
                        <button
                          key={role.value}
                          type="button"
                          onClick={() => setRegisterData({ ...registerData, role: role.value })}
                          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border-2 transition-all duration-200 ${
                            registerData.role === role.value
                              ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-sm'
                              : 'border-gray-200 bg-white text-slate-500 hover:border-blue-200 hover:bg-slate-50'
                          }`}
                        >
                          <role.icon className="w-4 h-4 shrink-0" />
                          <div className="text-left">
                            <span className="text-xs font-semibold block leading-tight">{role.label}</span>
                            <span className="text-[10px] opacity-60 leading-tight">{role.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Employee ID */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={registerData.fullName}
                          onChange={(e) => setRegisterData({ ...registerData, fullName: e.target.value })}
                          placeholder="John Doe"
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Employee ID</label>
                      <div className="relative">
                        <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={registerData.employeeId}
                          onChange={(e) => setRegisterData({ ...registerData, employeeId: e.target.value })}
                          placeholder="EMP-001"
                          required
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        placeholder="you@company.com"
                        required
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Password + Confirm */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={registerData.password}
                          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                          placeholder="Min 8 chars"
                          required
                          className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all bg-slate-50/50"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Confirm</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={registerData.confirmPassword}
                          onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                          placeholder="Re-enter"
                          required
                          className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all bg-slate-50/50"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={registerData.agreed}
                      onChange={(e) => setRegisterData({ ...registerData, agreed: e.target.checked })}
                      required
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
                    />
                    <span className="text-xs text-slate-500 leading-relaxed">
                      I agree to the{' '}
                      <span className="text-blue-600 font-medium cursor-pointer hover:underline">Terms of Service</span>{' '}
                      and{' '}
                      <span className="text-blue-600 font-medium cursor-pointer hover:underline">Privacy Policy</span>.
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-teal-500 text-white font-semibold rounded-[14px] hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none text-sm"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Create Account <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>

                {/* Switch to login */}
                <p className="text-center text-xs text-slate-500 mt-3">
                  Already have an account?{' '}
                  <button
                    onClick={() => { setView('login'); setIsLoading(false); }}
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Sign In
                  </button>
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}