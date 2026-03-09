function generateArticle(product){

return {

title:`${product} preço e avaliação`,

content:`

<h1>${product}</h1>

<p>Veja análise completa do ${product}</p>

<h2>Vale a pena comprar?</h2>

<p>Confira vantagens e avaliações.</p>

`

}

}

module.exports=generateArticle
