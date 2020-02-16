// é uma função que retorna um objeto

const pord1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 35
}

// pra nao ter que ficar instanciando o objeto na mao toda vez vamnos instaciar atra'ves da funcao factory

// factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())