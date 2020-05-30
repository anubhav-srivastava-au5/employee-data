const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express();
dotenv.config();
require('./db')
const cors = require('cors')

var path = require('path');
var hbs = require('hbs');
var methodOverride = require('method-override');

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views", "pages"));
app.set("view options", { layout: "../layouts/default" });
//hbs.registerPartials(path.join(__dirname, "views", "partials"));
//app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(cors())
const empRoutes = require('./routes/employee')
const cmpRoutes = require('./routes/company');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const port = process.env.PORT || 8000

app.get('/',(req,res,next)=>
res.render('home'))

app.get('/register',(req,res,next)=>
res.render('register'))

app.get('/login',(req,res,next)=>
res.render('login'))

app.get('/company',(req,res,next)=>
res.render('company'))

app.use('/company',cmpRoutes);
app.use('/employee',empRoutes);


app.listen(port,function(){
    console.log(`server is running on port no : ${port}`)
})
