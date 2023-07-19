import { Router } from "express";
import { getAllBooks } from "./BookController";

const router = Router();

router.get("/", getAllBooks);

export default router;
