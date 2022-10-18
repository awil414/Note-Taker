// Setting up dependencies
const express = require('express');

// Setting up Express App
const app = express();

// Setting up port
const PORT = 3100;

// Setting up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require('./routes/apiRoutes')(app);
require('/routes/htmlRoutes')(app);

// Setting up listener
app.listen(PORT, () =>
    console.log(`App is listening at http://localhost:${PORT}`));