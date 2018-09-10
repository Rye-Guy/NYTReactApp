const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    snippet:{
        type: String,
        unique: true
    },
    date:{
        type: String
    },
    url:{
        type: String,
        unique: true
    }
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;