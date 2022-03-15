require("dotenv").config();

import express from "express";
import colors from "colors";
import { blogRoutes } from "./api/routes";
import cors from "cors";
import path from "path";

const app = express();
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

colors.enable();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

// parse application/json
app.use(express.json());

app.use("/", blogRoutes);

app.listen(8000, () => {
  console.log("Server started successfully!".green);
});
