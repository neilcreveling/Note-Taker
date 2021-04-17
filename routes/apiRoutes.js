// dependencies
const fs = require('fs');
const db = require('../db/db.json');

// uuid - used to give each note a unique id when saved
const { v4: uuidv4 } = require('uuid');

// routes
module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        console.log('Note received!');
        const newNote = req.body;
        newNote.id = uuidv4();
        console.log(newNote.id);
        db.push(newNote);
        console.log(
            `'title': '${newNote.title}', 'text': '${newNote.text}' 'id': '${newNote.id}' posted to db.json`
        );
        fs.writeFile('../db/db.json', JSON.jstringify(db), (err) => {
            if (err) throw err;
            console.log('Posted new note')
            });
        res.json(newNote);
    });

    app.delete('/api/notes/:id'), (req, res) => {
        console.log(req.params.id);
        const newDB = db.filter((deleteNote) => deletedNote.id != req.params.id);
        fs.writeFile('../db/db.json', JSON.stringify(newDB), (err) => {
            if(err) throw err;
        });
        console.log('The note was successfully deleted!');
        res.json('success');
    };
}
