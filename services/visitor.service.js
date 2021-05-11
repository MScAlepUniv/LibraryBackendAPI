import prisma from "../mysql/prisma/prismaClientObject.js";

export default class VisitorService {
  constructor() {}

  async getVisitorByName(user_name) {
    return await prisma.visitors.findFirst({
      where: { user_name, is_active: true },
    });
  }

  async createVisitor(visitor) {
    const {
      name,
      father_name,
      last_name,
      birthday,
      address,
      job,
      qualification,
      user_name,
      pass,
      subscriptioncard_info: { subscription_id, state },
    } = visitor;

    return await prisma.visitors.create({
      data: {
        name,
        father_name,
        last_name,
        birthday: new Date(birthday),
        address,
        job,
        subscription_date: new Date(),
        qualification,
        user_name,
        pass,
        subscriptioncards: {
          create: { subscription_id: subscription_id, state: state },
        },
      },
    });
  }
}
