const express = require("express");

const app = express();

app.get("/", (req, res) => {
  for (let i = 0; i < 1e8; i++) {
    // some long running task
  }

  res.send("OK...");
});

app.listen(3000, () => {
  console.log(`🚀 server @ http://localhost:3000`);
});
