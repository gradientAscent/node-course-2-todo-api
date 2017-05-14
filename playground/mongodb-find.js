const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if (err) {
    return console.log('Unable to connect to db server');
  }
  console.log('Connected to MongoDB server');
  
  // db.collection('Todos').find({
  //     _id: new ObjectID('5917a5a53357236a89c07954')
  //   }).toArray().then((docs)=> {
  //   console.log(JSON.stringify(docs, undefined, 2));  
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);  
  // }); 

  db.collection('Users').find({name: 'Andrew Hillis'}).toArray().then((docs)=> {
    console.log(JSON.stringify(docs, undefined, 2));  
  }, (err) => {
    console.log('Unable to fetch users', err);  
  }); 

  // db.collection('Todos').find().count().then((count)=> {
  //   console.log(`# of ToDos: ${count}`);  
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);  
  // }); 

  db.close();
});


  // // new to do
  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  
  // // new to do
  // db.collection('Users').insertOne({
  //     name: "Andrew Hillis",
  //     age: 29,
  //     location: "Cambridge"
  //   }, (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert user', err);
  //     }
  //     console.log(result.ops[0]._id.getTimestamp());

  //   });