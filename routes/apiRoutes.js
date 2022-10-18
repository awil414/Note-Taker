// Setting up dependencies
const uuid = require('uuid');
const fs = require('fs');
const db = require('../db/db.json');
// const uuid = require('uuid');

// Routing
module.exports = (app) => {

    // GET api/notes reads the db.json file and returns saved notes as JSON
    app.get('/api/notes', (req, res) => {
        res.json(db);
    });


    // POST api/notes receives new note, adds to db.json file, and returns new note to user
    app.post('/api/notes', (req, res) => {
        let db = fs.readFile('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        // Creating body for note
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            // Creating uuid
            id: uuid(),
        };
    })
}