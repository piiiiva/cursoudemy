const escola = "Cod3r"

console.log(escola.charAt(4)) // Encontra o 4 caractere dentro da string, lembrando que começa a contar do 0
console.log(escola.charAt(5)) // no JS se o caractere desejado nao existir ele retorna um valor em branco, nao vai dar erro
console.log(escola.charCodeAt(3)) // Retorna o valor da tabela unicode do terceiro caractere
console.log(escola.indexOf('3')) // Retorna qual a posiçao do caractere desejado (a primeira vez que ele aparece) - o contrario de .charAt

console.log(escola.substring(1)) // Retorna a string a partir do primeiro caractere, descontando o caractere 0
console.log(escola.substring(0, 3)) // Retorna a string a partir do caractere 0 até o caractere 3 sem contar o 3º caractere

console.log('Escola '.concat(escola).concat('!')) 
console.log('Escola ' + escola + "!") // da pra usar o + pra concatenar, apesar de ser usado para funçoes aritméticas, quando envolve string da pra usar.
console.log('3' + 2) // Tomar cuidado! Isse gera 32, mas se for dividido por exemplo iria gerar uma funçao aritimética. Se tiver string na função, ela sempre da preferencia pra concatenar, desde que faça sentido, se nao automaticamente se transforma em uma operaçao matemática mesmo
console.log('3' / 2)
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // quebra essa string em um array nao sei se é assim que escreve

