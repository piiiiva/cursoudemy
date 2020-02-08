// par nome/valor ou chave/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' // contexto léxico 2 mesmo usando a mesma const nao vai dar conflito pq agora é outro escopo
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor ou chave/valor
const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)