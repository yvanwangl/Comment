/**
 * Created by wyf on 2016/11/28.
 */
var express = require('express');
var router = express.Router();
var Comment = require('../models/comments');

router.route('/')
    .post(function(req, res){
        var commentData = req.body;
        var comment = new Comment({
            commentName: commentData['commentName'],
            commentTime: new Date(),
            commentContent: commentData['commentContent']
        });
        comment.save(function(err, newComment){
            if(err){
                res.send(err);
            }else {
                res.send({
                    is_success: true,
                    comment : newComment
                });
            }
        })
    })
    .get(function (req, res, next) {
        Comment.find(function(err, comments){
            if(err) {
                res.send(err);
            }else {
                res.send({
                    is_success:true,
                    comments:comments
                })
            }
        })
    });

router.route('/:commentId')
    .get(function(req, res, next){
        var commentId = req.params.commentId;
        Comment.findById(commentId, function (err, comment) {
            if(err){
                res.send(err);
            }else {
                res.send({
                    is_success: true,
                    comment: comment
                });
            }
        });
    })
    .put(function (req, res, next) {
        var commentData = req.body;
        commentData['commentTime'] = new Date();
        Comment.findOneAndUpdate({_id:req.params.commentId}, commentData, function(err, newComment){
            if(err){
                res.send(err);
            }else {
                res.send({
                    is_success: true,
                    comment: newComment
                });
            }
        });
    })
    .delete(function (req, res, next) {
        Comment.findOneAndRemove({_id:req.params.commentId}, function (err, comment) {
            if(err){
                res.send(err);
            }else {
                res.send({
                    is_success:true,
                    comment: comment
                });
            }
        })
    });

module.exports = router;