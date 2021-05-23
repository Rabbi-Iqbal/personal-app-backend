require('dotenv').config()

import express from "express";
import colors from 'colors'
import { blogRoutes } from "./api/routes";
const app = express();

colors.enable();


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

// parse application/json
app.use(express.json())

app.use("/", blogRoutes);

app.listen(3000, () => {
  console.log("Server started successfully!".green);
});
