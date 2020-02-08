// Operadores unários

let num1 = 1
let num2 = 2

num1++ // pós fixada, ela é lida depois do número, quando é a + b o operador é infix, no meio
console.log(num1)
--num1 // a forma pré fixada tem preferencia, ela é lida antes de ler o numero
console.log(num1) // volta a valer 1

console.log(++num1 === num2--) // true, pq o -- só foi executado depois da comparaçao
console.log(num1 === num2) // antes estavam iguais até o '--' e agora já esta diferente pq foi aplicado o operador unário --

// evitar esse tipo de coisas pra evitar erros, tentar mater o código simples sempre

