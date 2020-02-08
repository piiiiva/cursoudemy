function soBoaNoticia(nota) {
    if(nota >= 7) { // sempre dentro dos () do if eu tenho uma expressao que retorna verdadeiro ou falso
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) { // apesar de nao ter uma expressao que retorne V ou F, o JS entende que ali tem que ter um valor V ou F, entao ele vai pegar esse valor e converter para V ou F
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // falso, nao tem valor definido
seForVerdadeEuFalo(null) // falso, nao tem valor
seForVerdadeEuFalo(undefined) // falso, nao tem valor
seForVerdadeEuFalo(NaN) // falso, nao tem valor
seForVerdadeEuFalo('') // falso, nao tem valor, indica uma string, mas é uma string vazia
seForVerdadeEuFalo(0) // falso, zero é o único número que da falso, é como se nao tivesse valor
seForVerdadeEuFalo(-1) // verdadeiro
seForVerdadeEuFalo(' ') // verdadeiro, é uma string com espaço
seForVerdadeEuFalo([]) // verdadeiro, assume um array
seForVerdadeEuFalo([1, 2]) // verdadeiro
seForVerdadeEuFalo({}) // verdadeiro, vira um object
