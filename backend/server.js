import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // allow to accept json data in the req.body

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// ✅ Connect DB and then start server
const startServer = async () => {
  try {
    await connectDB(); // connect to MongoDB first
    app.listen(PORT, () => {
      console.log("✅ Server started at http://localhost:" + PORT);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1); // Stop server if DB fails
  }
};

startServer(); // Start the app
