let contador = 1
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) {  // lembrando que eu posso definir let var ou ate const direto no for
    console.log(`i = ${i}`)
}    

// da pra ver que o for é melhor quando trabalho com repetiçoes com qtde definida

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) { // length é comprimento, e como esta referenciando nota e nota é um array é entao o comprimento do array de nota
    console.log(`nota = ${notas[i]}`)
}
// muito comun navegar entre os elementos de um array em Js, mas tem formas melhores