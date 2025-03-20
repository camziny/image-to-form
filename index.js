require('dotenv').config();
const express = require('express');
const path = require('path');

// Import routes
const indexRoutes = require('./routes/index');
const uploadRoutes = require('./routes/upload');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Make sure uploads directory exists
const fs = require('fs');
const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Routes
app.use('/', indexRoutes);
app.use('/upload', uploadRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 