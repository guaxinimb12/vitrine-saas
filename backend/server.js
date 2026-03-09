const express = require("express")
const cors = require("cors")

const products = require("./routes/products")
const blog = require("./routes/blog")
const hotmart = require("./routes/hotmart")
const seoPages = require("./routes/seoPages")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/products", products)
app.use("/api/blog", blog)
app.use("/api/hotmart", hotmart)
app.use("/api/seo", seoPages)

app.use(express.static("frontend"))
app.use("/admin", express.static("admin"))

app.get("/health",(req,res)=>{
res.json({status:"online"})
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
console.log("Servidor rodando na porta",PORT)
})
