
// import { Request, Response } from "express";
// import { fundTransfer } from "../services/fundTransfer.js";

// export const handleFundTransfer = async (req: Request, res: Response) => {
//   try {
//     const payload = req.body; // expects all FundTransfer parameters
//     const result = await fundTransfer(payload);
//     res.json(result);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// };
import { Request, Response } from "express";
import { fundTransfer } from "../services/fundTransfer.js";

const MAX_AMOUNT = 3000000;

export const handleFundTransfer = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    console.log("Incoming payload:", payload);

    // Convert to number
    const amount = Number(payload.TranAmount || payload.Amount || 0);

    if (isNaN(amount)) {
      return res.status(400).json({
        success: false,
        message: "Invalid transaction amount",
      });
    }

    // Max limit check
    if (amount > MAX_AMOUNT) {
      return res.status(400).json({
        success: false,
        message: `Transaction amount cannot exceed ${MAX_AMOUNT.toLocaleString()} units`,
      });
    }

    // Min limit check
    if (amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Transaction amount must be greater than 0",
      });
    }

    // ✅ Only call SOAP API if validation passes
    const result = await fundTransfer(payload);
    res.json(result);

  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
