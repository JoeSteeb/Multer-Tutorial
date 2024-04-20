const express = require("express");
const path = require("path");
const { listFilenames } = require("./files");
const app = express();
const multer = require("multer");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.redirect("/upload");
});

app.get("/upload", (req, res) => {
  res.render("upload", { title: "Home" });
});

upload = multer({ dest: "./public/images" });

app.post("/upload/submit", upload.single("file"), function (req, res) {
  res.redirect("/");
});

app.get("/view", (req, res) => {
  listFilenames("./public/images").then((fileNames) => {
    console.log(fileNames);
    res.render("view", { title: "Home", fileNames });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
