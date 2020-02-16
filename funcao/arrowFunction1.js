let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // funcao arrow sempre é anonima, mas pode armazenar ela em uma variavel
    return 2 * a
}

dobro = a => 2 * a // se tiver apenas um parametro pode retirar o ()
// return em funcao arrow é implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // pode usar _ no lugar dos (), mais rápido de escrever, mas é melhor usar ()
console.log(ola())

// funcao arrow é bom pra escrever mais rápido
// retorno é sempre implícito, entao nao precisa digitar o return
// this fica preso na funcao, baseado no contexto em que a funçao foi escrita e nao no contexto em que foi chamada