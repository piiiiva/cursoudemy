console.log(Math.ceil(6.1)) // ceil é arrendondamento. O Math é um objeto e uso o . para indicar uma funçao para ele a funcão ceil no caso

const obj1 = {}
obj1.nome = 'Bola' // a notaçao ponto usada para definir um nome do obj1
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // entendi porra nenhuma aula 39
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
