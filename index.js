const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');



const port = 8082;
var path = require('path');
const app = express();

app.use(session({
    secret: 'cookie_secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.post('/', (req, res) => {
    console.log(req.body.login);
    res.render('index');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

module.exports = app;