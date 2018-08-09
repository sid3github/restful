const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/hacking');

const server = express();


//connecting to your mongodb
mongoose.connect('mongodb://localhost/practice');

//bodyparser to fetch json data
server.use(bodyParser.json());

//all your routes
server.use('/api',dataRoutes);

server.listen(1001,function(){
    console.log('Port running on 1001');
});