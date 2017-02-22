const express = require('express'),
      morgan = require('morgan'), //middle ware for console.log's in the terminal (debugging)
      bodyParser = require('body-parser'),
      cookieSession = require('cookie-session'),
      ejs = require('ejs');

//shows the todo list

app.GET('/todo', (request, response) {

});

app.POST('/newtask', (request, response) {
    request.session.todoloist
});