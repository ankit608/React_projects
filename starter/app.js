require('./db/connect');
require('dotenv').config();

const express  = require('express')
const app = express();
const tasks = require('./Routes/tasks')
const connectDB = require('./db/connect')
const port =4000;

const start = async ()=>{

    try {  
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`server is listening on port ${port}`));
      
    } catch (error) {
        console.log(err); 
    }


}

start();

app.use(express.json())

app.get('/hello',(req,res)=>{

  res.send('Task manager App');

})

app.use('/api/v1/tasks',tasks)
