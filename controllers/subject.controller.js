import SubjectService from "../services/subject.service.js";

export default class ClassController {
  constructor() {
    this.subjectService = new SubjectService();
  }

  async createSubject(req, res) {
    try {
      const subject = await this.subjectService.createSubject(req.body);
      res.send(subject);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async getAllSubjects(req, res) {
    try {
      const allSubjects = await this.subjectService.getAllSubjects();
      res.send(allSubjects);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async getSubject(req, res) {
    try {
      const subject = await this.subjectService.getSubject(req.params.id);
      if (subject === null) return res.sendStatus(404);
      res.send(subject);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async updateSubject(req, res) {
    try {
      const subject = await this.subjectService.getSubject(req.params.id);
      if (subject === null) return res.sendStatus(404);
      const updatedSubject = await this.subjectService.updateSubject(
        req.body,
        req.params.id
      );
      res.send(updatedSubject);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async deleteSubject(req, res) {
    try {
      const subject = await this.subjectService.getSubject(req.params.id);
      if (subject === null) return res.sendStatus(404);
      await this.subjectService.deleteSubject(req.params.id);
      res.send("The Subject has been Deleted successfully");
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
