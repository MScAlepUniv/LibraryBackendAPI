import prisma from "../mysql/prisma/prismaClientObject.js";

export default class AuthorService {
  constructor() {}

  async createPublisher(publisher) {
    return await prisma.publishers.create({ data: { ...publisher } });
  }

  async getAllPublishers() {
    return await prisma.publishers.findMany({});
  }

  async getPublisher(id) {
    return await prisma.publishers.findFirst({
      where: { id: parseInt(id) },
    });
  }

  async updatePublisher(aPublisherToUpdate, id) {
    return await prisma.publishers.update({
      where: { id: parseInt(id) },
      data: { ...aPublisherToUpdate },
    });
  }
}
