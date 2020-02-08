// é indicada para usar com quantidade indeterminada de repetições
// Ex: enquanto o usuário nao digitar -1 fique repetindo o processo tal
// o while pode ser usado para repetiçoes com quantidades determinadas, mas aí geralmente o for é melhor

function geiInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = geiInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`) // lembrando que usa `` para string quando quer colocar um valor gerado por uma const ou func e tal ...
} // lembrando tambem que uso console.log para ir acompanhando como o código se comporta, nao vou usar isso no código depois

console.log('Até a próxima')
