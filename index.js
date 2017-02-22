const express = require('express'),
      morgan = require('morgan'), //middle ware for console.log's in the terminal (debugging)
      bodyParser = require('body-parser'),
      cookieSession = require('cookie-session'),
      ejs = require('ejs');

var app = express();

/* Using the sessions */
app.use(session({secret: 'secretkey'}))


/* If there is no to do list in the session, 
we create an empty one in the form of an array before continuing */
.use(function(req, res, next){
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    next();
})

app.set('view engine', 'ejs');

//server//
app.listen(3000, function() {
    console.log('Web server started on port 3000');
});