import * as reportService from '../services/reportService.js';

/**
 * Controller to compile and download documents (PDF or Excel files)
 */
export const downloadReportController = async (req, res, next) => {
  try {
    const { module, format } = req.query;

    if (!module || !format) {
      return res.status(400).json({
        status: 'error',
        statusCode: 400,
        message: 'Query parameters "module" (employees|attendance|leaves) and "format" (pdf|excel) are required.'
      });
    }

    const report = await reportService.compileDocumentReport(module, format.toLowerCase());

    // Configure client headers for binary downloading
    res.setHeader('Content-Type', report.contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${report.fileName}"`);
    res.setHeader('Content-Length', report.buffer.length);

    // Send the compiled file buffer
    res.send(report.buffer);
  } catch (error) {
    next(error);
  }
};
