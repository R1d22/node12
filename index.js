const express = require('express');
const path = require('path');
//Routers
const mainRouter = require('./routers/main.js');



const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({extended: false}));
server.use('/', mainRouter);





server.listen(9000);