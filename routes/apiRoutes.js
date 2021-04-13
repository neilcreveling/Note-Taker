// dependencies
const fs = require('fs');
const db = require('./db/db.json');

// uuid - used to give each note a unique id when saved
const { v4: uuidv4 } = require('uuid');

// routes
module.exports = (app) => {

    app.get('/api/notes', (req/ res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        console.log('Note received!');
        const newNote = req.body;
        newNote.id = uuidv4();
        fs.readFile('./db/db.json', function(err, data) {
            var list = JSON.parse(data);
            list.push(newNote);
            fs.writeFile('./db.db.json', JSON.jstringify(list), function (err) {
                if (err) throw err;
            });
        });
        res.json('Successfully posted new note!');
    });


}
