const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
 if(err){
     return console.log("Unable to connect to server");
 }
 console.log("Connection eastablished with MongoDb server.");
 const db = client.db('TodoApp');

db.collection('User').find({name:'Bharathi'}).toArray().then((docs)=>{
    console.log('Users:');
    console.log(docs);
},(err)=>{
    console.log('unable to fetch users',err);
})
})
