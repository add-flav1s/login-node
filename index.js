const express = require('express');
const session = require('express-session');

const port = 8082;
var path = require('path');
const app = express();

app.use(session({
    secret: 'ssshhhhh'
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})