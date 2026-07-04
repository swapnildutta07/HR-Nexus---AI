import { supabase } from '../config/supabase.js';

/**
 * Service to retrieve the current month's payroll slip details for the logged-in user.
 */
export const getMyPayrollSlip = async (employeeId) => {
  const currentMonth = new Date().toISOString().substring(0, 7); // Format: "YYYY-MM"

  const { data, error } = await supabase
    .from('payroll')
    .select('*')
    .eq('employee_id', employeeId)
    .eq('month', currentMonth)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to retrieve payroll slip: ${error.message}`);
  }

  return data || null; // Returns null if not processed yet
};

/**
 * Service to aggregate month-level payroll processing metrics for administrators.
 */
export const getPayrollSummary = async () => {
  const currentMonth = new Date().toISOString().substring(0, 7); // Format: "YYYY-MM"

  // 1. Fetch count of active employees to check progress
  const { count: totalActiveCount, error: empError } = await supabase
    .from('employees')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'active');

  if (empError) {
    throw new Error(`Failed to count active employees for payroll calculations: ${empError.message}`);
  }

  // 2. Fetch processed payroll records for the current month
  const { data: processedRecords, error: payError } = await supabase
    .from('payroll')
    .select('amount, status')
    .eq('month', currentMonth);

  if (payError) {
    throw new Error(`Failed to load processed payroll for calculations: ${payError.message}`);
  }

  const processedCount = processedRecords ? processedRecords.length : 0;
  const totalDisbursed = processedRecords
    ? processedRecords.reduce((sum, item) => sum + (item.amount || 0), 0)
    : 0;

  // Breakdown counts of payroll statuses
  const statusCounts = processedRecords
    ? processedRecords.reduce((acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1;
        return acc;
      }, {})
    : {};

  return {
    month: currentMonth,
    totalActiveEmployees: totalActiveCount || 0,
    processedEmployeesCount: processedCount,
    unprocessedEmployeesCount: Math.max(0, (totalActiveCount || 0) - processedCount),
    totalDisbursedAmount: totalDisbursed,
    statusBreakdown: statusCounts
  };
};

/**
 * Service to insert or update (upsert) a payroll execution entry for an employee.
 */
export const processPayroll = async (payrollData) => {
  const { employee_id, month, basic_salary, allowances, deductions, status } = payrollData;

  if (!employee_id || !month) {
    throw new Error('Employee ID and Month (YYYY-MM) are required fields.');
  }

  // Calculate net salary amount
  const netAmount = Number(basic_salary || 0) + Number(allowances || 0) - Number(deductions || 0);

  // Check if a payroll record already exists for this employee and month
  const { data: existing, error: findError } = await supabase
    .from('payroll')
    .select('id')
    .eq('employee_id', employee_id)
    .eq('month', month)
    .maybeSingle();

  if (findError) {
    throw new Error(`Error checking existing payroll status: ${findError.message}`);
  }

  let result;

  if (existing) {
    // Update existing record
    const { data, error } = await supabase
      .from('payroll')
      .update({
        basic_salary: Number(basic_salary || 0),
        allowances: Number(allowances || 0),
        deductions: Number(deductions || 0),
        amount: netAmount,
        status: status || 'Processed',
        updated_at: new Date().toISOString()
      })
      .eq('id', existing.id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update payroll entry: ${error.message}`);
    }
    result = data;
  } else {
    // Insert new payroll record
    const { data, error } = await supabase
      .from('payroll')
      .insert({
        employee_id,
        month,
        basic_salary: Number(basic_salary || 0),
        allowances: Number(allowances || 0),
        deductions: Number(deductions || 0),
        amount: netAmount,
        status: status || 'Processed'
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create new payroll entry: ${error.message}`);
    }
    result = data;
  }

  return result;
};
