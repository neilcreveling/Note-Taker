// dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const db = require('./db/db.json');

// uuid - used to give each note a unique id when saved
const { v4: uuidv4 } = require('uuid');

// sets up express app
const app = express()
const PORT = process.env.PORT || 8000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());