const mongoose = require("mongoose");

const mongoDB = async ()=>{
    await mongoose.connect(process.env.mongoURI, {useNewUrlParser: true})
    .then(async ()=>{
        console.log("connected to database");
        const fetchedData = await mongoose.connection.db.collection("food");
        const data = await fetchedData.find({}).toArray();
        if(data){
            const foodCategory = await mongoose.connection.db.collection("category");
            const catData = await foodCategory.find({}).toArray();
            if(catData){
                global.food_items = data;    //made a global variable to access anywhere
                global.foodCategory = catData; 
            }
        }
        
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = mongoDB;