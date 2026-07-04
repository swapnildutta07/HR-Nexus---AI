import * as attendanceService from '../services/attendanceService.js';

/**
 * Controller to handle check-in for the current user
 */
export const checkInController = async (req, res, next) => {
  try {
    const record = await attendanceService.checkIn(req.user.id);
    res.status(201).json({
      status: 'success',
      message: 'Checked in successfully.',
      data: record
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to handle check-out for the current user
 */
export const checkOutController = async (req, res, next) => {
  try {
    const record = await attendanceService.checkOut(req.user.id);
    res.status(200).json({
      status: 'success',
      message: 'Checked out successfully.',
      data: record
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get current user's weekly attendance record
 */
export const getMyWeeklyController = async (req, res, next) => {
  try {
    const weeklyData = await attendanceService.getMyWeeklyAttendance(req.user.id);
    res.status(200).json({
      status: 'success',
      data: weeklyData
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to fetch all attendance records (Admin/HR only)
 */
export const getAllAttendanceController = async (req, res, next) => {
  try {
    const records = await attendanceService.getAllAttendance();
    res.status(200).json({
      status: 'success',
      results: records.length,
      data: records
    });
  } catch (error) {
    next(error);
  }
};
