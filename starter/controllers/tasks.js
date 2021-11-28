//const { model } = require('mongoose')
const Task1 = require('../Models/task')
const  getAllTasks = async (req,res)=>{
 
  try{

       const  tasks = await Task1.find({})
        res.status(200).json({tasks:tasks})

  } catch(error)
{
   res.status(500).json({msg:error});

}
}

const createTask= async (req,res)=>{
  
 try{

       
  const task = await Task1.create(req.body)
  res.status(201).json({task}); 
    
 } catch(error){

   res.status(500).json({
         
        msg:error

   });

 }

}
const getTask = async (req,res)=>{

  try {
      const {id: taskID} = req.params
      console.log(req.params)
      const task = await Task1.findOne({_id: taskID})

      if(!task){
            
        return res.status(202).json("NOT FOUND")
      }
      return res.status(202).json(task);

  } catch (error) { 
    res.status(500).json({msg:error})
  }

}

const updateTask=(req,res)=>{
 res.send('update task');
    }


    const deleteTask = (req,res)=>{

     res.send('deleteTask');
       
    }


module.exports={
  
  getAllTasks,createTask,getTask,deleteTask,updateTask
}