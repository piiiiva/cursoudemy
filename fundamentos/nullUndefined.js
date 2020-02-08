let valor // variável nao iniciada, não atribui nada pra ela ainda, mas está definida a variável
console.log(valor) // vai me retornar um valr undefined

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {} // objeto vazio
console.log(produto.preco) // retorna undefined pq eu chamei o preço que nem criei e obvio que nao defini nada pra ele
console.log(produto) // vai me retornar o objeto mesmo que vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, deixar que o sistema use o undefined quando tiver algo sem valor definido

/* na prática, para uma empresa o null poderia ser usado para produtos que eu não queira vender, pq ainda preciso tratar os dados deles ????
undefined ficaria com os produtos que eu preciso atribuir valor, ai posso ou nao escolher atribuir null
e ainda posso ter o valor zero, para produtos grátis 
Rever a aula qualquer coisa */