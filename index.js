const express = require('express'),
      morgan = require('morgan'), //middle ware for console.log's in the terminal (debugging)
      bodyParser = require('body-parser'),
      cookieSession = require('cookie-session'),
      ejs = require('ejs');


var app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response)=> {
  response.render('todo')
});
//server//
app.listen(3000, function() {
    console.log('Web server started on port 3000');
});
