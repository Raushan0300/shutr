const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/Users");

const code = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ err: true, message: "User already exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const newUser = new User({
        name,
        email,
        password: hash,
      });
      await newUser.save();
      res
        .status(201)
        .json({ err: false, message: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: true, message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          { name: user.name, email: user.email },
          process.env.JWT_SECRET
        );
        await User.updateOne({ email: user.email }, { token });
        return res
          .status(200)
          .json({ err: false, message: "Logged In Successfully", token });
      } else {
        res.status(401).json({ err: true, message: "Invalid Password" });
      }
    } else {
      res.status(400).json({ err: true, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/forgot", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    const codeValue = code();
    if (user) {
      res
        .status(200)
        .json({
          err: false,
          message: "Email sent to your email address",
          code: codeValue,
        });
    } else {
      res.status(400).json({ err: true, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/reset", async (req, res) => {
  const { email, password, code } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (code === code) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        await User.updateOne({ email }, { password: hash });
        res
          .status(200)
          .json({ err: false, message: "Password reset successfully" });
      }
    } else {
      res.status(400).json({ err: true, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/logout", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const user = await User({ token });
    if (user) {
      await User.updateOne({ token }, { token: "" });
      res.status(200).json({ err: false, message: "Logged Out Successfully" });
    } else {
      res.status(400).json({ err: true, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
