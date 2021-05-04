import prisma from "../mysql/prisma/prismaClientObject.js";

export default class SubjectService {
  constructor() {}

  async createSubject(subject) {
    return await prisma.subjects.create({
      data: { ...subject },
    });
  }
}
