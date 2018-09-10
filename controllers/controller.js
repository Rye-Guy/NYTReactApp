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
    },
    find: function(req, res){
        Article.find().then(function(doc){
            res.json(doc);
            console.log(doc);
        }).catch(function (err){
            res.json(err);
        })
    },
    delete: function(req, res){
        Article.deleteOne(req.body).then(function(doc){
            res.json(doc);
            console.log(doc);
        }).catch(function (err){
            res.json(err);
        })
    }
}