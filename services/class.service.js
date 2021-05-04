import prisma from "../mysql/prisma/prismaClientObject.js";

export default class ClassService {
  constructor() {}
  async createClass(aClass) {
    return await prisma.classes.create({ data: { ...aClass } });
  }
}
