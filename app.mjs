// @ts-check
import express from "express";
import mongoose from "mongoose";
// import Auther from "./models/Author.js";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/books-library", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is ready ..."))
  .catch((error) => console.log(error));

const port = 3000;
app.listen(port, () => console.log("Server is running on port: " + port));

// Auther.find({ name: "Basheer" })
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));
