const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
 if(err){
     return console.log("Unable to connect to server");
 }
 console.log("Connection eastablished with MongoDb server.");
 const db = client.db('TodoApp');
//  db.collection('Todos').insertOne({
//      text:'complete 1o modules',
//      status:'In progress',
//      owner:'Bharathi'
//  },(err,res)=>{
//      if(err){
//         return console.log('Cannot insert the collection')
//      }
//      console.log(JSON.stringify(res.ops,undefined,2));
//  })

// user collection
//const db = client.db('User');
db.collection('User').insertOne({
    name:'Bharathi',
    age:34,
    location:'India'
},(err,res)=>{
    if(err){
        return console.log('Unable to insert User collection');
    }
    console.log(JSON.stringify(res.ops,undefined,2));

});
 client.close();
})
