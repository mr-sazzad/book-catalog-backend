import { Router } from "express";
import {
  createNewBook,
  deleteSingleBook,
  editSingleBook,
  getAllBooks,
  getAllComments,
  getMostRecentBooks,
  getSingleBook,
  postComment,
} from "./BookController";

const router = Router();

router.get("/", getAllBooks);

router.get("/recent", getMostRecentBooks);

router.post("/new-book", createNewBook);

router.get("/:id", getSingleBook);

router.post("/:id/comment", postComment);

router.get("/:id/comments", getAllComments);

router.patch("/:id", editSingleBook);

router.delete("/:id", deleteSingleBook);

export default router;
