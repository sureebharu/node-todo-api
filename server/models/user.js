var mongoose = require('mongoose');
var User = mongoose.model('user',{
    user:{
      type:String,
      required:true,
      minlength:1
    },
    email:{
      type:String,
      required:true,
      minlength:true,
      trim:true
    }
  });
  module.exports = {User};