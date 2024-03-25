const express = require("express")
const connectDB = require('./src/config/db')
require("dotenv/config")
const cors = require('cors');
const cookieParser = require("cookie-parser")
const app = express()
const port = process.env.PORT || 8000


connectDB()

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}))

// routes
app.use('/api/v1/users',require('./src/routers/userRoutes'))




app.listen(port , () => console.log(`server running successfully on port ${port}...`))


