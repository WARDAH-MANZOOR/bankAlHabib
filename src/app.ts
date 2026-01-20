import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from "./routes/index.js";
import dotenv from "dotenv";
import path from 'path';
import cookieParser from 'cookie-parser';
import { errorHandler } from "./utils/middleware.js";


const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(cookieParser());


// Import all routes from routes/index

routes(app);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Not Found - Invalid URL',
  });
});

app.use(errorHandler)
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
});


export default app;
