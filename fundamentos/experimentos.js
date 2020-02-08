// aula Contexto de Execuçao - Node/Browser

let a = 3 // fica no escopo local


global.b = 123 // escopo global, tipo window do browser, todos tem acesso

this.c = 456
this.d = false
this.e = 'teste'
// console.log(c) vai dar erro 'c is note defined' pq c nao está definido no escopo global tem que usar o this
console.log(global.c) // vai dar undefined


console.log(this.a)
console.log(a) // estou acessando dentro do escopo de let?
console.log(global.a) // global 
console.log(global.b)
console.log(this.c)
console.log(global.c)
console.log(module.exports.c) // recurso do node, é tipo o this
console.log(module.exports === this) // true
console.log(module.exports)
console.log(this)
console.log(global)

// criando um variável maluca sem var e sem let
abc = 3 // nunca fzer isso JAAAAMAIS!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste'}

// tudo isso vai ser aprofundado mais pra frente