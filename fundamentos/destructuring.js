// Destructuring em objetos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // deixar {} antes da atribuiçao quer dizer o destrcturing
// Eu quero os atributos nome e idade da constante pessoa sem ter que chamr pessoa.nome e pessoa.idade
// ao usar o destructuring eu meio que estou criando uma variável, nesse caso uma constante
console.log(nome, idade)


const { nome: n, idade: i } = pessoa // usei destructuring e já atribui um nome de variável
console.log(n, i)
console.log(typeof i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)