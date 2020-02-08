// Destructuring em array

/* destructuring do elemento de dentro do array. sendo que a passa a ser 
uma const depois de utilizar o destructuring, na vdd ele nem existia antes,
 ele meio que foi criado para receber o valor do array que o destructuring
 está chamando, dentro do array de const, definindo o valor de a, na 
 própria funçao
*/
const [a] = [10] 
console.log(a)

/* const [Destructuring] = [array] ... destructuring da const sem nome sendo que ela
possui um array, entao quero tirar de dentro desse array os valores de
n1, , n3, , n5, e defino que n6=0 e dpois eu já defino os valores de cada elemento
do array, como se fosse const = [10, 7, 9, 8] . o destructuring vai buscar esses valores
aplica-los às variáveis que ele acabou de criar, no caso n1, n3 e n5 e o n6 já foi definido  */
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

/* Lembrando que pra usar destructuringo em
objeto usa {}
array usa []
*/

/* parece que pouco se usa em array */