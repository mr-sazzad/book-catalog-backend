import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

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

export default app;
