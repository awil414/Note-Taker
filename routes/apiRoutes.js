// Setting up dependencies
const uuid = require('uuid');
const fs = require('fs');
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


    // GET api/notes reads the db.json file and returns saved notes as JSON
    note.get('/', (req, res) => {
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
      });


    // POST Route for a new UX/UI db
    note.post('/', (req, res) => {
        console.log(req.body);
  
        const { title, text } = req.body;
  
        if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;