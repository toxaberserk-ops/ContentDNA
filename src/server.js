require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Auth endpoint
app.post('/api/auth/telegram', (req, res) => {
  res.json({ token: 'test-token', userId: 1 });
});

// Ideas endpoints
app.get('/api/ideas', (req, res) => {
  res.json([
    { id: 1, title: 'Test idea', created: new Date() }
  ]);
});

app.post('/api/ideas', (req, res) => {
  res.json({ id: 1, title: req.body.title });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
});