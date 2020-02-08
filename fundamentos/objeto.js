// Obejeto {} é uma coleçao de chave valor

const prod1 = {} // Posso criar um objeto vazio e depois atribuir valores para ele
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

// Posso criar o bjeto com os atributos literais, na hora da criaçao do objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)
