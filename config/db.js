const mongoose = require('mongoose')

const connectDb = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            // findOneAndUpdate:false,
            useUnifiedTopology:true
        })
        console.log(`MongoDB connected:${conn.connection.host}`)
    }catch(err){
        console.error(err)
        process.exit(1)
    }
} 

module.exports = connectDb