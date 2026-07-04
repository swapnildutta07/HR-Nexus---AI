import React, { Children } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/employee/Card';
import { Button } from '../../components/employee/Button';
import { Badge } from '../../components/employee/Badge';
import { Download, IndianRupee, Wallet, TrendingUp } from 'lucide-react';
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
export const Payroll = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto space-y-8">
      
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-bold text-heading">Payroll & Salary</h1>
        <p className="text-muted mt-1">
          View your salary details and download payslips.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <Card className="bg-primary text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <IndianRupee size={24} />
              </div>
              <Badge
                variant="neutral"
                className="bg-white/20 text-white border-none">
                
                Current Month
              </Badge>
            </div>
            <p className="text-primary-100 font-medium">
              Net Salary (Oct 2023)
            </p>
            <h3 className="text-3xl font-bold mt-1">₹45,000</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success">
                <TrendingUp size={24} />
              </div>
            </div>
            <p className="text-sm text-muted font-medium">Total Allowances</p>
            <h3 className="text-2xl font-bold text-heading mt-1">₹5,000</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-danger/10 flex items-center justify-center text-danger">
                <Wallet size={24} />
              </div>
            </div>
            <p className="text-sm text-muted font-medium">Total Deductions</p>
            <h3 className="text-2xl font-bold text-heading mt-1">₹2,000</h3>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Recent Payslips</CardTitle>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted uppercase bg-gray-50 border-b border-line">
                <tr>
                  <th className="px-6 py-4 font-medium">Month</th>
                  <th className="px-6 py-4 font-medium">Gross Pay</th>
                  <th className="px-6 py-4 font-medium">Deductions</th>
                  <th className="px-6 py-4 font-medium">Net Pay</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[
                {
                  month: 'September 2023',
                  gross: '₹45,000',
                  ded: '₹2,000',
                  net: '₹43,000',
                  status: 'Paid'
                },
                {
                  month: 'August 2023',
                  gross: '₹45,000',
                  ded: '₹2,000',
                  net: '₹43,000',
                  status: 'Paid'
                },
                {
                  month: 'July 2023',
                  gross: '₹45,000',
                  ded: '₹2,000',
                  net: '₹43,000',
                  status: 'Paid'
                }].
                map((slip, i) =>
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-heading">
                      {slip.month}
                    </td>
                    <td className="px-6 py-4 text-muted">{slip.gross}</td>
                    <td className="px-6 py-4 text-danger">-{slip.ded}</td>
                    <td className="px-6 py-4 font-bold text-heading">
                      {slip.net}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="success">{slip.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download size={14} /> PDF
                      </Button>
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