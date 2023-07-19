import { Router } from "express";
import { getAllBooks, getMostRecentBooks } from "./BookController";

const router = Router();

router.get("/", getAllBooks);
router.get("/recent", getMostRecentBooks);

export default router;
