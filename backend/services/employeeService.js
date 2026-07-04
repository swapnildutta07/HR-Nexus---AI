import { supabase } from '../config/supabase.js';

/**
 * Service to calculate summary stats for the Admin/HR dashboard.
 * Queries counts for active employees, present employees today, and pending leaves.
 */
export const getDashboardSummary = async () => {
  const todayStr = new Date().toISOString().split('T')[0];

  // 1. Total Active Employees
  const { count: activeCount, error: activeError } = await supabase
    .from('employees')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'active');

  if (activeError) {
    throw new Error(`Failed to retrieve active employees count: ${activeError.message}`);
  }

  // 2. Employees Present Today (Checking the attendance table for today's date)
  const { count: presentCount, error: presentError } = await supabase
    .from('attendance')
    .select('*', { count: 'exact', head: true })
    .eq('date', todayStr);

  if (presentError) {
    throw new Error(`Failed to retrieve present attendance count: ${presentError.message}`);
  }

  // 3. Pending Leave Requests (Checking standard leave requests table)
  const { count: pendingLeavesCount, error: leavesError } = await supabase
    .from('leave_requests')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'pending');

  if (leavesError) {
    throw new Error(`Failed to retrieve pending leave requests count: ${leavesError.message}`);
  }

  return {
    totalActiveEmployees: activeCount || 0,
    presentToday: presentCount || 0,
    pendingLeaves: pendingLeavesCount || 0,
  };
};

/**
 * Service to fetch all employee records from the DB.
 */
export const getAllEmployees = async () => {
  const { data, error } = await supabase
    .from('employees')
    .select('*')
    .order('first_name', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch employee list: ${error.message}`);
  }
  return data;
};

/**
 * Service to update profile details for an employee.
 */
export const updateEmployeeProfile = async (employeeId, profileData) => {
  const { phone, address, profile_picture } = profileData;

  const { data, error } = await supabase
    .from('employees')
    .update({
      phone,
      address,
      profile_picture,
      updated_at: new Date().toISOString()
    })
    .eq('id', employeeId)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to update employee profile: ${error.message}`);
  }
  return data;
};
