import express from "express";
import { userCtrl } from "../controllers";

const router = express.Router();

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

export default router;
