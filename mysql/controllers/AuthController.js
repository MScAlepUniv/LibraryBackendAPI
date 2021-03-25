import prisma from "../prisma/prismaClientObject.js";
import jwt from "jsonwebtoken";

export default class AuthController {
  constructor() {}

  async login(req, res) {
    const { user_name, pass } = req.body;
    try {
      let isAdmin = false;
      let user = await prisma.vsitors.findFirst({
        where: { user_name, pass },
      });
      if (!user) {
        user = await prisma.employees.findFirst({
          where: { user_name, pass },
        });
        if (!user) return res.sendStatus(404);
        isAdmin = user.is_admin;
      }
      console.log(user.is_admin);
      const accToken = this.getToken(process.env.JWT_KEY, {
        id: user.Visitor_id ? user.Visitor_id : user.Employee_id,
        is_admin: isAdmin,
      });
      delete user.pass;
      delete user.is_admin;

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
        id: visitor.Visitor_id,
        is_admin: false,
      });

      res.send({ ...visitor, acc_token: accToken });
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  }

  getToken(key, user) {
    return jwt.sign(
      { is_admin: user.is_admin.toString(), id: user.id.toString() },
      key
    );
  }

  authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_KEY, (error, user) => {
        if (error) return res.sendStatus(403);
        req.user = user;
        next();
      });
    } else res.sendStatus(401);
  }

  adminChecker(req, res, next) {
    if (req.user.is_admin !== "true")
      return res.status(401).json({ message: "Unauthorized" });
    next();
  }
}
