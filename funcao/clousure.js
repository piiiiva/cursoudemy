// Closure é o escopo criado quando a funcao é declarada
// Esse escopo permite a funçao acessa e manupular variáveis externas à função

// Contexto Léxico em ação!!!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // local
// nesse caso a const x utilizado foi Local, pq apesar da const minhaFuncao ter a funcao fora() e ela estar no global
// dentro dela tem outra funcao a dentro() e nela retorna x que foi declaro dentro da funcao fora(), a funçao dentro()
// vai buscar o valor de x dentro da funcao fora() e nao no global.