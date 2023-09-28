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

export const editSingleBook: RequestHandler = async (req, res, _next) => {
  const id = req.params.id;
  const payload = req.body;

  const actualPayload = payload.formattedData;

  const result = await BookService.editSingleBook(id, actualPayload);

  res.status(200).json({
    success: true,
    message: "Book edited successfully",
    data: result,
  });
};

export const deleteSingleBook: RequestHandler = async (req, res, _next) => {
  const id = req.params.id;

  const result = await BookService.deleteSingleBook(id);

  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
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

export const postComment: RequestHandler = async (req, res, _next) => {
  const id = req.params.id;
  const payload = req.body;

  const result = await BookService.postComment(id, payload.data.review);

  res.status(200).json({
    success: true,
    message: "comment added successfully",
    data: result,
  });
};

export const getAllComments: RequestHandler = async (req, res, _next) => {
  const id = req.params.id;

  const result = await BookService.getAllComments(id);

  res.status(200).json({
    success: true,
    message: "comment retrieved successfully",
    data: result,
  });
};
