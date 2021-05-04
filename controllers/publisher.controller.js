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
}
