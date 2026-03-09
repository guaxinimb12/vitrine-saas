function generateSEO(product){

return {

title:`${product.name} preço e avaliação completa`,

article:`

<h2>Vale a pena comprar ${product.name}?</h2>

<p>${product.description}</p>

<h3>Preço</h3>

<p>${product.price}</p>

<h3>Onde comprar</h3>

<p>Veja as melhores ofertas disponíveis.</p>

`

}

}

module.exports = generateSEO
