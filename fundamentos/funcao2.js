//  Armazenando uma funcai em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


// Armazenando uma function arrow em uma variavel
/* A function => reduz o código, pq o 
=> substitui function, ou seja, nao precisa escrever function */
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
/* códigos de uma linha podem ser ainda mais reduzidos sendo abstraidos os () na => */
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // como só tinha um parametro até o () desse parametro foi desconsiderado o normal seria const imprimir2 = (a) => console.log(a)s
imprimir2('Legal!!!')
