const mongoose = require("mongoose");

const FundsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true, // User reference (mandatory)
    },
    availableMargin: {
      type: Number,
      required: true, // Total margin available
    },
    usedMargin: {
      type: Number,
      required: true, // Margin currently used
    },
    availableCash: {
      type: Number,
      required: true, // Cash available for trading
    },
    openingBalance: {
      type: Number,
      required: true, // Opening balance for the day
    },
    openingBalance2: {
      type: Number,
      required: true, // Optional: Consider renaming for clarity
    },
    payin: {
      type: Number,
      required: true, // Amount paid in today
    },
    span: {
      type: Number,
      required: true, // SPAN margin
    },
    deliveryMargin: {
      type: Number,
      required: true, // Delivery-based trade margin
    },
    exposure: {
      type: Number,
      required: true, // Exposure margin
    },
    optionsPremium: {
      type: Number,
      required: true, // Premium for options
    },
    collateralLiquid: {
      type: Number,
      required: true, // Liquid collateral
    },
    collateralEquity: {
      type: Number,
      required: true, // Equity collateral
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = FundsSchema;
