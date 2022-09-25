const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const app = express();

// views folder
app.set('views', path.join(__dirname, 'views'));
// ejs engine
app.set('view engine', 'ejs');
// static paths in project
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const homeRoutes = require('./routes/homeController');
const umzugRoutes = require('./routes/umzugController');
const dienstleistungenRoutes = require('./routes/dienstleistungenController');

// use Middlewares in App (Routes)
app.use(homeRoutes);
app.use(umzugRoutes);
app.use(dienstleistungenRoutes);

// Connection on Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('> Server is running on port : ' + port)
})