const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

// SIGNUP (REGISTER)
// Step 1: Generate and send OTP
router.post('/signup', async (req, res) => {
  const { mobileNumber } = req.body;

  try {
    if (!/^\d{10}$/.test(mobileNumber)) {
      return res.status(400).json({ message: 'Invalid mobile number' });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save mobile and OTP in DB
    let user = await User.findOne({ mobileNumber });
    if (!user) {
      user = new User({ mobileNumber, otp });
    } else {
      user.otp = otp;
    }

    await user.save();

    // For now: just return OTP in response (in real apps, use SMS API)
    res.status(200).json({ message: 'OTP sent successfully', otp });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// VERIFY OTP AND CREATE USER

// Step 2: Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { mobileNumber, otp } = req.body;

  try {
    const user = await User.findOne({ mobileNumber });

    if (!user || user.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // OTP verified – clear it and log the user in
    user.otp = null;
    await user.save();

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', {
      expiresIn: '1h',
    });

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: false, // set true in production
    });

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});


module.exports = router;
