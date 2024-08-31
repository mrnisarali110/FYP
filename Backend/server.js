const express = require('express');
const cors = require('cors');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Function to generate a random 8-digit tracking number
function generateTrackingNumber() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

app.post('/generate-labels', (req, res) => {
  try {
    const orders = req.body; // Array of order details

    if (!orders || !Array.isArray(orders) || orders.length === 0) {
      return res.status(400).json({ error: 'Invalid order data' });
    }

    const pdfPath = path.join(__dirname, 'labels.pdf');
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(pdfPath));

    orders.forEach((order) => {
      // Add date and time at the top center
      const date = new Date().toLocaleString();
      doc.fontSize(12).text(date, { align: 'center' });
      doc.moveDown(4); // Add some space below "time"

      // Add "ELMS" at the top left corner
      doc.moveUp().fontSize(20).text('ELMS', { align: 'left' });

      doc.moveDown(0); // Add some space below "ELMS"

      // Create a box and print details inside it
      const boxX = 50; // X-coordinate for the box
      let boxY = doc.y + 10; // Y-coordinate for the box (dynamic)
      const boxWidth = 500; // Width of the box
      const boxHeight = 25; // Height for each row inside the box
      const padding = 10; // Padding inside the box

      Object.keys(order).forEach((key) => {
        if (key.toLowerCase() !== 'serialno') { // Skip SerialNo (case insensitive)
          doc.rect(boxX, boxY, boxWidth, boxHeight).stroke(); // Draw the box
          doc.fontSize(14).text(`${key}: ${order[key]}`, boxX + padding, boxY + padding, {
            width: boxWidth - padding * 2,
            height: boxHeight - padding * 2,
          });
          boxY += boxHeight; // Move Y-coordinate for the next row
        }
      });

      doc.moveDown(2); // Add space before the tracking number

      // Generate and add a random 8-digit tracking number in the center
      const trackingNumber = generateTrackingNumber();
      doc.fontSize(12).text(`Tracking Number: ${trackingNumber}`, { align: 'center' });

      // Add a page break for each label
      doc.addPage();
    });

    doc.end();

    res.json({ url: `http://localhost:${port}/labels.pdf` });
  } catch (error) {
    console.error('Error generating label:', error);
    res.status(500).json({ error: 'Failed to generate label' });
  }
});

// Serve the generated PDF labels
app.get('/labels.pdf', (req, res) => {
  const filePath = path.join(__dirname, 'labels.pdf');

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('File not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
