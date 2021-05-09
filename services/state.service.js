import prisma from "../mysql/prisma/prismaClientObject.js";

export default class StateService {
  constructor() {}

  async createState(state) {
    return await prisma.states.create({ data: { ...state } });
  }

  async getAllStates() {
    return await prisma.states.findMany();
  }

  async updateState(state, id) {
    return await prisma.states.update({
      where: { id: parseInt(id) },
      data: { ...state },
    });
  }

  async deleteState(id) {
    return await prisma.states.delete({ where: { id: parseInt(id) } });
  }
}
