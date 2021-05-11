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

const employeeController = new EmployeeController();
const authorController = new AuthorController();
const classController = new ClassController();
const publicationController = new PublicationController();
const publisherController = new PublisherController();
const subjectController = new SubjectController();
const stateController = new StateController();
const copyController = new CopyController();

router.post("/createEmployee", (req, res) =>
  employeeController.createEmployee(req, res)
);
/////////////////////////////////////////////
router.post("/createAuthor", (req, res) =>
  authorController.createAuthor(req, res)
);

router.delete("/deleteAuthor/:id", (req, res) =>
  authorController.deleteAuthor(req, res)
);

router.put("/updateAuthor/:id", (req, res) =>
  authorController.updateAuthor(req, res)
);

//////////////////////////////////////////////
router.post("/createClass", (req, res) =>
  classController.createClass(req, res)
);

router.delete("/deleteClass/:id", (req, res) =>
  classController.deleteClass(req, res)
);

router.put("/updateClass/:id", (req, res) =>
  classController.updateClass(req, res)
);

//////////////////////////////////////////////
router.post("/createPublication", (req, res) =>
  publicationController.createPublication(req, res)
);

router.delete("/deletePublication/:id", (req, res) =>
  publicationController.deletePublication(req, res)
);

router.put("/updatePublication/:id", (req, res) =>
  publicationController.updatePublication(req, res)
);

///////////////////////////////////////////////////
router.post("/createPublisher", (req, res) =>
  publisherController.createPublisher(req, res)
);

router.put("/updatePublisher/:id", (req, res) =>
  publisherController.updatePublisher(req, res)
);

router.delete("/deletePublisher/:id", (req, res) =>
  publisherController.deletePublisher(req, res)
);

///////////////////////////////////////////////////
router.post("/createSubject", (req, res) =>
  subjectController.createSubject(req, res)
);

router.put("/updateSubject/:id", (req, res) =>
  subjectController.updateSubject(req, res)
);

router.delete("/deleteSubject/:id", (req, res) =>
  subjectController.deleteSubject(req, res)
);

///////////////////////////////////////////////////
router.post("/createState", (req, res) =>
  stateController.createState(req, res)
);

router.put("/updateState/:id", (req, res) =>
  stateController.updateState(req, res)
);

router.delete("/deleteState/:id", (req, res) =>
  stateController.deleteState(req, res)
);
///////////////////////////////////////////////////
router.post("/createCopy", (req, res) => copyController.createCopy(req, res));

router.put("/updateCopy/:id", (req, res) =>
  copyController.updateCopy(req, res)
);

router.delete("/deleteCopy/:id", (req, res) =>
  copyController.deleteCopy(req, res)
);
export default router;
