import { supabase } from '../config/supabase.js';

/**
 * Service to apply for a new leave request.
 */
export const applyLeave = async (employeeId, leaveData) => {
  const { leave_type, start_date, end_date, remarks } = leaveData;

  const start = new Date(start_date);
  const end = new Date(end_date);
  if (end < start) {
    throw new Error('End date cannot be prior to start date.');
  }

  // Calculate duration in days (inclusive)
  const durationDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

  const { data, error } = await supabase
    .from('leaves')
    .insert({
      employee_id: employeeId,
      leave_type,
      start_date,
      end_date,
      days: durationDays,
      remarks,
      status: 'Pending'
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to submit leave request: ${error.message}`);
  }

  return data;
};

/**
 * Service to fetch all leave requests submitted by a specific employee.
 */
export const getMyLeaveRequests = async (employeeId) => {
  const { data, error } = await supabase
    .from('leaves')
    .select('*')
    .eq('employee_id', employeeId)
    .order('start_date', { ascending: false });

  if (error) {
    throw new Error(`Failed to retrieve leave history: ${error.message}`);
  }

  return data;
};

/**
 * Service to retrieve all pending leave requests across the organization (Admin/HR only).
 */
export const getPendingLeaveRequests = async () => {
  const { data, error } = await supabase
    .from('leaves')
    .select(`
      *,
      employees (
        first_name,
        last_name,
        department,
        role,
        leave_balance
      )
    `)
    .eq('status', 'Pending')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to retrieve pending leave requests: ${error.message}`);
  }

  return data;
};

/**
 * Service to review a leave request, updating its status and deducting from employee leave balance if approved.
 */
export const reviewLeaveRequest = async (leaveId, reviewData) => {
  const { status, admin_comments } = reviewData;

  if (!['Approved', 'Rejected'].includes(status)) {
    throw new Error('Invalid status update. Must be Approved or Rejected.');
  }

  // 1. Fetch the leave request details
  const { data: leaveRequest, error: fetchLeaveError } = await supabase
    .from('leaves')
    .select('*')
    .eq('id', leaveId)
    .single();

  if (fetchLeaveError || !leaveRequest) {
    throw new Error(`Leave request not found: ${fetchLeaveError?.message || 'Invalid ID'}`);
  }

  if (leaveRequest.status !== 'Pending') {
    throw new Error(`Leave request has already been reviewed. Current status is '${leaveRequest.status}'.`);
  }

  const start = new Date(leaveRequest.start_date);
  const end = new Date(leaveRequest.end_date);
  const durationDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

  // 2. If status is Approved, verify and deduct employee leave balance
  if (status === 'Approved') {
    // Fetch employee's current leave balance
    const { data: employee, error: fetchEmpError } = await supabase
      .from('employees')
      .select('leave_balance')
      .eq('id', leaveRequest.employee_id)
      .single();

    if (fetchEmpError || !employee) {
      throw new Error(`Employee profile lookup failed: ${fetchEmpError?.message || 'Profile not found'}`);
    }

    if (employee.leave_balance < durationDays) {
      throw new Error(`Insufficient leave balance. Requested: ${durationDays} days, available: ${employee.leave_balance} days.`);
    }

    // Deduct leave balance
    const newBalance = employee.leave_balance - durationDays;
    const { error: updateEmpError } = await supabase
      .from('employees')
      .update({ leave_balance: newBalance })
      .eq('id', leaveRequest.employee_id);

    if (updateEmpError) {
      throw new Error(`Deducting employee leave balance failed: ${updateEmpError.message}`);
    }
  }

  // 3. Update the leave request record
  const { data: updatedLeave, error: updateLeaveError } = await supabase
    .from('leaves')
    .update({
      status,
      admin_comments,
      updated_at: new Date().toISOString()
    })
    .eq('id', leaveId)
    .select()
    .single();

  if (updateLeaveError) {
    // Rollback attempt if database constraints permit, but in sequential flow we report the exception
    throw new Error(`Failed to update leave request status: ${updateLeaveError.message}`);
  }

  return updatedLeave;
};
