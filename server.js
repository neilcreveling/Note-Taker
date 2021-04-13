// dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const db = require('./db/db.json');

// uuid - used to give each note a unique id when saved
const { v4: uuidv4 } = require('uuid');

