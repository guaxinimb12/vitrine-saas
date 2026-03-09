const express = require("express")
const router = express.Router()

router.get("/generate",(req,res)=>{

let pages=[]

for(let i=1;i<=10000;i++){

pages.push({
url:"/produto-"+i,
title:"Produto "+i+" barato online"
})

}

res.json(pages)

})

module.exports = router
