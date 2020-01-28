const mongoose = require('mongoose');
const config = require('../config');

mongoose.set('useCreateIndex', true);

mongoose.connect(config.MONGODBURI, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;


db.on('connected', function(){
    console.log("Mongoose default connection is open to ", config.MONGODBURI);
});

db.on('error', function(err){
    console.log(error("Mongoose default connection has occured "+err+" error"));
});

db.on('disconnected', function(){
    console.log(disconnected("Mongoose default connection is disconnected"));
});

process.on('SIGINT', function(){
    db.close(function(){
        console.log(termination("Mongoose default connection is disconnected due to application termination"));
        process.exit(0)
    });
});
