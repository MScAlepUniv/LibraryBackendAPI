import express from "express";
import AdminController from "../../mysql/controllers/AdminController.js";
const router = express.Router();

const adminController = new AdminController();

router.post("/createEmployee", (req, res) =>
  adminController.createEmployee(req, res)
);

export default router;
