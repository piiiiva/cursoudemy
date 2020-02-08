const nome= 'Rebeca'
const concatenacao = 'Olá, ' + nome + '!' 
const template = `
Olá,
${nome}!` // Usando o cifrão eu consigo add uma funçao dentre da string, mas precisa usar CRASE `` SEMPRE
console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`) // FUNCAO dentro da string, usar crase sempre

const up = texto => texto.toUpperCase() // esse .toUpperCase não puxa sozinho, tem que digitar inteiro nao sei pq
console.log(`Ei .... ${up(`cuidado`)}!`)
console.log(`Ei .... ${up(nome)}! Venha aqui`)