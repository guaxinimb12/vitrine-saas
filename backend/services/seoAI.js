function generateSEO(product){

const title = `${product.name} preço, avaliação e onde comprar`
const description = `Compre ${product.name} com o melhor preço. Veja avaliações, comparação e onde comprar online.`

const article = `
<h1>${product.name}</h1>
<p>${product.description}</p>

<h2>Vale a pena comprar?</h2>
<p>Veja análise completa e melhores ofertas disponíveis.</p>
`

return {
title,
description,
article
}

}

module.exports = generateSEO
