const express = require('express');
const port = 8000;
const app = express();
const cors = require('cors');

const db = require("./config/mongoose");

const bodyParser = require("body-parser");

//---- require passport ans jwt strategy for authentication
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
const passportLocal= require('./config/passport-local-strategy');

//---- to fetch data from url
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

//---- tell app to use passport
app.use(passport.initialize());


//--- use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server:',err);
        return;
    } 
    console.log('Server is up and running at port:',port);
})