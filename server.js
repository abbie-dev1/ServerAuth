// Import required modules
const express = require('express');
const session = require('cookie-session');
const cors = require('cors');

// Create an Express app
const app = express();

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all origins (customize as needed)
app.use(cors({
  origin: '*', // You can replace '*' with specific origin like 'http://localhost:3000'
  credentials: true,
}));

// Use cookie-session middleware to handle session storage
app.use(session({
  name: 'session',
  keys: ['your-secret-key'], // Replace with secure random keys in production
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Define a simple test route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
