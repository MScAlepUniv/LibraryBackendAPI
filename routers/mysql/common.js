import express from "express";
import EmployeeController from "../../controllers/employee.controller.js";
import AuthorController from "../../controllers/author.controller.js";
import ClassController from "../../controllers/class.controller.js";
import PublicationController from "../../controllers/publication.controller.js";
import PublisherController from "../../controllers/publisher.controller.js";
import SubjectController from "../../controllers/subject.controller.js";
import StateController from "../../controllers/state.controller.js";
import CopyController from "../../controllers/copy.controller.js";

const router = express.Router();

const employeeController    = new EmployeeController();
const authorController      = new AuthorController();
const classController       = new ClassController();
const publicationController = new PublicationController();
const publisherController   = new PublisherController();
const subjectController     = new SubjectController();
const stateController       = new StateController();
const copyController        = new CopyController();

router.get("/getAllAuthors", (req, res) =>
  authorController.getAllAuthors(req, res)
);

router.get("/getAuthor/:id", (req, res) =>
  authorController.getAuthor(req, res)
);

router.get("/getAllClasses", (req, res) =>
  classController.getAllClasses(req, res)
);

router.get("/getClass/:id", (req, res) =>
  classController.getClass(req, res)
);

router.get("/getAllPublishers", (req, res) =>
  publisherController.getAllPublishers(req, res)
);

router.get("/getPublisher/:id", (req, res) =>
  publisherController.getPublisher(req, res)
);

router.get("/getAllStates", (req, res) =>
  stateController.getAllStates(req, res)
);

router.get("/getState/:id", (req, res) =>
  stateController.getState(req, res)
);

router.get("/getAllSubjects", (req, res) => 
  subjectController.getAllSubjects(req, res)
);

router.get("/getSubject/:id", (req, res) =>
  subjectController.getSubject(req, res)
);


router.get("/getAllPublications", (req, res) =>
  publicationController.getAllPublications(req, res)
);

router.get("/getPublication/:id", (req, res) =>
  publicationController.getPublication(req, res)
);

router.get("/getCopy/:id", (req, res) =>
  copyController.getCopy(req, res)
);

router.get("/getAllCopies", (req, res) =>
  copyController.getAllCopies(req, res)
);
export default router;
