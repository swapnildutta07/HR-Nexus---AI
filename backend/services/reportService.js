import { supabase } from '../config/supabase.js';
import { generatePDFBuffer } from '../utils/pdfGenerator.js';
import { generateExcelBuffer } from '../utils/excelGenerator.js';

/**
 * Service to generate document streams (PDF/Excel) for HR modules.
 * Supported modules: 'employees', 'attendance', 'leaves'
 * Supported formats: 'pdf', 'excel'
 * 
 * @param {string} moduleType - 'employees' | 'attendance' | 'leaves'
 * @param {string} formatType - 'pdf' | 'excel'
 * @returns {Promise<Object>} - Contains Buffer, contentType header, and filename
 */
export const compileDocumentReport = async (moduleType, formatType) => {
  let title = '';
  let headers = [];
  let rows = [];

  // 1. Fetch relevant module data from Supabase
  if (moduleType === 'employees') {
    title = 'HR Nexus AI - Employees Roster';
    headers = ['ID', 'First Name', 'Last Name', 'Email', 'Role', 'Department', 'Status'];

    const { data, error } = await supabase
      .from('employees')
      .select('id, first_name, last_name, email, role, department, status')
      .order('first_name', { ascending: true });

    if (error) {
      throw new Error(`Reporting query failed: ${error.message}`);
    }
    rows = data || [];
  } 
  
  else if (moduleType === 'attendance') {
    title = 'HR Nexus AI - Global Attendance Registry';
    headers = ['Date', 'Employee ID', 'Check In', 'Check Out', 'Status'];

    const { data, error } = await supabase
      .from('attendance')
      .select('date, employee_id, check_in, check_out, status')
      .order('date', { ascending: false });

    if (error) {
      throw new Error(`Reporting query failed: ${error.message}`);
    }
    rows = data || [];
  } 
  
  else if (moduleType === 'leaves') {
    title = 'HR Nexus AI - Time-off Requests Summary';
    headers = ['Start Date', 'End Date', 'Leave Type', 'Days', 'Status', 'Remarks'];

    const { data, error } = await supabase
      .from('leaves')
      .select('start_date, end_date, leave_type, days, status, remarks')
      .order('start_date', { ascending: false });

    if (error) {
      throw new Error(`Reporting query failed: ${error.message}`);
    }
    rows = data || [];
  } 
  
  else {
    throw new Error(`Unsupported reporting target module: '${moduleType}'`);
  }

  // 2. Generate file stream buffer
  const dateStr = new Date().toISOString().split('T')[0];

  if (formatType === 'pdf') {
    const buffer = await generatePDFBuffer(title, headers, rows);
    return {
      buffer,
      contentType: 'application/pdf',
      fileName: `${moduleType}_report_${dateStr}.pdf`
    };
  } 
  
  else if (formatType === 'excel') {
    const buffer = await generateExcelBuffer(moduleType, headers, rows);
    return {
      buffer,
      contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      fileName: `${moduleType}_report_${dateStr}.xlsx`
    };
  } 
  
  else {
    throw new Error(`Unsupported download export format: '${formatType}'`);
  }
};
