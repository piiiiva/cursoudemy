console.log(soma(3, 4)) // posso executar antes mesmo de declarar a funçao pq no js todas as funçoes sao carregadas antes de ler o código para executar

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
return x - y
}
console.log(sub(3, 4)) // preciso declarar a function expression antes de executar o código, pq apesar de ser uma funçao, ela está em uma const entao o js nao carrega a funçao antes de executar o código

// named function expressio - POUCO USADA
const mult = function mult(x, y) {
    return x * y
}