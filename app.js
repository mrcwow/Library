var express = require('express');
var server = express();
var routes = require('./routes');
var cookieParser = require('cookie-parser');
var session = require('express-session')

server.use(cookieParser());
server.use(express.json());
server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));
server.set('view engine', 'pug');
server.set('views', 'views');
server.use(session({secret: 'ses', resave: false, saveUninitialized: false,}))

server.use('/',routes);
server.listen(3000);
module.exports = server;