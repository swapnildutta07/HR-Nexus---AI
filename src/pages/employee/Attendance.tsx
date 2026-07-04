import React, { Children } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/employee/Card';
import { Badge } from '../../components/employee/Badge';
import { CheckCircle2, Clock, CalendarOff, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';
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
export const Attendance = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto space-y-8">
      
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-bold text-heading">Attendance</h1>
        <p className="text-muted mt-1">
          Track your daily attendance and work hours.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Present Days</p>
              <h3 className="text-2xl font-bold text-heading mt-1">18</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center text-warning">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Late Arrivals</p>
              <h3 className="text-2xl font-bold text-heading mt-1">2</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-danger/10 flex items-center justify-center text-danger">
              <CalendarOff size={24} />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Absent Days</p>
              <h3 className="text-2xl font-bold text-heading mt-1">0</h3>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Attendance Logs</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted">
              <CalendarDays size={16} />
              <span>October 2023</span>
            </div>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted uppercase bg-gray-50 border-b border-line">
                <tr>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Check In</th>
                  <th className="px-6 py-4 font-medium">Check Out</th>
                  <th className="px-6 py-4 font-medium">Total Hours</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[
                {
                  date: '16 Oct, Mon',
                  in: '09:15 AM',
                  out: '06:30 PM',
                  hrs: '9h 15m',
                  status: 'Present',
                  variant: 'success'
                },
                {
                  date: '13 Oct, Fri',
                  in: '09:05 AM',
                  out: '06:00 PM',
                  hrs: '8h 55m',
                  status: 'Present',
                  variant: 'success'
                },
                {
                  date: '12 Oct, Thu',
                  in: '10:30 AM',
                  out: '07:00 PM',
                  hrs: '8h 30m',
                  status: 'Late',
                  variant: 'warning'
                },
                {
                  date: '11 Oct, Wed',
                  in: '09:00 AM',
                  out: '06:00 PM',
                  hrs: '9h 00m',
                  status: 'Present',
                  variant: 'success'
                },
                {
                  date: '10 Oct, Tue',
                  in: '-',
                  out: '-',
                  hrs: '0h 00m',
                  status: 'Leave',
                  variant: 'neutral'
                }].
                map((log, i) =>
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-heading">
                      {log.date}
                    </td>
                    <td className="px-6 py-4 text-muted">{log.in}</td>
                    <td className="px-6 py-4 text-muted">{log.out}</td>
                    <td className="px-6 py-4 text-muted">{log.hrs}</td>
                    <td className="px-6 py-4">
                      <Badge variant={log.variant as any}>{log.status}</Badge>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </motion.div>);

};