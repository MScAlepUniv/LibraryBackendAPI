import prisma from "../mysql/prisma/prismaClientObject.js";

export default class ClassService {
  constructor() {}
  async createClass(aClass) {
    return await prisma.classes.create({ data: { ...aClass } });
  }

  async deleteClass(id) {
    return await prisma.classes.delete({ where: { id: parseInt(id) } });
  }

  async updateClass(aClassToUpdate, id) {
    return await prisma.classes.update({
      where: { id: parseInt(id) },
      data: { ...aClassToUpdate },
    });
  }

  async getAllClasses() {
    return await prisma.classes.findMany();
  }

  async getClass(id){
    return await prisma.classes.findFirst({
      where: {
        id: parseInt(id)
      }
    });
  }

}