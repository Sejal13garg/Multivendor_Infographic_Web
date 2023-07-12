import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isVendor, requireSignIn } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

//test Route
router.get("/test", requireSignIn, isVendor, testController);

export default router;
