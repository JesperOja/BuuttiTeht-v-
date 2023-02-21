import express from "express";
import cors from "cors";
import bookRouter from "./routes/book.js";
import { connectToDatabase } from "./util/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/book", bookRouter);

const start = async () => {
  await connectToDatabase();
};

start();

export default app;
