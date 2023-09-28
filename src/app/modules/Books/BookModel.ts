import mongoose, { Schema } from "mongoose";
import { IBook, IComment } from "./BookInterface";

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
    Image: {
      type: String,
      required: true,
    },
    Comment: {
      type: [
        new Schema<IComment>({
          user: { type: String },
          comment: { type: String },
        }),
      ],
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
