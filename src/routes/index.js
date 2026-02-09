const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "Vitrine SaaS API",
    version: "1.0",
    status: "online"
  });
});

router.use("/products", require("./products.routes"));
router.use("/users", require("./users.routes"));
router.use("/payments", require("./payments.routes"));
router.use("/ai", require("./ai.routes"));

module.exports = router;
