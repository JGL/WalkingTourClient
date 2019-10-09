const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// File System for loading the list of words
let fs = require('fs');

app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));
// for parsing application/json - need this to be able to parse the body of a json file from the request object
app.use(express.json());
