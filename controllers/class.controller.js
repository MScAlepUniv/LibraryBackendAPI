import ClassService from "../services/class.service.js";

export default class ClassController {
  constructor() {
    this.classService = new ClassService();
  }

  async createClass(req, res) {
    try {
      const aClass = await this.classService.createClass(req.body);
      res.send(aClass);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
