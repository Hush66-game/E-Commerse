import mongoose, { get } from "mongoose";
import User from "../models/user.model";

export const register = async (req, res) => {
    const {name , email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({message: 'User already Exists'});

    const user = await User.create({name, email, password});
    res.status(201).json({ token: generateToken(user._id), message: 'Account Registered'});

};

export const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    if(!user ||(await user.matchPassword(password)))
        return res.status(401).json({message: 'invalid email or password'})
    
    res.json({token:generateToken(user._id), user:{id: user._id, name: user.name, email: user.email}});
};
