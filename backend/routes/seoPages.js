const express = require("express")
const router = express.Router()

router.get("/:slug",(req,res)=>{

const slug = req.params.slug

res.send(`
<html>

<title>${slug} preço e avaliação</title>

<h1>${slug}</h1>

<p>Veja análise completa do produto ${slug}</p>

</html>
`)

})

module.exports = router
