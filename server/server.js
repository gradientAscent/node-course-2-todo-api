var express = require('express');
var bodyParser= require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//  allows us to receive json 
app.use(bodyParser.json()); 

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.listen(3000, () =>{
  console.log('Started on port 3000');
});



// Create Instance and Insert Document 
// var newTodo2 = new Todo({
//   text: ' lets see' 
// });



// var newUser = new User({
//   email: 'hillis18@gmail.com'
// });

// newUser.save().then((doc) => {
//   console.log('saved user', doc);
// }, (e) => {
//   console.log(e);
// });
