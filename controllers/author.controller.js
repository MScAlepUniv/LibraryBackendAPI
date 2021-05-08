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

  async getAllAuthors(req, res){
    try{
      const allAuthers = await this.authorService.getAllAuthors();
      res.send(allAuthers);
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }

  async deleteAuthor(req, res){
    try{
      const deletedAuthor = await this.authorService.deleteAuthor(req.params.id);
      res.send("The author ("+deletedAuthor["name"]+") has been Deleted succesfully");
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }

  async updateAuthor(req, res){
    try{
      const updatedAuthor = await this.authorService.updateAuthor(req.body, req.params.id);
      res.send(updatedAuthor);
    } catch (error){
      console.log(error);
      res.sendStatus(500);
    }
  }
}
