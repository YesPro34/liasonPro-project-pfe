const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/liaisonpro"


const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)

    console.log(`MongoDB Connected Succesfully on host : ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}


module.exports = connectDB