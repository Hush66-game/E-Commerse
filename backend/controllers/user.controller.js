import mongoose, { get } from "mongoose";
import User from "../models/user.model";

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error." });
  }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    if(!user ||(await user.matchPassword(password)))
        return res.status(401).json({message: 'invalid email or password'})
    
    res.json({token:generateToken(user._id), user:{id: user._id, name: user.name, email: user.email}});
};
