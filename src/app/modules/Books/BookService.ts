import bookModel from "./BookModel";

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
};
