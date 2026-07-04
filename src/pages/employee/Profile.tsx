import React, { Children } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/employee/Card';
import { Avatar } from '../../components/employee/Avatar';
import { Mail, Phone, MapPin, Briefcase, Calendar, Shield } from 'lucide-react';
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
export const Profile = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto space-y-8">
      
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-bold text-heading">My Profile</h1>
        <p className="text-muted mt-1">
          View and manage your personal information.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <Avatar initials="R" size="lg" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-success border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-heading">Rahul Sharma</h2>
              <p className="text-primary font-medium mt-1">
                Senior Software Engineer
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Briefcase size={16} /> Engineering Dept
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} /> Bangalore, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} /> Joined Jan 2022
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-muted shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-heading">
                    Email Address
                  </p>
                  <p className="text-sm text-muted mt-0.5">
                    rahul.sharma@hrnexus.ai
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-muted shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-heading">
                    Phone Number
                  </p>
                  <p className="text-sm text-muted mt-0.5">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-muted shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-heading">
                    Current Address
                  </p>
                  <p className="text-sm text-muted mt-0.5">
                    123 Tech Park, Whitefield
                    <br />
                    Bangalore, Karnataka 560066
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Employment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-heading">
                    Employee ID
                  </p>
                  <p className="text-sm text-muted mt-0.5">EMP1256</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary shrink-0">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-heading">
                    Reporting Manager
                  </p>
                  <p className="text-sm text-muted mt-0.5">
                    Priya Patel (Director of Eng)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-heading">
                    Employment Type
                  </p>
                  <p className="text-sm text-muted mt-0.5">
                    Full-Time, Permanent
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>);

};