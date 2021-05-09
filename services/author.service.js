import prisma from "../mysql/prisma/prismaClientObject.js";

export default class AuthorService {
  constructor() {}

  async createAuthor(author) {
    const {
      name,
      last_name,
      birthday,
      place_of_birth,
      address,
      date_of_death,
      biography,
    } = author;
    return await prisma.authors.create({
      data: {
        name,
        last_name,
        birthday: new Date(birthday),
        place_of_birth,
        address,
        date_of_death: new Date(date_of_death),
        biography,
      },
    });
  }

  async getAllAuthors() {
    return await prisma.authors.findMany();
  }

  async deleteAuthor(id) {
    return await prisma.authors.delete({ where: { id: parseInt(id) } });
  }

  async updateAuthor(authorData, id) {
    const {
      name,
      last_name,
      birthday,
      place_of_birth,
      address,
      date_of_death,
      biography,
    } = authorData;
    return await prisma.authors.update({
      where: { id: parseInt(id) },
      data: {
        name,
        last_name,
        birthday: new Date(birthday),
        place_of_birth,
        address,
        date_of_death: new Date(date_of_death),
        biography,
      },
    });
  }
}
