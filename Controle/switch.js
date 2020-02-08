// Switch , múltiplas seleções

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:    
            console.log('Quadro de Honra')
            break // se nao usar o break ele vai executar todos os cases e console.log abaixo
        case 8: case 7: case 6: // posso colocar um do lado do outro sem problemas
            console.log('Aprovado')
            break
        case 5: case 4: case 3:
            console.log('Em Recuperação')
            break
        case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
            break; // nao preciso colocar break, mas por padrao usa pq ele pode ficar em qualquer lugar e aí ele precisa de break
    }
    console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)