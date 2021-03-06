import express from "express";
import AuthController from "../mysql/controllers/AuthController.js";
const router = express.Router();

const authController = new AuthController();

router.post("/register", (req, res) => authController.register(req, res));
router.post("/login", (req, res) => authController.login(req, res));
export default router;