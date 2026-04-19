const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = new Admin({
    username,
    password: hashedPassword,
  });

  await admin.save();
  res.json({ msg: "Admin created ✅" });
};

// LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });

  if (!admin) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign(
    { id: admin._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" } //TODO: Change to 1h in production
  );

  res.json({ token });
};