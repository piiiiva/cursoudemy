//evitar o uso de var, usar let que é mais moderno, mas nao é pecado usar var
var a = 3
let b = 4

var a = 30 //var pode ser redeclarado sem querer, e nao gera erro, por isso é bom utilizar o let
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50
console.log(c)
