const express=require("express")
const router=express.Router()

let products=[]

router.get("/",(req,res)=>{
res.json(products)
})

router.post("/",(req,res)=>{
products.push(req.body)
res.json({status:"produto adicionado"})
})

module.exports=router
