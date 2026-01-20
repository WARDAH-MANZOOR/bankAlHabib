
import express from "express";
import titleFetch from "./titleFtech.js";
import fundTransfer from "./fundTransfer.js";

export default function (app: express.Application) {
  app.use("/titleFetch", titleFetch);
  app.use("/fundTransfer", fundTransfer);

}