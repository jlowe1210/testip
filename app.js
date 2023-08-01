const express = require("express");
const app = express();
const requestIp = require("request-ip");
app.use(requestIp.mw());

app.get("/", (req, res) => {
  const ip = req.clientIp;

  res.send(ip);
});

app.listen(process.env.PORT || 3001, () => {
  console.log("listening on port 3001");
});
