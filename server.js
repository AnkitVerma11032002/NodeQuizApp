// server.js
const express = require('express');
const bodyParser = require('body-parser');
const quizRoutes = require('./src/routes/quizRoute');
const path=require("path")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/api', quizRoutes);

// Serve static files (HTML, CSS, JavaScript)

app.use(express.static(path.join(__dirname, 'public')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
