// Operadores ternarios
// ? indica operador ternário e é baseado em true || false
// nota >= 7 expressao relacional - primiero operando
// 'Aprovado' se for true - segundo operando
// 'Reprovado' se for false - terceiro operando
// É um condicional de forma reduzida no lugar de if || else || function
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'  // em funcao arrow o retur é implícito
/* Abaixo está o código completo, aqui em cima é a forma reduzida
const resultado = nota => {
        return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/

console.log(resultado(7.1))
console.log(resultado(6.7))
