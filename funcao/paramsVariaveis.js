function soma() {
    let soma = 0
    for (i in arguments) { // toda funcao tem esse array disponível, e se nenhum argumento foi definido voce pode usar ele
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste")) // nao é muito bom essa forma
console.log(soma('a', 'b', 'c'))

// na versao atual rest/spread sao mais utilizados
