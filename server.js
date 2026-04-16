const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/about", require("./routes/aboutRoutes"));

const connectDB = require("./config/db");
connectDB();

app.get("/", (req, res) => {
  res.send("Portfolio API Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));