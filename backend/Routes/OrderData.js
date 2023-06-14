const express = require("express")
const router = express.Router();
const Order = require("../models/Orders")    //create a schema from orders.js file in models

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });  //to fetch date

    let emailId = await Order.findOne({ email: req.body.email });
    if (emailId == null) {        //if ordered first time
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            })
        }
        catch (error) {
            res.send("Error");
        }
    }

    else{
        try{
            await Order.findOneAndUpdate({email: req.body.email}, { $push: {order_data: data}})
            .then(()=>{
                res.json({success: true});
            })
        }
        catch(error){
            res.send("Error");
        }
    }
})

router.post('/myorderData', async (req,res)=>{
    try {
        let myData = await Order.findOne({'email': req.body.email})
        res.json({orderData: myData})
    } catch (error) {
        res.send("error");
    }
})

module.exports = router;