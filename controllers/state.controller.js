import StateService from "../services/state.service.js";

export default class AdminController {
  constructor() {
    this.stateService = new StateService();
  }

async createState(req, res){
    try {
        const state = await this.stateService.createState(req.body);
        res.send(state);
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}

async getAllStates(req, res){
    try {
        const allStates = await this.stateService.getAllStates();
        res.send(allStates);
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}

async getState(req, res){
  try{
    const state = await this.stateService.getState(req.params.id);
    if (state === null) return res.sendStatus(404);
    res.send(state);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}

async updateState(req, res){
    try {
        const updatedState = await this.stateService.updateState(req.body, req.params.id);
        res.send(updatedState);
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}

async deleteState(req, res){
    try {
        const deletedState = await this.stateService.deleteState(req.params.id);
        res.send("The State ("+deletedState["state_type"]+") has been Deleted succesfully");
      } catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}

}