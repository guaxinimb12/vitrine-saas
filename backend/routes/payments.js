const express = require("express")
const router = express.Router()
const mercadopago = require("mercadopago")

mercadopago.configure({
access_token: process.env.MP_TOKEN
})

router.post("/pix", async(req,res)=>{

const payment = await mercadopago.payment.create({
transaction_amount: req.body.amount,
payment_method_id: "pix",
description: req.body.product
})

res.json(payment.body)

})

module.exports = router
