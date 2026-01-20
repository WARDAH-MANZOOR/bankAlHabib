import { Request, Response } from "express";
import { fundTransfer } from "../services/fundTransfer.js";

export const handleFundTransfer = async (req: Request, res: Response) => {
  try {
    const result = await fundTransfer(req.body);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
