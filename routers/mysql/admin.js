import express from "express";
import AdminController from "../../mysql/controllers/AdminController.js";

const router = express.Router();

const adminController = new AdminController();

router.post("/createEmployee", (req, res) =>
  adminController.createEmployee(req, res)
);

router.post("/createAuther", (req, res) =>
  adminController.createAuther(req, res)
);

router.post("/createClass", (req, res) =>
  adminController.createClass(req, res)
);

router.post("/createPublication", (req, res) =>
  adminController.createPublication(req, res)
);

router.post("/createPublisher", (req, res) =>
  adminController.createPublisher(req, res)
);

router.post("/createSubject", (req, res) =>
  adminController.createSubject(req, res)
);
export default router;
