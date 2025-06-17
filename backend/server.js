const express = require("express");
const connectDB = require("./config/db");
const HoldingsModel = require("./model/HoldingsModel");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const cookieParser = require('cookie-parser');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./model/User"); 
// Removed duplicate and unnecessary top-level destructuring of mobilenumber


const app = express();

app.use(cors({
  origin: 'http://192.168.1.6:8080',
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// Connect MongoDB
connectDB(); // Add console.log just before this
console.log("⏳ Connecting to DB...");

//Holdings Section

app.get("/holdings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});
  /*
  const holdings = [
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
  },
  {
    instrument: 'HINDUNILVR',
    qty: 1,
    avgCost: 2335.85,
    ltp: 2417.40,
    curVal: 2417.40,
    pnl: 81.55,
    netChg: 3.49,
    dayChg: 0.21
  },
  {
    instrument: 'ITC',
    qty: 5,
    avgCost: 455.20,
    ltp: 462.85,
    curVal: 2314.25,
    pnl: 38.25,
    netChg: 1.68,
    dayChg: 0.43
  },
  {
    instrument: 'RELIANCE',
    qty: 1,
    avgCost: 2089.75,
    ltp: 2112.40,
    curVal: 2112.40,
    pnl: 22.65,
    netChg: 1.08,
    dayChg: 1.44
  },
  {
    instrument: 'TATASTEEL',
    qty: 3,
    avgCost: 125.30,
    ltp: 128.95,
    curVal: 386.85,
    pnl: 10.95,
    netChg: 2.91,
    dayChg: -0.23
  },
  {
    instrument: 'INFY',
    qty: 6,
    avgCost: 1578.90,
    ltp: 1555.45,
    curVal: 1555.45,
    pnl: -23.45,
    netChg: -1.49,
    dayChg: -1.60
  }
  ];
  try {
    await HoldingsModel.deleteMany({});
    await HoldingsModel.insertMany(holdings);
    return res.send("Holding seeded successfully."); // use return to prevent further execution
  } catch (err) {
    console.error(err);
    return res.status(500).send("Seeding failed.");
  }
});*/


// Add holdings
app.post("/holdings", async (req, res) => {
  try {
    await HoldingsModel.deleteMany({});
    await HoldingsModel.insertMany(req.body);
     const result = await HoldingsModel.insertMany(req.body);
    res.json({ message: "Holdings added successfully", done: true });
  } catch (err) {
    res.status(500).send("Error adding holdings");
  }
});

//END




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

// Positions Section

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

app.get("/seedHoldings", async (req, res) => {
  const holdings = []; // your array (currently empty, add objects as needed)
  try {
    await HoldingsModel.deleteMany({});
    await HoldingsModel.insertMany(holdings);
    res.json({ message: "Seeded successfully" });
  } catch (err) {
    res.status(500).send("❌ Seeding failed");
  }
});

//End
//orders Section

app.get("/orders", async (req, res) => {
  try {
    const orders = await OrdersModel.find().sort({ _id: -1 }); // latest orders first
    res.status(200).json({ orders });
  } catch (err) {
    console.error("Fetch orders error:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});


app.post("/orders", async (req, res) => {
  try {
    const order = new OrdersModel(req.body);
    await order.save();
    const orders = await OrdersModel.find().sort({ _id: -1 }); 
    res.status(201).json({ message: "Order created successfully", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create order" });
  }
});
app.get("/register", (req, res) => {
  res.send("Register endpoint");
}); 


// Assuming you have a User model defined

app.post('/register', async (req, res) => {
  try {
    const { username, email, password, mobileNumber } = req.body;

    // Validate all fields
    if (!username || !email || !password || !mobileNumber) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check for existing user
    const existingUser = await User.findOne({ mobileNumber });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this mobile number already exists' });
    }

    // Create user
    const newUser = new User({ username, email, password, mobileNumber });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { mobileNumber, password } = req.body;

  if (!mobileNumber || !password) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  try {
    const user = await User.findOne({ mobileNumber });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Optional: generate JWT and send token here
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



const PORT = process.env.PORT || 3002;
app.listen(3002, () => console.log("🚀 Server running on port 3002"));
