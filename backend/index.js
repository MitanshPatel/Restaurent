require('dotenv').config()
const express = require("express");
const mongoDB = require("./db");
const app = express();
mongoDB();
const PORTi = process.env.PORT || 5000
const furl = process.env.furl

app.use((req,res,next)=>{           //for connecting 3000 to 5000
    res.setHeader("Access-Control-Allow-Origin", `${furl}`)
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())
app.use('/api', require("./Routes/createUser"));   //(middleware)using Router, go to createUser.js
app.use('/api', require("./Routes/displayData"));
app.use('/api', require("./Routes/OrderData"));

app.listen(PORTi, ()=>{
    console.log("Port is running")
})