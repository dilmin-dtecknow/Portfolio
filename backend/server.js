const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/about", require("./routes/aboutRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/experiences", require("./routes/experienceRoutes"));
app.use("/api/education", require("./routes/educationRoutes"));

const connectDB = require("./config/db");
connectDB();

app.get("/", (req, res) => {
  res.send("Portfolio API Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
