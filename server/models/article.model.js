const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  intro: String
  // text: Array,
  // subject: String,
  // reading_time: String,
  // url: String,
  // authors: Array,
  // publisher: String,
  // topics: Array
});

const Article = mongoose.model('Article', articleSchema, 'articles');

module.exports = Article;
