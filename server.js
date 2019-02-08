var express = require('express')
var app = express()
var server = require('http').Server(app)
var request = require('request')
require('dotenv').load()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    next()
})

app.get('/', (req, res) => {
    var options = {
        url: req.query.url,
        headers: {
            'X-Auth-Token': process.env.API_KEY
        }
    }
    request(options, (error, response, body) => {
        return body ? res.json(JSON.parse(body)) : ""
    })  
})

server.listen(3000, () => console.log('Listening on port 3000'))