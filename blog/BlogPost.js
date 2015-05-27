var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogPostSchema = new Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
