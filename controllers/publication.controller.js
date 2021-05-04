import PublisherService from "../services/publication.service.js";

export default class PublicationController {
  constructor() {
    this.publisherService = new PublisherService();
  }

  async createPublication(req, res) {
    try {
      const publication = await this.publisherService.createPublication(
        req.body
      );
      res.send(publication);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
