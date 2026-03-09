const express = require("express");
const router = express.Router();

router.post("/webhook", (req, res) => {
  console.log("Webhook Hotmart recebido:", req.body);
  res.status(200).send("OK");
});

module.exports = router;

