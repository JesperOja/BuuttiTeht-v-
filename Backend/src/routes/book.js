import express from "express";
import { Book } from "../models/index.js";

const router = express.Router();

const bookFinder = async (req, res, next) => {
  req.book = await Book.findByPk(req.params.id);
  next();
};

router.get("/", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

router.post("/add", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.put("/:id", bookFinder, async (req, res) => {
  if (req.book) {
    req.book.author = req.body.author;
    req.book.title = req.body.title;
    req.book.description = req.body.description;

    await req.book.save();
    res.json(req.book);
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", bookFinder, async (req, res) => {
  if (req.book) {
    await req.book.destroy();
    res.json("Removed succesfully!");
  } else {
    res.status(204).end();
  }
});

export default router;
