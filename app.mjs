import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
import swaggerDocument from "./docs/swagger.json";

import mysqlAuthRouter from "./routers/mysql/auth.js";
import mysqlAdminRouter from "./routers/mysql/admin.js";

import AuthController from "./controllers/auth.controller.js";

// mongoose
//   .connect(process.env.MONGODB_CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB is ready ..."))
//   .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const authController = new AuthController();

app.use("/mysql/auth", mysqlAuthRouter);
app.use(
  "/mysql/admin",
  authController.authenticateJWT,
  authController.adminChecker,
  mysqlAdminRouter
);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server is running on port: " + port));
