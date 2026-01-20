import express from "express";
import { handleGetInquiryTransaction } from "../controllers/getInquiryTransactionv2.js";

const router = express.Router();

router.post("/", handleGetInquiryTransaction);

export default router;
