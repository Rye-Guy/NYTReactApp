const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");
const port = process.env.PORT || 3001;
const app = express();
//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log(process.cwd());
if(process.NODE_ENV === "production"){
app.use(express.static('client/build/'));
}
//CORS Set up
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//Routes and controller
const controller = require('./controllers/controller');
const router = new express.Router();

router.get('/api/saved', controller.find);
router.post('/api/saved', controller.insert);
router.delete('/api/saved', controller.delete);
// router.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

app.use(router);
//DB Connection
const db = process.env.MONGODB_URI || 'mongodb://localhost/nytReactApp';
mongoose.Promise = Promise;

mongoose.connect(db, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Mongoose Connection Successful');
    }
});
//Run Server

app.listen(port, ()=>{
    console.log('app running on port:' + port);
});