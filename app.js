const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day });
});

app.post("/", (req, res) => {
  console.log(req.body.newItem);
  res.send("OK");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
