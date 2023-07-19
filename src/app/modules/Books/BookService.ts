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

const getSingleBook = async (id: string) => {
  const result = await bookModel.findById(id);

  return result;
};

const editSingleBook = async (id: string, payload: Partial<IBook>) => {
  const result = await bookModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteSingleBook = async (id: string) => {
  const result = await bookModel.findByIdAndDelete({ _id: id });

  return result;
};

export const BookService = {
  getAllBooks,
  getMostRecentBooks,
  createNewBook,
  getSingleBook,
  editSingleBook,
  deleteSingleBook,
};
