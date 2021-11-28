const mongoose1 = require('mongoose');
const TaskSchema = new mongoose1.Schema({
name:{
   type:String,
   required:[true,'Must provide name'],
   trim:true,
    maxlength:[20,'name cannot be more than 20 characters'],
 


},
completed:{
    
    type:Boolean,
     default:false,
     
},
});

module.exports= mongoose1.model('Task',TaskSchema)