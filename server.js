// Setting up dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const app = express();

// Setting up port
const PORT = process.env.PORT || 3001;

// Middleware -- setting up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);
// Setting up static path
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Setting up listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
