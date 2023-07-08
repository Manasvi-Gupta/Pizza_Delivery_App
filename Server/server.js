const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const connectDB = require('./config/config')
require('colors')
//config dotenv
dotenv.config()

//connection MongoDB
connectDB()

const app =express()
//middlewares
app.use(express.json());
app.use(morgan('dev'));
//routes
app.get('/',(req,res)=>{
    res.send("<h1>Hello from node server</h1>")
});
const port=process.env.PORT|| 8080
app.listen(8080,() =>{
    console.log(`Server Running on ${process.env.NODE_ENV} mode on port no ${ process.env.PORT}`.bgMagenta.white);
});