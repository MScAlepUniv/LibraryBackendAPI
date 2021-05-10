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
      const aClass = await this.classService.getClass(req.params.id);
      if (aClass===null) return res.sendStatus(404);
      const deletedClass = await this.classService.deleteClass(req.params.id);
      res.send("The class ("+deletedClass["class_name"]+") has been Deleted succesfully");
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }

  async updateClass(req, res){
    try{
      const aClass = await this.classService.getClass(req.params.id);
      if (aClass===null) return res.sendStatus(404);
      const updatedClass = await this.classService.updateClass(req.body, req.params.id);
      res.send(updatedClass);
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }

  async getAllClasses(req, res){
    try{
      const allClasses = await this.classService.getAllClasses();
      res.send(allClasses);
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }

  async getClass(req, res){
    try{
      const aClass = await this.classService.getClass(req.params.id);
      if (aClass === null) return res.sendStatus(404);
      res.send(aClass);
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }

}
