const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Wake up", "Drink Coffee"];
var day = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
