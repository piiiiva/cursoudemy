const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { // posso colcoar uma funcao anonima dentro de uma chamada de outra funçao
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // posso passar uma => dentro da chamada de uma funcao

const pessoa = {
    falar : function () {
        console.log('Opa!')
    }
}
pessoa.falar()