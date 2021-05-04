import prisma from "../mysql/prisma/prismaClientObject.js";

export default class AuthorService {
  constructor() {}

  async createPublisher(publisher) {
    return await prisma.publishers.create({ data: { ...publisher } });
  }
}
