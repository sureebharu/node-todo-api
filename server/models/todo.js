var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
    text:{
      type:String
    },
    Status:{
      type:Boolean
    },
    compledAt:{
      type:Number
    }
});
module.exports = {Todo};