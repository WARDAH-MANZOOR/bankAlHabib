import express from "express";
import { handleAddTransactionInQueue } from "../controllers/addTransactionInQueue.js";

const router = express.Router();

router.post("/", handleAddTransactionInQueue);

export default router;
