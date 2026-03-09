function recommend(products){

return products
.sort(()=>0.5-Math.random())
.slice(0,4)

}

module.exports=recommend
