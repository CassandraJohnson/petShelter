var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const path = require('path'); 
const flash = require('express-flash');
app.use(flash());

app.use(express.static(path.join( __dirname + '/public/dist/public' )));

var session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
require('./server/config/mongoose');
require('./server/config/routes')(app);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.listen(7150, function(){
    console.log('listening at port 7150');
})

