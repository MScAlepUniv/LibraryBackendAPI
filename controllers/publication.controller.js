import PublicationService from "../services/publication.service.js";

export default class PublicationController {
  constructor() {
    this.publicationService = new PublicationService();
  }

  async createPublication(req, res) {
    try {
      const publication = await this.publicationService.createPublication(
        req.body
      );
      res.send(publication);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async deletePublication(req, res){
    try {
      await this.publicationService.deletePublication(req.params.id);
      res.send("The publication has been deleted succefully");
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

}
