import express from "express";
import EmployeeController from "../../controllers/employee.controller.js";
import AuthorController from "../../controllers/author.controller.js";
import ClassController from "../../controllers/class.controller.js";
import PublicationController from "../../controllers/publication.controller.js";
import PublisherController from "../../controllers/publisher.controller.js";
import SubjectController from "../../controllers/subject.controller.js";
import StateController from "../../controllers/state.controller.js";

const router = express.Router();

const employeeController = new EmployeeController();
const authorController = new AuthorController();
const classController = new ClassController();
const publicationController = new PublicationController();
const publisherController = new PublisherController();
const subjectController = new SubjectController();
const stateController = new StateController();

router.get("/getAllAuthors", (req, res) =>
  authorController.getAllAuthors(req, res)
);

router.get("/getAllClasses", (req, res) =>
  classController.getAllClasses(req, res)
);

router.get("/getAllPublishers", (req, res) =>
  publisherController.getAllPublishers(req, res)
);

router.get("/getAllStates", (req, res) =>
  stateController.getAllStates(req, res)
);
