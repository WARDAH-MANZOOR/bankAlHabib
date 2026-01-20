
import express from "express";
import titleFetch from "./titleFtech.js";
import fundTransfer from "./fundTransfer.js";
import addTransactionInQueue from "./addTransactionInQueue.js";
import processQueueOffline from "./processQueueOffline.js";
import getInquiryTransactionv2 from "./getInquiryTransactionv2.js";

export default function (app: express.Application) {
  app.use("/titleFetch", titleFetch);
  app.use("/fundTransfer", fundTransfer);
  app.use("/addTransactionInQueue",addTransactionInQueue)
  app.use("/processQueueOffline", processQueueOffline);
  app.use("/getInquiryTransactionv2", getInquiryTransactionv2);

}