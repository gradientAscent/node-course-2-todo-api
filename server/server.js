var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp'); 

// Set Up Schema 
var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// Create Instance and Insert Document 

var newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((doc) => {
  console.log('saved todo', doc);
}, (e) => {
  console.log(e);
});

var newTodo2 = new Todo({
  text: 'Cook dinner',
  completed: true,
  completedAt: 121
});

newTodo2.save().then((doc) => {
  console.log('saved todo', doc);
}, (e) => {
  console.log(e);
});

