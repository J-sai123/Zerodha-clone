import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import Holdings from './model/HoldingsModel';

dotenv.config();

const app: Application = express();
app.use(express.json());

const PORT: string | number = process.env.PORT || 3002;
const uri: string | undefined = process.env.MONGO_URL;

if (!uri) {
  throw new Error("MONGO_URL is not defined in environment variables.");
}

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log("DB connected!"))
  .catch(err => console.error("DB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`);
});

// Route to insert holdings
app.post("/addHoldings", async (req: Request, res: Response) => {
  const holdingsData = [
    {
      instrument: 'BHARTIARTL',
      qty: 2,
      avgCost: 538.05,
      ltp: 541.15,
      curVal: 1082.30,
      pnl: 6.20,
      netChg: 0.38,
      dayChg: 0.56
    },
    {
      instrument: 'HDFCBANK',
      qty: 2,
      avgCost: 1383.40,
      ltp: 1522.35,
      curVal: 3044.70,
      pnl: 277.90,
      netChg: 10.04,
      dayChg: 0.11
    }
    // Add more holdings here
  ];

  try {
    const savedHoldings = [];

    for (const holding of holdingsData) {
      const newHolding = new Holdings(holding);
      const saved = await newHolding.save();
      savedHoldings.push(saved);
    }

    res.status(201).json({
      message: "Holdings added successfully!",
      data: savedHoldings,
    });
  } catch (error) {
    console.error("Error saving holdings:", error);
    res.status(500).json({ error: "Failed to save holdings." });
  }
});
