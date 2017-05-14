const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if (err) {
    return console.log('Unable to connect to db server');
  }
  console.log('Connected to MongoDB server');
  
  // deleteMany
  db.collection('Todos').findOneAndUpdate({text: 'bake cookies'}).then((result) => {
    console.log(result);
  });
  db.close();
});