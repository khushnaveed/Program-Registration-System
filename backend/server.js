import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import programsRoute from "./routes/programRoutes.js";
import cors from "cors";

const app = express();
const PORT = 5005;

app.use(cors());

dotenv.config();
console.clear();

const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, {
    dbName: "hopn",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(express.json());

app.use("/api/programs", programsRoute);

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
