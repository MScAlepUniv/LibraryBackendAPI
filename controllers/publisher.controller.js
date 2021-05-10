import PublisherService from "../services/publisher.service.js";

export default class AdminController {
  constructor() {
    this.publisherService = new PublisherService();
  }
  
  async createPublisher(req, res) {
    try {
      const publisher = await this.publisherService.createPublisher(req.body);
      res.send(publisher);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async getAllPublishers(req, res){
    try{
      const allPublishers = await this.publisherService.getAllPublishers();
      res.send(allPublishers);
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }

  async getPublisher(req, res){
    try{
      const publisher = await this.publisherService.getPublisher(req.params.id);
      if (publisher === null) return res.sendStatus(404);
      res.send(publisher);
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }
  

  async updatePublisher(req, res){
    try{
      const publisher = await this.publisherService.getPublisher(req.params.id);
      if (publisher===null) return res.sendStatus(404);
      const updatedPublisher = await this.publisherService.updatePublisher(req.body, req.params.id);
      res.send(updatedPublisher);
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }

  async deletePublisher(req, res){
    try{
      const publisher = await this.publisherService.getPublisher(req.params.id);
      if (publisher===null) return res.sendStatus(404);
      const deletedPublisher = await this.publisherService.deletePublisher(req.params.id);
      res.send("The publisher ("+deletedPublisher["name"]+") has been Deleted succesfully");
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }
}
