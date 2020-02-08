/* é uma forma de agrupar multiplos valores de uma forma linear em uma estrutura só
a partir de um único idenficador, estrutura indexada acessada a partir de um número, onde cada posiçao dentro desse array eu posso chamar atraves de um número? */

const valores = [7.7, 8.9, 6.3, 9.2] // aqui o array esta sendo declarado de forma literal
console.log(valores[0], valores[3]) // aqui estou solicitando os valores dentro da const valores conforme sua posiçao, lembrando que começa a contar do zero
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // conta quantos elementos essa array contém
valores.push({id: 3}, false, null, 'teste') // push para incluir novos valores, e ele aceita dados de vários tipos, mas não é uma boa prática. 
console.log(valores)

console.log(valores.pop()) // exclui o último valor do array
delete valores [0] // exclui o elemento conforme sua posiçao
console.log(valores)

console.log(typeof valores)