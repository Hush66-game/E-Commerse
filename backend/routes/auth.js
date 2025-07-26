const express = require("express");
const bcrypt = require("bcryptjs");
const user = require("../models/user.model");
const { default: User } = require("../models/user.model");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const {email, username, password} = req.body;

        if (!email || !username || !password) {
            return res.status(400).json({message: "Please fill all the fields"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email already exists."});

        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email, username, password:hashedPassword,
        });
        await newUser.save();

        res.status(201).json({message: "User registered successfully!"});
    } catch (err){
        console.error(err);
        res.status(500).json({message: "Server error"});
    }
})

module.exports = router;