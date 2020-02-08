/*
function imprimirNomeGritado(obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = { nome: 'Roberto' }
// imprimirNomeGritado(obj) vai dar erro pq usei obj.name.toUpperCase na funçao 
*/
// mas defini como nome no objeto depois
/* Em códigos que possuem mais chance de apresentar algum tipo de erro é ideal utilizar
a funçao Try .... para que o usuário nao receba na tela todo o erro apresentado com
vários códigos expostos, com nome de arquivos e tal ... tem que ser um negócio mais profissional
e pra fazer isso utilizamos o try, catch e throw */

function tratarErroELancar(erro) {
    throw new Error('Já identifcamos o erro e estamos trabalhando para resolver')
} // posso lançar uma string como acima, numero, até criar um object, um id

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)