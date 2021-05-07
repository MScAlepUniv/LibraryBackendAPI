import express from "express";
import EmployeeController from "../../controllers/employee.controller.js";
import AuthorController from "../../controllers/author.controller.js";
import ClassController from "../../controllers/class.controller.js";
import PublicationController from "../../controllers/publication.controller.js";
import PublisherController from "../../controllers/publisher.controller.js";
import SubjectController from "../../controllers/subject.controller.js";

const router = express.Router();

const employeeController = new EmployeeController();
const authorController = new AuthorController();
const classController = new ClassController();
const publicationController = new PublicationController();
const publisherController = new PublisherController();
const subjectController = new SubjectController();

router.post("/createEmployee", (req, res) =>
  employeeController.createEmployee(req, res)
);

router.post("/createAuthor", (req, res) =>
  authorController.createAuthor(req, res)
);

router.post("/createClass", (req, res) =>
  classController.createClass(req, res)
);
//////////////////////////////////////////////
router.delete("/deleteClass/:id", (req, res) =>
  classController.deleteClass(req, res)
);

router.put("/updateClass/:id", (req, res) =>
  classController.updateClass(req, res)
);

router.get("/getAllClasses", (req, res) =>
  classController.getAllClasses(req, res)
);

//////////////////////////////////////////////
router.post("/createPublication", (req, res) =>
  publicationController.createPublication(req, res)
);

router.post("/createPublisher", (req, res) =>
  publisherController.createPublisher(req, res)
);

router.post("/createSubject", (req, res) =>
  subjectController.createSubject(req, res)
);
export default router;
