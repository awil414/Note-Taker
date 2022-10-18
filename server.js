// Setting up dependencies
const express = require('express');

// Setting up Express App
const app = express();

// Setting up port
const PORT = process.env.PORT || 3001;

// Setting up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require('./routes/apiRoutes')(app);
require('/routes/htmlRoutes')(app);

// Setting up listener
app.listen(PORT, () =>
    console.log(`App is listening at PORT:${PORT}`));