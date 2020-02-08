const ImprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }

}

ImprimirResultado(10)
ImprimirResultado(4)
ImprimirResultado('Epa!') // a lógica vai ser, Essa string é >= 7? não, entao 'Reprovado', isso acontece pq a linguagem é fracamente tipada
// CUIDADO! na teoria deveria ser um erro, entao vai ter que cuidar na hora de codar, tem que aceitar só números por exemplo

// se for apenas uma sentença de código pode ser suprimido o {} tanto do if quanto do else

/*
const ImprimirResultado = function(nota) {
    if(nota >= 7) 
        console.log('Aprovado!')
    else 
        console.log('Reprovado!')
}

*/