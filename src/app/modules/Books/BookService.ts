import { IBook } from "./BookInterface";
import bookModel from "./BookModel";

const createNewBook = async (book: IBook) => {
  const result = await bookModel.create(book);

  return result;
};

const getAllBooks = async () => {
  const result = await bookModel.find({});
  return result;
};

const getMostRecentBooks = async () => {
  const result = await bookModel.find({}).sort({ createdAt: -1 }).limit(10);

  return result;
};

export const BookService = {
  getAllBooks,
  getMostRecentBooks,
  createNewBook,
};
