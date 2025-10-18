import express from "express";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Routes
app.get("/", (req, res) => res.render("login"));
app.get("/register", (req, res) => res.render("register"));
app.get("/home", (req, res) => res.render("index"));
app.get("/profile", (req, res) => res.render("profile"));
app.get("/create", (req, res) => res.render("create"));
app.get("/text-content", (req, res) => res.render("content"));

app.post("/Home", (req, res) => res.render("index"));

app.post("/upload", upload.single("image"), (req, res) => {
  const { title, summary, content } = req.body;
  const imagePath = `/images/${req.file.filename}`;
  res.render("index", { title, summary, imagePath });
});

// Start server
app.listen(port, () => {
  console.log(`Server is live on port: ${port}`);
});
