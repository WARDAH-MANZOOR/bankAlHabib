import { Request, Response } from "express";
import { processQueueOfflineService } from "../services/processQueueOffline.js";

export const handleProcessQueueOffline = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    console.log("Incoming payload:", payload);

    const result = await processQueueOfflineService(payload);
    res.json(result);

  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
