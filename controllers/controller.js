const Article = require('../models/Article');

module.exports = {
    insert: function(req, res){
        console.log(req.body);
        Article.create(req.body).then(function(doc){
            res.json(doc);
            console.log(doc);
        }).catch(function(err){
            res.json(err);
        });
    }
}