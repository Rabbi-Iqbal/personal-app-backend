import express from "express";
import multer from "multer";
import fs from "fs";
import { blogCtrl } from "../controllers";
import { authMiddleware } from "../middlewares";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/";

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    console.log(new Date().toISOString);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get("/blog/:id", blogCtrl.read);
router.get("/blogs", blogCtrl.list);
router.post("/blog", authMiddleware.requireSingIn, upload.single("image"), blogCtrl.create);

export default router;
