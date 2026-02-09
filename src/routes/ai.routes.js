const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `🤖 IA respondeu: ${message}`
  });
});

module.exports = router;

