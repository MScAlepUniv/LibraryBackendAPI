// @ts-check
import express, { request, response } from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
import swaggerDocument from "./docs/swagger.json";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is ready ..."))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Testing routes
app.get("/mongodb", (request, response) =>
  response.send("hello from mongodb !!")
);
app.get("/mysql", (request, response) => response.send("hello from mysql !!"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server is running on port: " + port));
