function generateArticle(product){

return {

title:`${product.name} preço e avaliação completa`,

content:`
<h1>${product.name}</h1>

<p>${product.description}</p>

<h2>Vale a pena comprar?</h2>

<p>Veja análise completa e avaliações do produto.</p>
`

}

}

module.exports = generateArticle
