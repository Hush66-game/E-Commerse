import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";
import registerRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json()); // allow to accept json data in the req.body



app.use("/api/products", productRoutes);
app.use("/api/register", registerRoutes);
app.listen(PORT, () => {
  connectDB(); 
  try {
    console.log("Server started at http://localhost:"+ PORT);
  } catch (error) {
    console.log(error);
  }
});

