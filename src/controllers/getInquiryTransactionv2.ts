import { Request, Response } from "express";
import { getInquiryTransactionService } from "../services/getInquiryTransactionv2.js";

export const handleGetInquiryTransaction = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    console.log("Incoming payload:", payload);

    const result = await getInquiryTransactionService(payload);
    res.json(result);

  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
