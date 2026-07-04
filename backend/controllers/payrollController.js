import * as payrollService from '../services/payrollService.js';

/**
 * Controller to fetch the current user's monthly payroll slip
 */
export const getMySlipController = async (req, res, next) => {
  try {
    const slip = await payrollService.getMyPayrollSlip(req.user.id);
    
    if (!slip) {
      return res.status(404).json({
        status: 'success',
        message: 'No payroll records have been processed for you for the current month.',
        data: null
      });
    }

    res.status(200).json({
      status: 'success',
      data: slip
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get summary aggregate analytics for payroll processing (Admin/HR only)
 */
export const getPayrollSummaryController = async (req, res, next) => {
  try {
    const summary = await payrollService.getPayrollSummary();
    res.status(200).json({
      status: 'success',
      data: summary
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to process (insert/update) payroll for an employee (Admin/HR only)
 */
export const processPayrollController = async (req, res, next) => {
  try {
    const { employee_id, month, basic_salary, allowances, deductions, status } = req.body;

    const record = await payrollService.processPayroll({
      employee_id,
      month,
      basic_salary,
      allowances,
      deductions,
      status
    });

    res.status(200).json({
      status: 'success',
      message: 'Payroll record successfully executed/updated.',
      data: record
    });
  } catch (error) {
    next(error);
  }
};
