const express = require('express')
const router = express.Router()

router.post('/pix', (req, res) => {
  res.json({
    status: "Pagamento PIX criado",
    qr_code: "pix-exemplo"
  })
})

module.exports = router
