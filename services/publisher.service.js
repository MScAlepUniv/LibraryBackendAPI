import prisma from "../mysql/prisma/prismaClientObject.js";

export default class AuthorService {
  constructor() {}

  async createPublisher(publisher) {
    return await prisma.publishers.create({ data: { ...publisher } });
  }

  async getAllPublishers() {
    return await prisma.publishers.findMany({});
  }

  async updatePublisher(aPublisherToUpdate, id) {
    return await prisma.publishers.update({
      where: { id: parseInt(id) },
      data: { ...aPublisherToUpdate },
    });
  }

  async deletePublisher(id) {
    return await prisma.publishers.delete({ where: { id: parseInt(id) } });
  }
}
