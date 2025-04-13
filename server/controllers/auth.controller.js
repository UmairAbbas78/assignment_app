const db = require("../models");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/token.util");
const User = db.User;

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const existCheck = await User.findOne({ where: { username } });
    if (existCheck) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = await User.create({ username, password: hash });
    res.status(201).json({ message: "User created", user: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const token = generateToken(user);
    return res.status(200).json({ message: "Login successful", token });
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: e.message });
  }
};
