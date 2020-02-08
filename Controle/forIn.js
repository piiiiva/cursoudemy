// não é uma alternativa tao interessante mas tem que conhecer

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // o in percorre os índices do array, nao o valor do atributo em si
    console.log(i, notas[i]) // aí tenho que chamar o atributo aqui pra saber o valor dele
} // lembrando que existem alternativas mais interessantes, quase nunca será usado, mas mesmo assim é melhor percorrer um array assim do que só com o for normal

const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Silva',
    idade: 30,
    peso: 106
}

for (let atributo in pessoa) { // esse atributo eu escrevi e depois referenciei ele em pessoa
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// for in é bom para acessar os atributos de um objeto, mas para array tem formas melhores
