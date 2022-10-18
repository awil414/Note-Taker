// Setting up dependencies
const express = require('express');
// const fs = require('fs');
const path = require('path');

// Setting up Express App
const app = express();

// Setting up port
const PORT = process.env.PORT || 3001;

// Middleware -- setting up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Setting up static path
app.use(express.static('public'));

// GET basic routes
require('./routes/apiRoutes')(app);
require('/routes/htmlRoutes')(app);

// Setting up listener
app.listen(PORT, () =>
    console.log(`App is listening at PORT:${PORT}`));