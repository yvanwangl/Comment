/**
 * Created by wyf on 2016/11/28.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    commentName:String,
    commentTime: Date,
    commentContent:String
});

module.exports = mongoose.model('Comment', commentSchema);