const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();

const path = require("path");

app.use(express.json());
app.use(cors());

app.use("/public", express.static(path.join(__dirname, "public"))); //give acces to public folder

app.use("/api/about", require("./routes/aboutRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/experiences", require("./routes/experienceRoutes"));
app.use("/api/education", require("./routes/educationRoutes"));
app.use("/api/testermonials", require("./routes/testermonialsRoutes"));
app.use("/api/cv", require("./routes/cvRoutes"));

const connectDB = require("./config/db");
connectDB();

app.get("/", (req, res) => {
  res.send("Portfolio API Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
