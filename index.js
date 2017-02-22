const express = require('express'),
      morgan = require('morgan'), //middle ware for console.log's in the terminal (debugging)
      bodyParser = require('body-parser'),
      cookieSession = require('cookie-session');


var app = express();

app.set('view engine', EJS);
