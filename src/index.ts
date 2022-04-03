require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import { blogRoutes, userRoutes } from "./api/routes";
import cors from "cors";
import path from "path";

const app = express();

// parse application/json
app.use(express.json());

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/", blogRoutes);
app.use("/user", userRoutes);

colors.enable();

mongoose.connect(process.env.MONGODB_URI || "");

app.listen(process.env.PORT || 8000, () => {
  console.log("Server started successfully!".green);
});
