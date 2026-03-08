const express = require("express")
const cors = require("cors")

const products = require("./routes/products")
const payments = require("./routes/payments")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/products", products)
app.use("/api/payments", payments)

app.get("/", (req,res)=>{
res.send("Marketplace MinhaCompra rodando 🚀")
})

app.get("/health", (req,res)=>{
res.json({status:"ok"})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
console.log("Servidor rodando na porta", PORT)
})
