// server.js (Express 4.0)

var express        = require('express');


var app            = express();


app.use(express.static(__dirname + '/'));  // set the static files location /public/img will be /img for users



var router = express.Router();     // get an instance of the express Router



app.listen(process.env.PORT || 3000)

console.log('Magic happens on port:'+ process.env.PORT);    // shoutout to the user