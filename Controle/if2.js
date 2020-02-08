function teste1(num) {
    if(num > 7) // se voce quer várias sentenças associadas a um bloco tem que colocar {} se nao ele vai ler apenas a primeira linha de código
        console.log(num) // o bom é sempre usar {}
        console.log('Final') // teoricamente ela sempre está fora do if sem {} entao ele executa antes, pq eu só atribui valor pra teste1 depois
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // quando eu uso o ponto e virgula eu encerro, entao o console.log(num) nao faz parte do if
        console.log(num)
    }
}

teste2(6) // vai gerar
teste2(8) // vai gerar tbm, pq o ";" encerrou o if antes da hora e como nao precisa necessariamente usar {} o Js entende que o ; faz parte do código e tambem encerra ele
// entao o console.log é uma açao separada sem estrutura de controle do if
// nao usar ; com estruturas de controle