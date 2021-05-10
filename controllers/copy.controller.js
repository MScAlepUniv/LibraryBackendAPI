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
    
    async getCopy(req, res){
        try {
            const copy = await this.copyService.getCopy(req.params.id);
            if (copy === null) return res.sendStatus(404);
            res.send(copy);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async getAllCopies(req, res){
        try {
            const allCopies = await this.copyService.getAllCopies();
            res.send(allCopies);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async updateCopy(req, res){
        try {
            const copy = await this.copyService.getCopy(req.params.id);
            if (copy===null) return res.sendStatus(404);
            const updatedCopy = await this.copyService.updateCopy(req.body, req.params.id);
            res.send(updatedCopy);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async deleteCopy(req, res){
        try {
            const copy = await this.copyService.getCopy(req.params.id);
            if (copy===null) return res.sendStatus(404);
            const deletedCopy = await this.copyService.deleteCopy(req.params.id);
            res.send(deletedCopy);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}