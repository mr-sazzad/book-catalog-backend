import { RequestHandler } from "express";
import { BookService } from "./BookService";

export const getAllBooks: RequestHandler = async (_req, res, _next) => {
  const result = await BookService.getAllBooks();

  res.status(200).json({
    success: true,
    message: "Book Retrieve successfully",
    data: result,
  });
};
