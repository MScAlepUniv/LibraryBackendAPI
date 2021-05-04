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
}
