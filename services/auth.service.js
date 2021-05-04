import prisma from "../mysql/prisma/prismaClientObject.js";
export default class AuthService {
  constructor() {}

  async verifyUser({ user_name, pass }) {
    let user = await prisma.visitors.findFirst({
      where: { user_name, pass },
    });
    if (!user) {
      user = await prisma.employees.findFirst({
        where: { user_name, pass },
      });
      if (!user) return null;
    }

    return user;
  }
}
