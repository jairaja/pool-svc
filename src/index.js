const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

let count = 0;

app.get("/", (req, res) => {
  count++;
  console.log(`Count ${count}`);
  res.send("\n\nHello, world!\n\n");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
