import { Router } from "express";
import {
  createNewBook,
  editSingleBook,
  getAllBooks,
  getMostRecentBooks,
  getSingleBook,
} from "./BookController";

const router = Router();

router.get("/", getAllBooks);

router.get("/recent", getMostRecentBooks);

router.post("/new-book", createNewBook);

router.get("/:id", getSingleBook);

router.put("/:id", editSingleBook);

export default router;
