import * as employeeService from '../services/employeeService.js';

/**
 * Controller to fetch dashboard aggregated metrics (Admin/HR only)
 */
export const getDashboardSummaryController = async (req, res, next) => {
  try {
    const summary = await employeeService.getDashboardSummary();
    res.status(200).json({
      status: 'success',
      data: summary
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get current logged-in employee profile
 */
export const getMyProfileController = async (req, res, next) => {
  try {
    // req.user profile is already fetched and attached by requireAuth middleware
    res.status(200).json({
      status: 'success',
      data: req.user
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to list all employees (Admin/HR only)
 */
export const listEmployeesController = async (req, res, next) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json({
      status: 'success',
      results: employees.length,
      data: employees
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update profile information for the logged-in user
 */
export const updateMyProfileController = async (req, res, next) => {
  try {
    const { phone, address, profile_picture } = req.body;

    const updatedProfile = await employeeService.updateEmployeeProfile(req.user.id, {
      phone,
      address,
      profile_picture
    });

    res.status(200).json({
      status: 'success',
      message: 'Profile updated successfully',
      data: updatedProfile
    });
  } catch (error) {
    next(error);
  }
};
