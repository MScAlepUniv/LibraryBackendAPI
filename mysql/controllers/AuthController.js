import prisma from "../prisma/prismaClientObject.js";
import jwt from "jsonwebtoken";

export default class AuthController {
  constructor() {}

  async login(req, res) {
    const { user_name, pass } = req.body;
    try {
      let user = await prisma.vsitors.findFirst({
        where: { user_name, pass },
      });
      if (!user) {
        user = await prisma.employees.findFirst({
          where: { user_name, pass },
        });
        if (!user) return res.sendStatus(404);
      }
      const accToken = this.getToken(process.env.JWT_KEY, {
        user_name: user.user_name,
        id: user.id,
      });
      delete user.pass;

      res.send({ ...user, acc_token: accToken });
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  }

  async register(req, res) {
    const {
      name,
      father_name,
      last_name,
      birthdate,
      address,
      job,
      qualification,
      user_name,
      pass,
      subscriptioncard_info: { subscription_id, state },
    } = req.body;
    try {
      let visitor = await prisma.vsitors.findFirst({ where: { user_name } });
      if (visitor) return res.sendStatus(409);

      visitor = await prisma.vsitors.create({
        data: {
          Name: name,
          Father_name: father_name,
          Last_name: last_name,
          Birthdate: new Date(birthdate),
          Address: address,
          Job: job,
          Subscription_date: new Date(),
          Qualification: qualification,
          user_name,
          pass,
          subscriptioncards: {
            create: { Subscription_id: subscription_id, State: state },
          },
        },
      });
      delete visitor.pass;

      const accToken = this.getToken(process.env.JWT_KEY, {
        visitor_card_id: visitor.visitor_card_id,
        Name: name,
      });

      res.send({ ...visitor, acc_token: accToken });
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  }

  getToken(key, user) {
    return jwt.sign({ id: user.id, user_name: user.user_name }, key);
  }
}
