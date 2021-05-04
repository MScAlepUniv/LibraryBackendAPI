import jwt from "jsonwebtoken";
import AuthService from "../services/auth.service.js";
import VisitorService from "../services/visitor.service.js";

export default class AuthController {
  constructor() {
    this.authService = new AuthService();
    this.visitorService = new VisitorService();
  }

  async login(req, res) {
    const { user_name, pass } = req.body;
    try {
      let user = await this.authService.verifyUser({
        user_name,
        pass,
      });
      if (user === null) return res.sendStatus(404);
      const accToken = this.getToken(process.env.JWT_KEY, {
        id: user.id,
        is_admin: user.is_admin ? true : false,
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
    try {
      let visitor = await this.visitorService.getVisitorByName(
        req.body.user_name
      );
      if (visitor) return res.sendStatus(409);

      visitor = await this.visitorService.createVisitor(req.body);
      delete visitor.pass;
      delete visitor.is_admin;

      const accToken = this.getToken(process.env.JWT_KEY, {
        id: visitor.id,
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
