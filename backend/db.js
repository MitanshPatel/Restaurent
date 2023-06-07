const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://mitanshRestaurant:mitansh1234@cluster0.jp4rvgh.mongodb.net/restaurantDB?retryWrites=true&w=majority"

const mongoDB = async ()=>{
    await mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then(async ()=>{
        console.log("connected to database");
        const fetchedData = await mongoose.connection.db.collection("food");
        const data = await fetchedData.find({}).toArray();
        
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = mongoDB;