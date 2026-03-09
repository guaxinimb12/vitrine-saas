const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// pasta do site
app.use(express.static(path.join(__dirname, "../admin")))

// rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../admin/index.html"))
})

// health check render
app.get("/health", (req,res)=>{
  res.send("OK")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT)
})
