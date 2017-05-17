var mongoose = require('mongoose');

// Tells mg to use global promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp'); 

module.exports = {mongoose};
