import { Router } from "express";
import {
  createNewBook,
  getAllBooks,
  getMostRecentBooks,
  getSingleBook,
} from "./BookController";

const router = Router();

router.get("/", getAllBooks);

router.get("/recent", getMostRecentBooks);

router.post("/new-book", createNewBook);

router.get("/:id", getSingleBook);

export default router;
