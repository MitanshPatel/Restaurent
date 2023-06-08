const express = require("express");
const mongoDB = require("./db");
const app = express();
mongoDB();
app.get("/", (req,res) =>{
    res.send("hi")
})

app.use(express.json())
app.use('/api', require("./Routes/createUser"));   //(middleware)using Router, if /api is visited, then it has to go to createUser.

app.listen(5000, ()=>{
    console.log("Port is running")
})