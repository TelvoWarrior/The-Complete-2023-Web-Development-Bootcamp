import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const data = {
  message: "Enter your name below 👇",
};

app.get("/", (req, res) => {
  res.render("index.ejs",data);
});

app.post("/submit", (req, res) => {
  var calculations = (req.body["fName"] + req.body["lName"]).length
  data.message=`There are ${calculations} letters in your name.`
  res.render("index.ejs",data)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
