const express = require("express");
const mongoDB = require("./db");
const app = express();
mongoDB();

app.use((req,res,next)=>{           //for connecting 3000 to 5000
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())
app.use('/api', require("./Routes/createUser"));   //(middleware)using Router, if /api is visited, then it has to go to createUser.
app.use('/api', require("./Routes/displayData"));

app.listen(5000, ()=>{
    console.log("Port is running")
})