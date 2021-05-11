import prisma from "../mysql/prisma/prismaClientObject.js";

export default class SubjectService {
  constructor() {}

  async createSubject(subject) {
    return await prisma.subjects.create({ data: { ...subject } });
  }

  async getAllSubjects() {
    return await prisma.subjects.findMany();
  }

  async getSubject(id) {
    return await prisma.subjects.findFirst({ where: { id: parseInt(id) } });
  }

  async updateSubject(data, id) {
    return await prisma.subjects.update({
      where: { id: parseInt(id) },
      data: { ...data },
    });
  }

  async deleteSubject(id) {
    return await prisma.subjects.delete({
      where: { id: parseInt(id) },
    });
  }
}
