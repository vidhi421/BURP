const dotenv=require("dotenv");
const express = require("express");
const app = express();
const mongoose=require("mongoose");
const cookieParser = require('cookie-parser')

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());
app.use(cookieParser())
//link router files
app.use(require('./router/auth'));

const PORT=process.env.PORT;

app.get('/', (req,res)=>{
    res.send("hello from server");
})

app.get('/SignUpPage',(req,res)=>{
    res.send("hello from sign-up page");
})

//to add middleware
// app.get('/AddRecipe',(req,res)=>{
//     res.send("hello from add recipe page");
// })

// app.get('/Profile', authenticate ,(req,res) => {
//     console.log("hello profile");
//     res.send(req.rootUser);
// })

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})