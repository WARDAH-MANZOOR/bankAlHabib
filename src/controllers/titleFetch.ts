import { Request, Response } from "express";
import { titleFetch } from "../services/titleFetch.js";

export const handleTitleFetch = async (req: Request, res: Response) => {
  try {
    const payload = req.body; // expects AgentId, AccountNo, etc.
    const result = await titleFetch(payload);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
