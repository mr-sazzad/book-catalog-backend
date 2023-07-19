import { Router } from "express";
import {
  createNewBook,
  getAllBooks,
  getMostRecentBooks,
} from "./BookController";

const router = Router();

router.get("/", getAllBooks);

router.get("/recent", getMostRecentBooks);

router.post("/new-book", createNewBook);

export default router;
