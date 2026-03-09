const express=require("express")
const cors=require("cors")

const products=require("./routes/products")
const blog=require("./routes/blog")
const seoPages=require("./routes/seoPages")

const app=express()

app.use(cors())
app.use(express.json())

app.use("/api/products",products)
app.use("/blog",blog)
app.use("/produto",seoPages)

app.use(express.static("../frontend"))
app.use("/admin",express.static("../admin"))

app.get("/",(req,res)=>{
res.send("MinhaCompra marketplace rodando 🚀")
})

const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
console.log("Servidor rodando",PORT)
})
