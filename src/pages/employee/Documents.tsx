import React, { Children } from 'react';
import { Card, CardContent } from '../../components/employee/Card';
import { Button } from '../../components/employee/Button';
import { FileText, Download, Eye, FileBadge, FileCheck } from 'lucide-react';
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
export const Documents = () => {
  const documents = [
  {
    title: 'Offer Letter',
    date: '10 Jan 2022',
    size: '2.4 MB',
    icon: FileBadge,
    color: 'text-primary',
    bg: 'bg-primary-50'
  },
  {
    title: 'Employee Handbook',
    date: '15 Jan 2022',
    size: '5.1 MB',
    icon: FileText,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    title: 'ID Proof (Aadhar)',
    date: '12 Jan 2022',
    size: '1.2 MB',
    icon: FileCheck,
    color: 'text-success',
    bg: 'bg-success/10'
  },
  {
    title: 'Tax Declaration 2023',
    date: '05 Apr 2023',
    size: '800 KB',
    icon: FileText,
    color: 'text-warning',
    bg: 'bg-warning/10'
  }];

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
          <h1 className="text-2xl font-bold text-heading">My Documents</h1>
          <p className="text-muted mt-1">
            Access and download your employment documents.
          </p>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 w-full md:w-auto justify-center">
          
          Upload Document
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {documents.map((doc, i) =>
        <Card key={i} hoverable>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div
                className={`w-12 h-12 rounded-xl ${doc.bg} flex items-center justify-center ${doc.color}`}>
                
                  <doc.icon size={24} />
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-muted hover:text-primary hover:bg-primary-50 rounded-lg transition-colors">
                    <Eye size={18} />
                  </button>
                  <button className="p-2 text-muted hover:text-primary hover:bg-primary-50 rounded-lg transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold text-heading mb-1">{doc.title}</h3>
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Added: {doc.date}</span>
                <span>{doc.size}</span>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </motion.div>);

};