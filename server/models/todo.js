var mongoose = require('mongoose');

// Set Up Schema 
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true 
  },
  completed: {
    type: Boolean,
    default: false 
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};