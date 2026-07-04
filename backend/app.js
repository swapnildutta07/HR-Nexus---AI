import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employeeRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import leaveRoutes from './routes/leaveRoutes.js';
import payrollRoutes from './routes/payrollRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Configure CORS middleware to allow requests from http://localhost:5173 with credentials
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'HR Nexus AI backend server is healthy',
    timestamp: new Date()
  });
});

// Register employee routes
app.use('/api/employee', employeeRoutes);

// Register attendance routes
app.use('/api/attendance', attendanceRoutes);

// Register leave routes
app.use('/api/leave', leaveRoutes);

// Register payroll routes
app.use('/api/payroll', payrollRoutes);

// Register AI assistant routes
app.use('/api/ai', aiRoutes);

// Register reporting routes
app.use('/api/reports', reportRoutes);

// Global error-handling middleware (must be registered last)
app.use(errorHandler);

export default app;
