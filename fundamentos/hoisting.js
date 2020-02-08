// é o içamento da definiçao de alguma variável

console.log('a =', a)
var a = 2 // o valor de a só foi definido aqui mas mesmo assim foi executado a linha acima e trouxe undefined
console.log('a =', a) 

console.log('b =', b) // aqui já deu erro b is not defined
let b = 2 
console.log('b =', b)