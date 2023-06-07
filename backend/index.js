const express = require("express");
const mongoDB = require("./db");
const app = express();
mongoDB();
app.get("/", (req,res) =>{
    res.send("hi")
})

app.use(express.json())
app.use('/api', require("./Routes/createUser"));

app.listen(5000, ()=>{
    console.log("Port is running")
})