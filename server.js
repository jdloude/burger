var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var burgers = require('./controllers/burgers_controller.js');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', burgers);

app.listen(PORT, function(err) {
    if (err) throw err;
    console.log('Listening on Port:', PORT);
});