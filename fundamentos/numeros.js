const peso1 = 1.0
const peso2 = Number('2.0')

console.log (peso1, peso2)
console.log(Number.isInteger(peso1)) // isInteger Estou dizendo que é um número inteiro e vai me retornar verdadeiro ou falso
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString()) //converte em string
console.log(media.toString(2)) // converte em string binario tem que usar o 2
console.log(typeof media)
console.log(typeof Number)
