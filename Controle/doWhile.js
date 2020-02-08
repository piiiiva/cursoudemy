function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)    
}

let opcao = -1

do { // ele executa o bloco antes de executar a condiçao do while, entao mesmo opcao recebendo -1 o do vai ser executado 
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1);

console.log('Até a próxima')

// muito pouco utilizada, EVITAR