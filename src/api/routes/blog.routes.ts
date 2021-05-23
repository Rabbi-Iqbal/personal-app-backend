import express from "express";
import { blogCtrl } from "../controllers";

const router = express.Router();

router.get("/blogs", blogCtrl.list);

router.post("/blog", blogCtrl.create);


export default router
