import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("welcome to home");
});

app.listen(port, () => {
  console.log("exampler app running");
});
