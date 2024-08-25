import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { verifyHandler } from "./verifyHandler";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.post("/api/verify", verifyHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
