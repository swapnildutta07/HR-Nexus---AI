import ExcelJS from 'exceljs';

/**
 * Generates an Excel spreadsheet (xlsx) buffer from a listing of table rows.
 * 
 * @param {string} sheetName - Title of the worksheet
 * @param {string[]} headers - Array of string headers
 * @param {Array<Object>} rows - Array of objects mapped to database records
 * @returns {Promise<Buffer>} - Resolves containing the file Buffer
 */
export const generateExcelBuffer = async (sheetName, headers, rows) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(sheetName);

  // Set column mappings
  worksheet.columns = headers.map((header) => {
    const key = header.toLowerCase().replace(/ /g, '_');
    return {
      header: header,
      key: key,
      width: 22
    };
  });

  // Apply basic styling to the header row
  const headerRow = worksheet.getRow(1);
  headerRow.font = {
    name: 'Segoe UI',
    family: 4,
    size: 11,
    bold: true,
    color: { argb: 'FFFFFFFF' }
  };
  headerRow.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F4E78' } // Sleek navy background
  };
  headerRow.alignment = { vertical: 'middle', horizontal: 'left' };

  // Add data rows
  rows.forEach((row) => {
    worksheet.addRow(row);
  });

  // Write sheet to array buffer
  const buffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(buffer);
};
