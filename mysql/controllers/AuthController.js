import prisma from "../prisma/prismaClientObject.js";
import jwt from "jsonwebtoken";

export default class AuthController {
  constructor() {}

  async login(req, res) {
    const { user_name, pass } = req.body;
    try {
      const visitor = await prisma.vsitors.findFirst({
        where: { user_name, pass },
      });
      if (!visitor) return res.sendStatus(404);
      const accToken = this.getToken(process.env.JWT_KEY, {
        visitor_card_id: visitor.visitor_card_id,
        Name: visitor.Name,
      });
      delete visitor.pass;

      res.send({ ...visitor, accToken });
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  }

  async register(req, res) {
    const {
      Name,
      Father_name,
      Last_name,
      Birthdate,
      Address,
      Job,
      Qualification,
      user_name,
      pass,
      subscriptioncard_info: { Subscription_id, State },
    } = req.body;
    try {
      let visitor = await prisma.vsitors.findFirst({ where: { user_name } });
      if (visitor) return res.sendStatus(409);

      visitor = await prisma.vsitors.create({
        data: {
          Name,
          Father_name,
          Last_name,
          Birthdate: new Date(Birthdate),
          Address,
          Job,
          Subscription_date: new Date(),
          Qualification,
          user_name,
          pass,
          subscriptioncards: {
            create: { Subscription_id, State },
          },
        },
      });
      delete visitor.pass;

      const accToken = this.getToken(process.env.JWT_KEY, {
        visitor_card_id: visitor.visitor_card_id,
        Name,
      });

      res.send({ ...visitor, accToken });
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  }

  getToken(key, user) {
    return jwt.sign(
      { visitor_card_id: user.visitor_card_id, name: user.Name },
      key
    );
  }
}
