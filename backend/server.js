const express = require("express");
const connectDB = require("./config/db");
const HoldingsModel = require("./model/HoldingsModel");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");


const app = express();
app.use(express.json());

app.use(cors());  
app.use(bodyParser.json());


connectDB();

app.get("/addHoldings", async (req, res) => {
 let allHoldings = await HoldingsModel.find({});
 res.json(allHoldings);
});

app.get("/holdings", async (req, res) => {
  try {
    const data = await HoldingsModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).send("❌ Error fetching holdings");
  }
});

app.listen(3002, () => console.log("🚀 Server running on port 3002"));
