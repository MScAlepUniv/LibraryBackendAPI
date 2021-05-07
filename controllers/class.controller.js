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

  async deleteClass(req, res) {
    try{
      await this.classService.deleteClass(req.params.id);
      res.json({ message: 'Deleted' });
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }
}
