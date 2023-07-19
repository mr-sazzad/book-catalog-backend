import { RequestHandler } from "express";
import { BookService } from "./BookService";

export const createNewBook: RequestHandler = async (req, res, _next) => {
  const book = req.body;
  const result = await BookService.createNewBook(book);

  res.status(200).json({
    success: true,
    message: "Book created successfully",
    data: result,
  });
};

export const getAllBooks: RequestHandler = async (_req, res, _next) => {
  const result = await BookService.getAllBooks();

  res.status(200).json({
    success: true,
    message: "Book Retrieve successfully",
    data: result,
  });
};

export const getMostRecentBooks: RequestHandler = async (_req, res, _next) => {
  const result = await BookService.getMostRecentBooks();

  res.status(200).json({
    success: true,
    message: "Book Retrieve successfully",
    data: result,
  });
};

export const getSingleBook: RequestHandler = async (req, res, _next) => {
  const id = req.params.id;

  const result = await BookService.getSingleBook(id);

  res.status(200).json({
    success: true,
    message: "Book Retrieve successfully",
    data: result,
  });
};
