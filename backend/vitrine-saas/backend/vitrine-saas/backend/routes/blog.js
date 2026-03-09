const express=require("express")
const router=express.Router()

router.get("/:slug",(req,res)=>{

const slug=req.params.slug

res.send(`

<html>

<title>${slug}</title>

<h1>${slug}</h1>

<p>Artigo otimizado para SEO sobre ${slug}</p>

</html>

`)

})

module.exports=router
