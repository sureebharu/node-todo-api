var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const port =process.env.port||3000;
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

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
     res.send({todos});
  },(e)=>{
     res.status(400).send(e);
  })
  })

app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
   if(!todo){
     return res.status(404).send();
   }
   res.send({todo});
  }).catch((e)=>{
    res.status(404).send();
  })

})
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


app.listen(port,()=>{
  console.log(`starting on port ${port}`);
});

//modules.export={app};



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