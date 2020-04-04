const express = require('express');
const app = express();
let routes = require('./routes/include')
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static('public'));
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',routes.adminPage);
app.use('/',routes.getPost);
app.use('/',routes.indexPage);

app.listen(3000);
