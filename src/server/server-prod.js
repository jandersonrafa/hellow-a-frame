const express = require('express');
const path = require('path');
const app = express(), DIST_DIR = __dirname, HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.get('/', (request, response) => {
    response.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080

const BASE_URL = '/api';

app.get(BASE_URL + '/login', (req, res) => {

    res.status("401");
    res.json("Usuário ou senha invalido");

});

app.listen(PORT, () => {
    console.log(`THREE listening on ${PORT}. Press Ctrl+C to quit.`)
})