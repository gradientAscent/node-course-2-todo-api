const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID();
console.log(obj);

var user = {name: 'Andrew', age: 25};
var {name} = user
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if (err) {
    return console.log('Unable to connect to db server');
  }
  console.log('Connected to MongoDB server');
  db.close();
});
