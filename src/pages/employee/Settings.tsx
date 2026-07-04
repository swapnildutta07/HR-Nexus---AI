import React, { useState, Children } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/employee/Card';
import { Bell, Lock, Globe, Moon, Shield } from 'lucide-react';
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
export const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto space-y-8">
      
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-bold text-heading">Settings</h1>
        <p className="text-muted mt-1">
          Manage your account preferences and settings.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-muted">
                  <Bell size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-heading">
                    Push Notifications
                  </h4>
                  <p className="text-sm text-muted">
                    Receive alerts for approvals and updates.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-primary' : 'bg-gray-300'}`}>
                
                <div
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${notifications ? 'left-7' : 'left-1'}`} />
                
              </button>
            </div>

            <div className="w-full h-px bg-line"></div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-muted">
                  <Moon size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-heading">Dark Mode</h4>
                  <p className="text-sm text-muted">
                    Toggle dark theme appearance.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-primary' : 'bg-gray-300'}`}>
                
                <div
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${darkMode ? 'left-7' : 'left-1'}`} />
                
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-muted">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-heading">Change Password</h4>
                  <p className="text-sm text-muted">
                    Update your account password.
                  </p>
                </div>
              </div>
              <button className="text-sm font-medium text-primary hover:underline">
                Update
              </button>
            </div>

            <div className="w-full h-px bg-line"></div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-muted">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-heading">
                    Two-Factor Authentication
                  </h4>
                  <p className="text-sm text-muted">
                    Add an extra layer of security.
                  </p>
                </div>
              </div>
              <button className="text-sm font-medium text-primary hover:underline">
                Enable
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>);

};