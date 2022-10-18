// Setting up dependencies
const fs = require('fs');
const db = require('../db/db.json');
const uuid = require('uuid');

// Routing
module.exports = (app) => {
    // GET api/notes reads the db.json file and returns saved notes as JSON
    app.get('/api/notes', (req, res) => res.json(db));
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    })
}