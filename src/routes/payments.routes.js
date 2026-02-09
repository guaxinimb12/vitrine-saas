const express = require("express");
const router = express.Router();

router.post("/pix", (req, res) => {
  const { amount } = req.body;

  res.json({
    status: "pending",
    provider: "PIX",
    amount,
    qrCode: "000201PIXCODEEXEMPLO"
  });
});

module.exports = router;
