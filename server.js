const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

console.log(process.cwd());
app.use(express.static(process.cwd + '/public'));

let port = process.env.PORT || 2020;

app.listen(port, ()=>{
    console.log('app running on port:' + port);
});