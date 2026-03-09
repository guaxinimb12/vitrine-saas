const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const Product = require("./models/Product")
const seoAI = require("./services/seoAI")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("../frontend"))
app.use("/admin",express.static("../admin"))

mongoose.connect(process.env.MONGO_URL)

app.get("/api/products",async(req,res)=>{
const products = await Product.find()
res.json(products)
})

app.post("/api/products",async(req,res)=>{
const p = await Product.create(req.body)
res.json(p)
})

app.get("/produto/:slug",async(req,res)=>{

const product = await Product.findOne({slug:req.params.slug})

if(!product){
return res.send("Produto não encontrado")
}

const seo = seoAI(product)

res.send(`
<html>

<title>${seo.title}</title>

<h1>${product.name}</h1>

<p>${product.description}</p>

${seo.article}

<a href="${product.affiliate}" target="_blank">
Comprar
</a>

</html>
`)

})

app.get("/",(req,res)=>{
res.send("Marketplace MinhaCompra rodando 🚀")
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
console.log("Servidor rodando na porta",PORT)
})
