// Destructuring usando em funçoes usando array

function rand ( [min = 0, max =1000]) { // Destructuring do array [] de dentro da func, e já estou criando um novo array fora da func
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
// console.log(rand()) vai dar erro pq nao tem nenhum valor de mim e max

const teste = [5, 10]
console.log(rand(teste))

/* isso é pra ver que é bem semelhante ao axercício destructuring3.js
quando eu usei o destructuring [] eu já criei um array [] e e informei
no próprio destructurin os valores de min e max. Esse destructuring é do array 
informado em if dentro da função. Note o array foi criado a partir do destructuring
e está fora da funçao, mas nao criri um nome pra ele, é como se tivesse sido criado
uma const = [min, max], sendo que min e max são variáveis do tipo number. Mesmo
sem ter criado uma const explícita fo iutilizado em console.log(rand([50, 40]))
e rodou a funçao pq a const com o array está meio que salva no limbo??? que merda
depois eu criei a const teste recebendo um array e funcionou perfeitamente
*/

const outroteste = [15, 20]
console.log(rand(outroteste))

/* pqp consegui criar outra const acessando o destructuring, entao na vdd é como se
o destructuring fosse uma forma para criaçao de constantes a partir dos valores
de dentro da função. entendi foi merda nenhuma
*/

/* no fim destructuring serve pra retirar valores de dentro de objetos, funções
arrays sem ter que ficar fazendo um por um. E uma forma mais avançada é utilizar 
o destructuringo em funçoes para já atribuir valores e substituir variáveis 
dentro da função antes de passar a lógica dela, complicado mas é assim mesmo
PARECE SER MUUUUUITO ÚTIL ISSO, tem que ESTUDAAAAR! 
*/