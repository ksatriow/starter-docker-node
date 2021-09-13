"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Satrio!");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
