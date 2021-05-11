import prisma from "../mysql/prisma/prismaClientObject.js";

export default class PublicationService {
  constructor() {}
  async createPublication(publication) {
    const {
      ISBN,
      title,
      date_of_publishing,
      publisher_id,
      class_id,
      keywords,
      num_of_pages,
      subject_id,
      pirchase_price_copy,
      for_sale,
      sale_price_copy,
      author_id,
      rate_of_associating,
    } = publication;
    return await prisma.publications.create({
      data: {
        ISBN,
        title,
        date_of_publishing: new Date(date_of_publishing),
        publisher_id,
        class_id,
        keywords,
        num_of_pages,
        subject_id,
        pirchase_price_copy,
        for_sale: Buffer.from([for_sale]),
        sale_price_copy,
        author_publication: {
          create: {
            author_id,
            rate_of_associating,
          },
        },
      },
    });
  }

  async deletePublication(id) {
    return await prisma.publications.update({
      where: { id: parseInt(id) },
      data: { is_deleted: true },
    });
  }

  async updatePublication(data, id, author) {
    console.log(author);
    const {
      ISBN,
      title,
      date_of_publishing,
      publisher_id,
      class_id,
      keywords,
      num_of_pages,
      subject_id,
      pirchase_price_copy,
      for_sale,
      sale_price_copy,
    } = data;
    return await prisma.publications.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ISBN,
        title,
        date_of_publishing: new Date(date_of_publishing),
        publisher_id,
        class_id,
        keywords,
        num_of_pages,
        subject_id,
        pirchase_price_copy,
        for_sale: Buffer.from([for_sale]),
        sale_price_copy,
      },
    });
  }

  async getAllPublications() {
    return await prisma.publications.findMany({ where: { is_deleted: false } });
  }

  async getPublication(id) {
    return await prisma.publications.findFirst({
      where: { AND: [{ id: parseInt(id) }, { is_deleted: false }] },
    });
  }
}
