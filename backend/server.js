import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import db from "./db.js";
import studentRoutes from "./routes/studentRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // db();
  console.log("database connceted successfully");
  console.log(`http://localhost:${PORT}`);
});
