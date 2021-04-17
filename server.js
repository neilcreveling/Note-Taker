// dependencies
const fs = require('fs');
const express = require('express');
const db = require('./db/db.json');
const path = require('path');


// sets up express app
const app = express()
const PORT = process.env.PORT || 3030;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serves static files, creates public directory
app.use(express.static(path.join(__dirname + '/public')));

// routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);





// starts server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT: http://${PORT}`));