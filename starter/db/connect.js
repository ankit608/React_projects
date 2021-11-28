const mongoose  = require('mong+oose')


const ConnectionString2 =
'mongodb+srv://ankit:Mongo_ankit@877@nodeexpresprojects.ppv1c.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB =(url)=>{

    return mongoose.connect(url,{useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    }
        )
    

}

module.exports=connectDB;
