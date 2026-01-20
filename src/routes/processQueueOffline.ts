import express from "express";
import { handleProcessQueueOffline } from "../controllers/processQueueOffline.js";

const router = express.Router();

router.post("/", handleProcessQueueOffline);

export default router;
