const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const mysql = require("mysql2");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const JWT_SECRET = "nuru_njema_secret_key";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true })); // ✅ ADD THIS

app.use(cors());
app.use(express.json());

/* ✅ FIX: static files AFTER app exists */
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

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

/* IMAGE UPLOAD */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* =========================
   HOME ROUTE
========================= */
app.get("/", (req, res) => {
  res.json({ message: "Nuru Njema API Running" });
});

/* =========================
   BLOGS
========================= */

app.get("/api/blogs", (req, res) => {
  const sql = "SELECT * FROM blogs ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.json(results);
  });
});

/* CREATE BLOG */
app.post("/api/blogs", upload.single("image"), (req, res) => {
  const { title, content } = req.body;
  const image = req.file
  ? `http://localhost:5000/uploads/${req.file.filename}`
  : null;

  if (!title || !content) {
    return res.status(400).json({ message: "Title & content required" });
  }

  const sql =
    "INSERT INTO blogs (title, content, image) VALUES (?, ?, ?)";

  db.query(sql, [title, content, image], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", err });
    }

    res.json({
      message: "🎉 Blog saved successfully",
      blogId: result.insertId,
      image,
    });
  });
});

/* DELETE BLOG */
app.delete("/api/blogs/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM blogs WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        err,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.json({
      message: "🗑️ Blog deleted successfully",
    });
  });
});

/* GET BLOG COUNT */
app.get("/api/blogs/count", (req, res) => {
  const sql = "SELECT COUNT(*) AS total FROM blogs";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.json({
      total: results[0].total,
    });
  });
});

/* =========================
   DONORS
========================= */

app.get("/api/donors", (req, res) => {
  const sql = "SELECT * FROM donors ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        err,
      });
    }

    res.json(results);
  });
});

/* =========================
   PARTNERS
========================= */

/* GET PARTNERS */
app.get("/api/partners", (req, res) => {
  const sql = "SELECT * FROM partners ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        err,
      });
    }

    res.json(results);
  });
});

/* DELETE PARTNER */
app.delete("/api/partners/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM partners WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        err,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Partner not found",
      });
    }

    res.json({
      message: "🗑️ Partner deleted successfully",
    });
  });
});

/* =========================
   MESSAGES
========================= */

/* GET MESSAGES */
app.get("/api/messages", (req, res) => {
  const sql = "SELECT * FROM messages ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        err,
      });
    }

    res.json(results);
  });
});

/* DELETE MESSAGE */
app.delete("/api/messages/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM messages WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        err,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.json({
      message: "🗑️ Message deleted successfully",
    });
  });
});

/* =========================
   DASHBOARD COUNTS
========================= */

app.get("/api/dashboard/counts", (req, res) => {
  const sql = `
    SELECT 
      (SELECT COUNT(*) FROM blogs) AS blogs,
      (SELECT COUNT(*) FROM donors) AS donors,
      (SELECT COUNT(*) FROM partners) AS partners,
      (SELECT COUNT(*) FROM messages) AS messages
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        err,
      });
    }

    res.json(results[0]);
  });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email & password required" });
  }

  const sql = "SELECT * FROM admins WHERE email = ?";

  db.query(sql, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const admin = results[0];

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
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