import AuthorService from "../services/author.service.js";

export default class AuthorController {
  constructor() {
    this.authorService = new AuthorService();
  }

  async createAuthor(req, res) {
    try {
      const author = await this.authorService.createAuthor(req.body);
      res.send(author);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
