import * as leaveService from '../services/leaveService.js';

/**
 * Controller to apply for a leave request
 */
export const applyLeaveController = async (req, res, next) => {
  try {
    const { leave_type, start_date, end_date, remarks } = req.body;
    
    const record = await leaveService.applyLeave(req.user.id, {
      leave_type,
      start_date,
      end_date,
      remarks
    });

    res.status(201).json({
      status: 'success',
      message: 'Leave request submitted successfully.',
      data: record
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to fetch all leave requests of the current logged-in employee
 */
export const getMyLeaveRequestsController = async (req, res, next) => {
  try {
    const records = await leaveService.getMyLeaveRequests(req.user.id);
    res.status(200).json({
      status: 'success',
      results: records.length,
      data: records
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to list all pending leave requests across the company (Admin/HR only)
 */
export const getPendingLeaveRequestsController = async (req, res, next) => {
  try {
    const records = await leaveService.getPendingLeaveRequests();
    res.status(200).json({
      status: 'success',
      results: records.length,
      data: records
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to review (Approve/Reject) a pending leave request (Admin/HR only)
 */
export const reviewLeaveRequestController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, admin_comments } = req.body;

    const record = await leaveService.reviewLeaveRequest(id, {
      status,
      admin_comments
    });

    res.status(200).json({
      status: 'success',
      message: `Leave request has been successfully ${status.toLowerCase()}.`,
      data: record
    });
  } catch (error) {
    next(error);
  }
};
