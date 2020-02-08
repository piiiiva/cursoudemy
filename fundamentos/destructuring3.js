// destructuring em funções

/* func rand () { ... } isso seria a function normal, quando utilizei { min = 0, max = 1000 } eu quis fazer um destructuring para pegar os valores min e max de dentro da função e dentro de const
mas já definindo esses valores, note que não é um objeto ainda, é um destructuring, mas depois que o destructuring é feito eu crio um objeto sem nome, mas está criado, no exemplo foi definido depois
que esse objeto será const obj e está sendo atribuido novos valores de max e min nesse objeto.
*/
function rand({ min = 0, max = 1000 }) { 
    const valor = Math.random() * (max - min) + min // Math.random gera valores entre 0 e 1
    return Math.floor(valor) // floor arredonda para o chão
}

const obj = { max: 50, min: 40}
console.log(rand(obj)) // estou rodando a func rand com o obj criado a partir do destructuring. Se eu só criasse o obj e atribuisse min e max sem usar o destructuring nao daria certo
// pq eu estaria criando um obj com valores de contexto global, e com o destructuring eu estou criando o obj a partir dos valores de dentro do escopo da func rand
console.log(rand({ min: 955})) // aqui estou colocando um objeto dentro da func rand sem atribuir max, mas ele já foi pré definido no destructuring
console.log(rand({})) // aqui mesma coisa, ele pega os valores padroes do destructuring
// console.log(rand())
console.log(typeof obj)

/*
function rand() { 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}  // --> esses valores foram criados no escopo global, nao conseguem entrar no escopo de rand
console.log(rand(obj))
*/

const obj2 = {min: 10, max: 15}
console.log(rand(obj2))
/* consegui criar outra constante a partir do destructuring, é como se eu pudesse
determinar os valores min e max de dentro da funçao criando uma const utilizando
o mesmo molde utilizado no destructurindo. Não pode ser meio perigoso? Digamos que
eu quisesse fazer outra lógica, criando um novo objeto que tenha parametros de min e max
esse objeto sempre ficaria vinculado a func rand? mesmo que eu quisesse usá-lo para outra lógica?
se bem que seu eu for fazer outra lógica seria em um escopo novo.
*/