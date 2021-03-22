"use strict";

// This code will import SQLite library.
const sqlite3 = require("sqlite3").verbose();

// This code intructs the application layer to use planetdoctor classes
const planetdocotor = require("../planetdoctor.js");

// This code will connect to the planetdocotor database.
var db = new sqlite3.Database("data/planetdoctor.db", function(err) {
    // this code will run in case of an error
    if (err) {
        return console.error(err.message);
    }
    // This code will run if there is no error
    console.log("You are now Connected to planetdoctor database.");
});
