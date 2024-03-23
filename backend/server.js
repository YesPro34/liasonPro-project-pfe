const express = require("express")
const connectDB = require('./src/config/db')
require("dotenv/config")
const cors = require('cors');
const app = express()
const port = process.env.PORT || 8000


connectDB()
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/users',require('./src/routers/userRoutes'))




app.listen(port , () => console.log(`server running successfully on port ${port}...`))


