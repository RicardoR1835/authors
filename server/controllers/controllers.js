var mongoose = require('mongoose');
require('../models/models.js');

var Author = mongoose.model('Author'); //Any name is okay

module.exports={
    index: function(req, res){
        Author.find({}, function(err,author){
            if(err){
            console.log("Returned error", err);
                // respond with JSON
                res.json({
                    message: "Error",
                    error: err
                })
            } else {
                // respond with JSON
                res.json({
                    message: "Success",
                    data: author
                })
            }
        })
    },

    find: function (req, res) {
        Author.findOne({
            _id: req.params.id
        }, function (err, author) {
            if (err) {
                console.log("something went wrong", err);
                res.json({
                    message: "Error",
                    error: err
                })
            } else {
                console.log("successfully found")
                res.json({
                    message: "Success",
                    data: author
                })
            }
            
        })
    },

    create: function (req,res){
        var author = new Author();
        author.name = req.body.name;
        author.save(function(err, result){
            if(err){
                console.log("something went wrong", err);
                res.json({
                    message: "Error",
                    error: err
                })
            } else {
                console.log("successfully updated")
                res.json({message: "Success", result: result});
            }
        })
    },

    update: function(req,res){
        Author.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err,author){
            console.log(author);
            author.name = req.body.name;
            author.save(function(err,author){
                if(err){
                    console.log("something went wrong in edit", err);
                    res.json({
                        message: "Error",
                        error: err
                    })
                } else {
                    console.log("Successfully edited author!");
                    res.json({message: "Success", author: author});
                }
            })
        })
    },

    destroy: function(req,res){
        console.log("in delete");
        Author.findOne({_id: req.params.id}, function(err, author){
            author.remove(function(err){
                if(err){
                    console.log("something went wrong", err);
                    res.json({
                        message: "Error",
                        error: err
                    })
                } else {
                    console.log("successfully deleted");
                    res.json({message: "Success"})
                }
            })
        })
    },

}