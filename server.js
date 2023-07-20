import express from "express";

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("CICd server setup successfully here");
});

app.listen(port, () => {
  console.log(`The CICD server running port on ${port} `);
});
