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
}
