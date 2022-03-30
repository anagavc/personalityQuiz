import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import questionRoutes from "./routes/question.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the personality quiz");
});

app.use("/questions", questionRoutes);
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));
