const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/hacking');

const server = express();

mongoose.connect('mongodb://localhost/practice');

server.use(bodyParser.json());

server.use('/api',dataRoutes);

server.listen(1001,function(){
    console.log('Port running on 1001');
});