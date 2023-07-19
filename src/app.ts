import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import booksRouter from "./app/modules/Books/BookRouts";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res, _next) => {
  res.status(200).json({
    message: "welcome To Assignment 5",
    statusCode: res.statusCode,
  });
});

app.use("/books", booksRouter);

export default app;
