const express = require("express");
const connectDB = require("./config/db");
const HoldingsModel = require("./model/HoldingsModel");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const PositionsModel = require("./model/PositionsModel");


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
connectDB();

// ✅ Route to GET holdings (used in frontend)
app.get("/holdings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});



// ✅ Route to POST and insert new holdings (for backend testing)
app.post("/addHoldings", async (req, res) => {
  try {
    await HoldingsModel.deleteMany({});
    const result = await HoldingsModel.insertMany(req.body);
    res.json({ message: "Success", done: true });
  } catch (err) {
    res.status(500).send("❌ Error adding holdings");
  }
});

/*
app.get("/seedPositions", async (req, res) => {
  const positions = [
    {
      instrument: "SBIN",
      type: "BUY",
      qty: 10,
      avgCost: 620.25,
      ltp: 635.40,
      curVal: 6354.00,
      pnl: 151.50,
      netChg: 2.44,
      dayChg: 1.25
    },
    {
      instrument: "AXISBANK",
      type: "SELL",
      qty: 5,
      avgCost: 800.00,
      ltp: 785.00,
      curVal: 3925.00,
      pnl: -75.00,
      netChg: -1.88,
      dayChg: -0.95
    
    },
    {
      instrument: "RELIANCE",
      type: "BUY",
      qty: 2,
      avgCost: 2500.00,
      ltp: 2550.00,
      curVal: 5100.00,
      pnl: 100.00,
      netChg: 4.00,
      dayChg: 2.50
    },
    {
      instrument: "TCS",
      type: "SELL",
      qty: 1,
      avgCost: 3500.00,
      ltp: 3450.00,
      curVal: 3450.00,
      pnl: -50.00,
      netChg: -1.43,
      dayChg: -1.20
    }



  ];

  try {
    await PositionsModel.deleteMany({});
    await PositionsModel.insertMany(positions);
    res.send("Positions seeded successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Seeding failed.");
  }
});
*/



app.get("/positions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.post("/addPositions", async (req, res) => {
  try {
    await PositionsModel.deleteMany({});
    const result = await PositionsModel.insertMany(req.body);
    res.json({ message: "Positions added", done: true });
  } catch (err) {
    res.status(500).send("Error adding positions");
  }
});


/*
// ✅ Optional: One-time seeding using GET /seedHoldings
app.get("/seedHoldings", async (req, res) => {
  const holdings = [ ... ]; // your array
  try {
    await HoldingsModel.deleteMany({});
    await HoldingsModel.insertMany(holdings);
    res.json({ message: "Seeded successfully" });
  } catch (err) {
    res.status(500).send("❌ Seeding failed");
  }
});
*/

app.listen(3002, () => console.log("🚀 Server running on port 3002"));
