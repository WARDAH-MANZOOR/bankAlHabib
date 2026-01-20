import express from "express";
import { handleFundTransfer } from "../controllers/fundTransfer";

const router = express.Router();

router.post("/", handleFundTransfer);

export default router;
