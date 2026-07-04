import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Auth } from './pages/Auth';
import { AdminDashboard } from './pages/AdminDashboard';
import { EmployeeDashboard } from './pages/EmployeeDashboard';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth initialView="login" />} />
        <Route path="/register" element={<Auth initialView="register" />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}