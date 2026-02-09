const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, email: "teste@saas.com" }]);
});

module.exports = router;
