import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Auth } from './pages/Auth';

// Admin / HR imports
import { Layout as AdminLayout } from './components/admin/Layout';
import { Dashboard as AdminDashboard } from './pages/admin/Dashboard';
import { Employees as AdminEmployees } from './pages/admin/Employees';
import { Attendance as AdminAttendance } from './pages/admin/Attendance';
import { LeaveApproval as AdminLeaveApproval } from './pages/admin/LeaveApproval';
import { Payroll as AdminPayroll } from './pages/admin/Payroll';
import { Departments as AdminDepartments } from './pages/admin/Departments';
import { Reports as AdminReports } from './pages/admin/Reports';
import { Settings as AdminSettings } from './pages/admin/Settings';

// Employee imports
import { AppProvider } from './context/AppContext';
import { Layout as EmployeeLayout } from './components/employee/Layout';
import { Dashboard as EmployeeDashboard } from './pages/employee/Dashboard';
import { Profile as EmployeeProfile } from './pages/employee/Profile';
import { Attendance as EmployeeAttendance } from './pages/employee/Attendance';
import { Leave as EmployeeLeave } from './pages/employee/Leave';
import { Payroll as EmployeePayroll } from './pages/employee/Payroll';
import { Documents as EmployeeDocuments } from './pages/employee/Documents';
import { AIAssistant as EmployeeAIAssistant } from './pages/employee/AIAssistant';
import { Settings as EmployeeSettings } from './pages/employee/Settings';

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Auth initialView="login" />} />
          <Route path="/register" element={<Auth initialView="register" />} />
          
          {/* HR / Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="employees" element={<AdminEmployees />} />
            <Route path="attendance" element={<AdminAttendance />} />
            <Route path="leave" element={<AdminLeaveApproval />} />
            <Route path="payroll" element={<AdminPayroll />} />
            <Route path="departments" element={<AdminDepartments />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Employee Dashboard Routes */}
          <Route path="/employee" element={<EmployeeLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<EmployeeDashboard />} />
            <Route path="profile" element={<EmployeeProfile />} />
            <Route path="attendance" element={<EmployeeAttendance />} />
            <Route path="leave" element={<EmployeeLeave />} />
            <Route path="payroll" element={<EmployeePayroll />} />
            <Route path="documents" element={<EmployeeDocuments />} />
            <Route path="ai-assistant" element={<EmployeeAIAssistant />} />
            <Route path="settings" element={<EmployeeSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}