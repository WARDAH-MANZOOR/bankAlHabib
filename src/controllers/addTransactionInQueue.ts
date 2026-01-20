import { Request, Response } from "express";
import { addTransactionInQueue } from "../services/addTransactionInQueue.js";

const QUEUE_THRESHOLD = 3_000_000;

export const handleAddTransactionInQueue = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    // Normalize amount
    const amount = Number(payload.TranAmount || payload.Amount || 0);

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid transaction amount",
      });
    }

    // Only queue if amount exceeds threshold
    if (amount <= QUEUE_THRESHOLD) {
      return res.status(400).json({
        success: false,
        message: `Transaction amount must be greater than ${QUEUE_THRESHOLD.toLocaleString()} units for queue processing`,
      });
    }

    // Call SOAP API
    const result = await addTransactionInQueue(payload);
    res.json(result);

  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
