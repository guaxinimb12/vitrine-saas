const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static("../frontend"))
app.use("/admin", express.static("../admin"))

app.get("/", (req,res)=>{
res.send("Vitrine SaaS rodando 🚀")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
console.log("Servidor rodando na porta", PORT)
})
