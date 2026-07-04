import PDFDocument from 'pdfkit';

/**
 * Generates a PDF buffer from a listing of table rows.
 * 
 * @param {string} title - Document header title
 * @param {string[]} headers - Array of string headers
 * @param {Array<Object>} rows - Array of objects mapped to database records
 * @returns {Promise<Buffer>} - Resolves containing the file Buffer
 */
export const generatePDFBuffer = (title, headers, rows) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      const chunks = [];

      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', (err) => reject(err));

      // Title header
      doc.fontSize(20).text(title, { align: 'center' });
      doc.moveDown(0.5);

      // Creation timestamp
      doc.fontSize(9).fillColor('#666666').text(`Compiled on: ${new Date().toLocaleString()}`, { align: 'right' });
      doc.moveDown(1.5);

      // Table layout values
      const startX = 50;
      let yPosition = doc.y;
      const columnCount = headers.length;
      const docWidth = 500; // 612 page width - 100 margin
      const columnWidth = docWidth / columnCount;

      // Draw Headers
      doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000');
      headers.forEach((header, index) => {
        doc.text(header, startX + index * columnWidth, yPosition, {
          width: columnWidth - 10,
          ellipsis: true
        });
      });

      // Divider Line
      doc.moveDown(0.4);
      const lineY = doc.y;
      doc.strokeColor('#dddddd').lineWidth(1).moveTo(50, lineY).lineTo(560, lineY).stroke();
      doc.moveDown(0.8);

      // Draw Rows
      doc.font('Helvetica').fontSize(9).fillColor('#333333');
      rows.forEach((row) => {
        // Page overflow protection
        if (doc.y > 720) {
          doc.addPage();
          yPosition = 50;

          // Re-draw Headers on new page
          doc.font('Helvetica-Bold').fontSize(10).fillColor('#000000');
          headers.forEach((header, index) => {
            doc.text(header, startX + index * columnWidth, yPosition, {
              width: columnWidth - 10,
              ellipsis: true
            });
          });

          doc.moveDown(0.4);
          const pageLineY = doc.y;
          doc.strokeColor('#dddddd').lineWidth(1).moveTo(50, pageLineY).lineTo(560, pageLineY).stroke();
          doc.moveDown(0.8);
          doc.font('Helvetica').fontSize(9).fillColor('#333333');
        }

        const rowY = doc.y;
        headers.forEach((header, index) => {
          const propertyKey = header.toLowerCase().replace(/ /g, '_');
          const value = row[propertyKey] !== undefined && row[propertyKey] !== null ? row[propertyKey] : '';
          doc.text(String(value), startX + index * columnWidth, rowY, {
            width: columnWidth - 10,
            lineBreak: false
          });
        });

        doc.moveDown(1.5);
      });

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};
