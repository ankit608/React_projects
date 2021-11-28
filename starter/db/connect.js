const mongoose  = require('mong+oose')


const ConnectionString2 =


const connectDB =(url)=>{

    return mongoose.connect(url,{useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    }
        )
    

}

module.exports=connectDB;
