const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if (err) {
    return console.log('Unable to connect to db server');
  }
  console.log('Connected to MongoDB server');
  
  // deleteMany
  db.collection('Todos').deleteMany({text: 'bake cookies'}).then((result) => {
    console.log(result);
  });
  // deleteOne
  db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
    console.log(result);
  });
  // findAndDelete
  db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
    console.log(result);
  });  
  db.close();
});