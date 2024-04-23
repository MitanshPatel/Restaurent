const express = require("express")
const router = express.Router()
const User = require('../models/User')          //importing mongo Schema of user
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");          //for cookies

// For sign up
router.post("/createuser",
[body("email", "Invalid email").isEmail(), body("password", "Minimum length should be 6").isLength({ min: 6 })],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(8);   //to generate a salt
    const encryptedPass = await bcrypt.hash(req.body.password, salt);

    try {
        await User.create({
            name: req.body.name,
            password: encryptedPass,
            email: req.body.email,
            location: req.body.location
        })
        .then(res.json({ success: true }))
    }
    catch (error) {
        console.log(error);
        res.json({ success: false })
    }
})

//for Login
router.post("/login",
[body("email", "Invalid email").isEmail(), body("password", "Minimum length should be 6").isLength({ min: 6 })],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    var email = req.body.email;
    try {
        let user = await User.findOne({email});
        if (user){
            const checkPass = await bcrypt.compare(req.body.password, user.password);
            if(checkPass){

                const data={         //cookie
                    user:{
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, process.env.jwtSecret);
                console.log(authToken);
                return res.json({ success: true, authToken:authToken })
            }
            else{
                return res.status(400).json({ errors: "Invalid Password"});
            }
            
        }
        else if(!user){
            return res.status(400).json({ errors: "email not registered"});
        }
        
        
    }
    catch (error) {
        console.log(error);
        res.json({ success: false })
    }
})

module.exports = router;