import express from "express";
import { handleTitleFetch } from "../controllers/titleFetch.js";

const router = express.Router();

router.post("/", handleTitleFetch);

export default router;
