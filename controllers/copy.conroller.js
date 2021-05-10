import CopyService from "../services/copy.service.js";

export default class AdminController {
    constructor() {
      this.copyService = new CopyService();
    }

    async createCopy(req, res){
        try {
            const copy = await this.copyService.createCopy(req.body);
            res.send(copy);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
    

}