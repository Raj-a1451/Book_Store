const express=require('express')
const dotenv=require('dotenv').config()
const connectDB=require('./config/dbConnection.js')
const errorHandler=require('./middleware/errorHandler.js')
const cors=require('cors')
const app=express()

const PORT=process.env.port||5001

connectDB()
app.use(cors())
app.use(express.json())
app.use('/books',require('./routes/bookRoutes'))
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server is listening to port: ${PORT}`)
})