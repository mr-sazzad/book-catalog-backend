import bookModel from "./BookModel";

const getAllBooks = async () => {
  const result = await bookModel.find({});
  return result;
};

export const BookService = {
  getAllBooks,
};
