const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS to allow requests from your React frontend
app.use(cors());

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Node.js server is running');
});

// API route (e.g., to get data)
app.get('/api/data', (req, res) => {
  const sampleData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  res.json(sampleData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
