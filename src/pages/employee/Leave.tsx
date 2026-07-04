import React, { Children } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/employee/Card';
import { Button } from '../../components/employee/Button';
import { Badge } from '../../components/employee/Badge';
import { CalendarOff, Plus } from 'lucide-react';
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
export const Leave = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto space-y-8">
      
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <div>
          <h1 className="text-2xl font-bold text-heading">Leave Management</h1>
          <p className="text-muted mt-1">
            View your leave balances and apply for time off.
          </p>
        </div>
        <Button className="flex items-center gap-2 w-full md:w-auto justify-center">
          <Plus size={18} /> Apply Leave
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {[
        {
          title: 'Casual Leave',
          available: 4,
          total: 8,
          color: 'bg-primary'
        },
        {
          title: 'Sick Leave',
          available: 2,
          total: 6,
          color: 'bg-warning'
        },
        {
          title: 'Earned Leave',
          available: 6,
          total: 12,
          color: 'bg-success'
        }].
        map((leave, i) =>
        <Card key={i}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-muted">
                  <CalendarOff size={20} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted font-medium">Available</p>
                  <h3 className="text-2xl font-bold text-heading">
                    {leave.available}
                  </h3>
                </div>
              </div>
              <h4 className="font-medium text-heading mb-2">{leave.title}</h4>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                <div
                className={`${leave.color} h-2 rounded-full`}
                style={{
                  width: `${leave.available / leave.total * 100}%`
                }}>
              </div>
              </div>
              <p className="text-xs text-muted">
                Total {leave.total} days per year
              </p>
            </CardContent>
          </Card>
        )}
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Leave History</CardTitle>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted uppercase bg-gray-50 border-b border-line">
                <tr>
                  <th className="px-6 py-4 font-medium">Leave Type</th>
                  <th className="px-6 py-4 font-medium">Duration</th>
                  <th className="px-6 py-4 font-medium">Days</th>
                  <th className="px-6 py-4 font-medium">Reason</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-heading">
                    Casual Leave
                  </td>
                  <td className="px-6 py-4 text-muted">12 Oct - 14 Oct 2023</td>
                  <td className="px-6 py-4 text-muted">3</td>
                  <td className="px-6 py-4 text-muted">Family function</td>
                  <td className="px-6 py-4">
                    <Badge variant="success">Approved</Badge>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-heading">
                    Sick Leave
                  </td>
                  <td className="px-6 py-4 text-muted">28 Sep 2023</td>
                  <td className="px-6 py-4 text-muted">1</td>
                  <td className="px-6 py-4 text-muted">Fever</td>
                  <td className="px-6 py-4">
                    <Badge variant="warning">Pending</Badge>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-heading">
                    Earned Leave
                  </td>
                  <td className="px-6 py-4 text-muted">05 Sep - 10 Sep 2023</td>
                  <td className="px-6 py-4 text-muted">6</td>
                  <td className="px-6 py-4 text-muted">Vacation</td>
                  <td className="px-6 py-4">
                    <Badge variant="danger">Rejected</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </motion.div>);

};