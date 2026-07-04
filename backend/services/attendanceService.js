import { supabase } from '../config/supabase.js';

/**
 * Helper function to calculate the date range of the current week (Monday to Friday)
 */
export const getWeeklyDateRange = () => {
  const today = new Date();
  const day = today.getDay(); // 0 is Sunday, 1 is Monday, etc.

  // Calculate Monday of current week
  const mondayDiff = today.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(today);
  monday.setDate(mondayDiff);
  monday.setHours(0, 0, 0, 0);

  // Calculate Friday of current week
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);
  friday.setHours(23, 59, 59, 999);

  return {
    start: monday.toISOString().split('T')[0],
    end: friday.toISOString().split('T')[0]
  };
};

/**
 * Service to register a check-in for an employee.
 */
export const checkIn = async (employeeId) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const nowStr = new Date().toISOString();

  // Check if an attendance record already exists for today
  const { data: existing, error: fetchError } = await supabase
    .from('attendance')
    .select('*')
    .eq('employee_id', employeeId)
    .eq('date', todayStr)
    .maybeSingle();

  if (fetchError) {
    throw new Error(`Failed to check existing attendance: ${fetchError.message}`);
  }

  if (existing) {
    throw new Error('You have already checked in for today.');
  }

  // Create new attendance check-in record
  const { data, error } = await supabase
    .from('attendance')
    .insert({
      employee_id: employeeId,
      date: todayStr,
      check_in: nowStr,
      status: 'Present'
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to register check-in: ${error.message}`);
  }

  return data;
};

/**
 * Service to register a check-out for an employee today.
 */
export const checkOut = async (employeeId) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const nowStr = new Date().toISOString();

  // Find today's active check-in record
  const { data: existing, error: fetchError } = await supabase
    .from('attendance')
    .select('*')
    .eq('employee_id', employeeId)
    .eq('date', todayStr)
    .maybeSingle();

  if (fetchError) {
    throw new Error(`Failed to retrieve active check-in: ${fetchError.message}`);
  }

  if (!existing) {
    throw new Error('No check-in record found for today. Please check in first.');
  }

  if (existing.check_out) {
    throw new Error('You have already checked out for today.');
  }

  // Update check-out time
  const { data, error } = await supabase
    .from('attendance')
    .update({
      check_out: nowStr,
      updated_at: nowStr
    })
    .eq('id', existing.id)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to register check-out: ${error.message}`);
  }

  return data;
};

/**
 * Service to fetch a user's attendance records for the current Monday-to-Friday week cycle.
 */
export const getMyWeeklyAttendance = async (employeeId) => {
  const { start, end } = getWeeklyDateRange();

  const { data, error } = await supabase
    .from('attendance')
    .select('*')
    .eq('employee_id', employeeId)
    .gte('date', start)
    .lte('date', end)
    .order('date', { ascending: true });

  if (error) {
    throw new Error(`Failed to retrieve weekly attendance: ${error.message}`);
  }

  return {
    range: { start, end },
    records: data
  };
};

/**
 * Service to fetch global attendance records for the overview grid/charts (Admin/HR only)
 */
export const getAllAttendance = async () => {
  const { data, error } = await supabase
    .from('attendance')
    .select(`
      *,
      employees (
        first_name,
        last_name,
        department,
        role
      )
    `)
    .order('date', { ascending: false });

  if (error) {
    throw new Error(`Failed to retrieve global attendance records: ${error.message}`);
  }

  return data;
};
