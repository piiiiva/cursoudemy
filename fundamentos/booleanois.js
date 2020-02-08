isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //!! duas negaçoes pra indicar se algo é verdadeiro ou falso
// !!3 isso significa um (NAOé(NAO3) ou seja, é 3 !! afirma o que vem depois dele

console.log('Os verdadeiros ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log({})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos ...')
console.log(!!0)
console.log(!!'') // se estiver vazia é falso e se tiver algo escrito ou com espaço será verdadeiro
console.log(!!null)
console.log(!!NaN)
console.log(!undefined)
console.log(!!(isAtivo= false))
console.log(!!('' || null || 0 || ' ' || 123))