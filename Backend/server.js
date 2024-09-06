const express = require('express');
const cors = require('cors');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const qr = require('qr-image');  // Import the qr-image package

const authRoutes = require("./routers/auth.routers");

const app = express();
const PORT = process.env.PORT || 3001;
mongoose.connect('mongodb+srv://test:test123@cluster0.o0nfgkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Global Middleware
app.use(express.json());
app.use(cors());

// APIs Router Register here.
app.use("/auth", authRoutes);
app.get("/testing", (req, res) => {
  res.status(200).json({ message: "Server live" });
});

// Function to generate a random 8-digit tracking number
function generateTrackingNumber() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

// Core business logic
app.post("/generate-labels", (req, res) => {
  try {
    const orders = req.body; // Array of order details

    if (!orders || !Array.isArray(orders) || orders.length === 0) {
      return res.status(400).json({ error: "Invalid order data" });
    }

    const pdfPath = path.join(__dirname, "labels.pdf");
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(pdfPath));

    orders.forEach((order) => {
      // Add date and time at the top center
      const date = new Date().toLocaleString();
      doc.fontSize(12).text(date, { align: "center" });
      
      // Add space below the date
      doc.moveDown(1);

      // Generate the QR code
      const qrCode = qr.imageSync('https://iqra.edu.pk/', { type: 'png' });

      // Add the QR code to the top right corner
      const qrCodeWidth = 80; // Width of the QR code image
      doc.image(qrCode, doc.page.width - qrCodeWidth - 50, 50, { fit: [qrCodeWidth, qrCodeWidth] });

      // Add "ELMS" below the QR code, at the top left corner
      doc.fontSize(24).font('Helvetica-Bold').text('ELMS', 50, 140);

      // Add some space below "ELMS"
      doc.moveDown(1); // Adds a default space

      // Create a box and print details inside it
      const boxX = 50; // X-coordinate for the box
      let boxY = 180; // Y-coordinate for the box (adjusted to start below "ELMS")
      const boxWidth = 500; // Width of the box
      const boxHeight = 25; // Height for each row inside the box
      const padding = 10; // Padding inside the box

      Object.keys(order).forEach((key) => {
        if (key.toLowerCase() !== "serialno") {
          // Skip SerialNo (case insensitive)
          doc.rect(boxX, boxY, boxWidth, boxHeight).stroke(); // Draw the box
          doc.fontSize(14).font('Helvetica-Bold').text(`${key}: ${order[key]}`, boxX + padding, boxY + padding, {
            width: boxWidth - padding * 2,
            height: boxHeight - padding * 2,
          });
          boxY += boxHeight; // Move Y-coordinate for the next row
        }
      });

      doc.moveDown(2); // Add space before the tracking number

      // Generate and add a random 8-digit tracking number in the center
      const trackingNumber = generateTrackingNumber();
      doc.fontSize(12).font('Helvetica').text(`Tracking Number: ${trackingNumber}`, { align: "center" });

      // Add a page break for each label
      doc.addPage();
    });

    doc.end();

    res.json({ url: `http://localhost:${PORT}/labels.pdf` });
  } catch (error) {
    console.error("Error generating label:", error);
    res.status(500).json({ error: "Failed to generate label" });
  }
});

// Serve the generated PDF labels
app.get("/labels.pdf", (req, res) => {
  const filePath = path.join(__dirname, "labels.pdf");

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("File not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
