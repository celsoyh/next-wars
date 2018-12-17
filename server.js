const express = require('express')
const next = require('next')
const request = require('request');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/', async (req, res) => {     
            var results;       
            request('https://swapi.co/api/people/', function(err, resp, body) {
                results = JSON.parse(body).results;

                app.render(req, res, '/', {results});
            })
        })

        server.get('/p/:id', (req, res) => {
            console.log('req :', req);
            console.log('res :', res);
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000');
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })