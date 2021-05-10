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
      const publication = await this.publicationService.getPublication(req.params.id);
      if (publication===null) return res.sendStatus(404);
      await this.publicationService.deletePublication(req.params.id);
      res.send("The publication has been deleted succefully");
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async updatePublication(req, res){
    try {
      const publication = await this.publicationService.getPublication(req.params.id);
      if (publication===null) return res.sendStatus(404);
      const updatedPublication = await this.publicationService.updatePublication(req.body, req.params.id);
      res.send(updatedPublication);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async getAllPublications(req, res){
    try {
      const allPublications = await this.publicationService.getAllPublications();
      res.send(allPublications);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  async getPublication(req, res){
    try {
      const publication = await this.publicationService.getPublication(req.params.id);
      if (publication===null) return res.sendStatus(404);
      res.send(publication);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }


}
