const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
 if(err){
     return console.log("Unable to connect to server");
 }
 console.log("Connection eastablished with MongoDb server.");
 const db = client.db('TodoApp');

 db.collection('User').deleteOne({name:'Reena'}).then((res)=>{
  console.log(res);
 }
 )
})
