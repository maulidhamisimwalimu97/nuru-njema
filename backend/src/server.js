const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   DATABASE CONNECTION
========================= */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nuru_njema",
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB connection failed:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

/* =========================
   HOME ROUTE
========================= */
app.get("/", (req, res) => {
  res.json({ message: "Nuru Njema API Running" });
});

/* =========================
   BLOGS
========================= */

/* GET BLOGS (FROM DATABASE) */
app.get("/api/blogs", (req, res) => {
  const sql = "SELECT * FROM blogs ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", err });
    }

    res.json(results);
  });
});

/* CREATE BLOG (SAVE TO DATABASE) */
app.post("/api/blogs", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title & content required" });
  }

  const sql = "INSERT INTO blogs (title, content) VALUES (?, ?)";

  db.query(sql, [title, content], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", err });
    }

    res.json({
      message: "Blog saved successfully",
      blogId: result.insertId,
    });
  });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});