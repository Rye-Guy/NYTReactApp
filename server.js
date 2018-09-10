const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

console.log(process.cwd());
app.use(express.static(__dirname + '/public'));


const db = 'mongodb://localhost/nytReactApp';
mongoose.connect(db, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Mongoose Connection Successful');
    }
});

const router = new express.Router();

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/index.html'));
});


const port = process.env.PORT || 2020;
app.listen(port, ()=>{
    console.log('app running on port:' + port);
});