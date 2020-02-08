// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Retorna no console NaN pq o b não é um atributo pré definido, e como nao informei ele é como se fizesse uma soma com vazio
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // foram informados o a b c d e --> a funcao só pede a e b entao descarta o resto
imprimirSoma() // vai retornar NaN pq nao tem nada atribuido em nenhum lugar

// Funçao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // Aqui nao aparece NaN pq apesar de ter informado só o valor de a na própria funçao o valor de b está pré definido
console.log(soma())
