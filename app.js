const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/audio', (req, res) => {
    res.sendFile('assets/audio.mp3', { root: __dirname });
});

app.listen(4000, () => {
    console.log('Listening on port 4000!')
});