import mongoose, { Schema } from "mongoose";
import { IBook } from "./BookInterface";

const BookSchema = new Schema<IBook>(
  {
    Title: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    Genre: {
      type: String,
      required: true,
    },
    PublishedDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const bookModel = mongoose.model("Book", BookSchema);

export default bookModel;
