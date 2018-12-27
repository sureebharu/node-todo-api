var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.send(e);
  });
});

app.post('/user',(req,res)=>{
  var user = new User({
    user:req.body.user,
    email:req.body.email
  });

  user.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.send(e);
  });
});

app.listen(3000,()=>{
  console.log('starting on port 3000');
});



// var newUser= new user({
//   user:'Bharathi',
//   email:'bharathi.selvarajan@gmail.com'
// })

// newUser.save().then((doc)=>{
//   console.log(doc);
// },(e)=>{
//   console.log(e);
// })
// var newTodo = new todo({
//     text:'Do your homework',
//     Status:false
// });

// newTodo.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log(e);
// })