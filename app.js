const http = require('http');
const routes = require('./routes');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const server = http.createServer(routes.handler);
server.listen(3000);

