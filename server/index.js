import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";

dotenv.config(); 
connectDB(); 

const app = express();

app.use(cors()); 
app.use(express.json()); 

app.use("/api/auth", authRoutes); 
app.use("/api/properties", propertyRoutes); 
app.use("/api/recommendations", recommendationRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
