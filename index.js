import express from "express";
import bodyParser from "body-parser";
import path from "path";
import multer from "multer";
import path from "path";

import { fileURLToPath } from "url";




const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // save to /public/images
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname );
  },
});
const upload = multer({ storage: storage });

app.get( "/",(req,res)=>{
    res.render("login.ejs");

});

app.get("/register",(req,res)=>{
    res.render("register.ejs");
});
app.get("/home",(req,res)=>{
    res.render("index.ejs");
});
app.get("/profile",(req,res)=>{
    res.render("profile.ejs");
});


app.get("/create",(req,res)=>{
    res.render("create.ejs");

});

app.get("/text-content",(req,res)=>{
  res.render("content.ejs");
});
app.post("/Home",(req,res)=>{
     res.render("index.ejs");
});
app.post("/upload", upload.single("image"), (req, res) => {
  const { title, summary, content } = req.body;
  const imagePath = `/images/${req.file.filename}`;

  res.render("index.ejs", { title, summary, imagePath }); // pass to EJS
});

app.listen(port,()=>{
    console.log(`Server is live on port:${port}`);
});